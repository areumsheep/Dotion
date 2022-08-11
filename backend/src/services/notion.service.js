import { Client } from '@notionhq/client';
import { isNotEmpty } from '../utils/isNotEmpty';
import {
  createTitleProperties,
  createDateProperties,
  createDoneProperties,
  createTextProperties,
  createSelectProperties,
} from '../utils/createNotionProperties';

export const getNotionClient = async (req, res) => {
  const notionToken = req.get('notionToken');
  const notionDatabase = req.get('notionDatabase');

  const notion = new Client({
    auth: notionToken,
  });
  const databaseId = notionDatabase;

  return { notion, databaseId };
};

export const formatCalendars = async (calendars, checkDate) => {
  let calendar = calendars.map((page) => {
    return formatNotionData(page);
  });
  if (checkDate) {
    calendar = calendar.filter((page) => {
      return getBetweenDateCheck(page, checkDate);
    });
  }
  return calendar;
};

export const collectUniqueTags = async (tags) => {
  let filteredTags = tags.map((page) => {
    const tag = page.properties.Tags.select;
    if (isNotEmpty(tag)) {
      const { name, color } = tag;
      return { name, color };
    }
  });
  filteredTags = filteredTags.filter((tag) => isNotEmpty(tag));
  const uniqueTags = [...new Set(filteredTags.map(JSON.stringify))].map(
    JSON.parse
  );
  return uniqueTags;
};

export const createProperties = (
  name,
  startDate,
  endDate,
  done,
  description,
  tags
) => {
  let properties = {};
  if (name) properties.Name = createTitleProperties(name);
  if (startDate || endDate)
    properties.Date = createDateProperties(startDate, endDate);
  if (isNotEmpty(done)) properties.Done = createDoneProperties(done);
  if (description) properties.Description = createTextProperties(description);
  if (tags) properties.Tags = createSelectProperties(tags);

  return properties;
};

// 조회된 Notion 데이터를 필요한 형태에 맞게 변화
export const formatNotionData = ({ id, properties }) => {
  let value = {};

  const title = properties.Name.title[0];
  const date = properties.Date;
  const tags = properties.Tags.select;
  const description = properties.Description.rich_text[0];

  value.id = id;
  value.startDate = date.date.start;
  value.endDate = date.date.end;
  value.done = properties.Done.checkbox;

  if (title) value.title = title.text.content;
  if (description) value.description = description.text.content;

  if (tags !== null) {
    value.tagName = tags.name;
    value.tagColor = tags.color;
  }
  return value;
};

//조회된 데이터가 호출된 날짜에 포함되는지 확인
const getBetweenDateCheck = ({ startDate, endDate }, checkDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const check = new Date(checkDate);

  if (end instanceof Date && !isNaN(end)) {
    return check >= start && check <= end;
  }
  return check.getTime() === start.getTime();
};
