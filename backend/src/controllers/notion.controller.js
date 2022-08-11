import { isNotEmpty } from '../utils/isNotEmpty';
import {
  getNotionClient,
  formatCalendars,
  formatNotionData,
  collectUniqueTags,
  createProperties,
} from '../services/notion.service';

export const getCalendars = async (req, res) => {
  // #swagger.tags = ['Notion']

  /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/Notion" },
      description: "Notion page searched successfully." } */

  const checkDate = req.query.date;
  const { notion, databaseId } = await getNotionClient(req, res);

  if (isNotEmpty(notion) && isNotEmpty(databaseId)) {
    const { results } = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });
    const calendars = await formatCalendars(results, checkDate);
    res.status(200).json(calendars);
  } else {
    res.status(403).send('Notion Token is required.');
  }
};

export const getTags = async (req, res) => {
  // #swagger.tags = ['Notion']

  /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/Tag" },
      description: "Notion tag searched successfully." } */

  const { notion, databaseId } = await getNotionClient(req, res);

  if (isNotEmpty(notion) && isNotEmpty(databaseId)) {
    const { results } = await notion.databases.query({
      database_id: databaseId,
    });
    const tags = await collectUniqueTags(results);
    res.status(200).json(tags);
  } else {
    res.status(403).send('Notion Token is required.');
  }
};

export const addCalendarPage = async (req, res) => {
  // #swagger.tags = ['Notion']

  /*	#swagger.parameters['obj'] = {
      in: 'body',
      description: 'Notion information.',
      required: true,
      schema: { $ref: "#/definitions/Notion" }
  } */
  /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/Notion" },
      description: "Notion page created successfully." } */

  const { notion, databaseId } = await getNotionClient(req, res);
  const { name, startDate, endDate, description, tags } = req.body;

  if (isNotEmpty(notion) && isNotEmpty(databaseId)) {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: createProperties(
        name,
        startDate,
        endDate,
        false,
        description,
        tags
      ),
    });
    res.status(200).json(formatNotionData(response));
  } else {
    res.status(403).send('Notion Token is required.');
  }
};

export const updateCalendarPage = async (req, res) => {
  // #swagger.tags = ['Notion']

  /*	#swagger.parameters['obj'] = {
      in: 'body',
      description: 'Notion information.',
      required: true,
      schema: { $ref: "#/definitions/Notion" }
  } */
  /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/Notion" },
      description: "Notion page updated successfully." } */

  const { notion, databaseId } = await getNotionClient(req, res);
  const { pageId, name, startDate, endDate, done, description, tags } =
    req.body;

  if (isNotEmpty(notion) && isNotEmpty(databaseId)) {
    const result = await updatePage(
      pageId,
      name,
      startDate,
      endDate,
      done,
      description,
      tags
    );
    res.status(200).json(result);
  } else {
    res.status(403).send('Notion Token is required.');
  }
};

export const deleteCalendarPage = async (req, res) => {
  // #swagger.tags = ['Notion']

  /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/Notion" },
      description: "Notion page deleted successfully." } */

  const { blockId } = req.body;
  const { notion } = await getNotionClient(req, res);
  if (isNotEmpty(notion)) {
    const result = await notion.blocks.delete({
      block_id: blockId,
    });
    res.status(200).json(result);
  } else {
    res.status(403).send('Notion Token is required.');
  }
};
