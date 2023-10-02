import moment from "moment";

export const formatDate = (dateStr) => {
  const dt = moment(dateStr).format("yyyy-MM-DD");
  return dt;
};
