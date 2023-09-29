import moment from "moment";
export const formatDate = (dateStr) => {
  const dt = moment(dateStr).format("ll");
  console.log(dt);
  return dt;
};
