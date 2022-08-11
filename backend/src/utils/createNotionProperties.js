export const createTitleProperties = (title) => {
  let Name = {};
  Name.title = [{ text: { content: title } }];
  return Name;
};
export const createDateProperties = (startDate, endDate) => {
  let Date = {};
  Date.date = endDate
    ? { start: startDate, end: endDate }
    : { start: startDate };
  return Date;
};
export const createDoneProperties = (done) => {
  let Done = {};
  Done.checkbox = done ? true : false;
  return Done;
};
export const createTextProperties = (text) => {
  let Text = {};
  Text['rich_text'] = [{ text: { content: text } }];
  return Text;
};
export const createSelectProperties = (name) => {
  let Option = {};
  Option.select = { name: name };
  return Option;
};
