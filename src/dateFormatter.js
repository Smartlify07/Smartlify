import moment from "moment";

export const dateFormatter = (dateToFormat) => {
  let formattedDate = moment(dateToFormat).format("DD-MMMM-YYYY");
  return formattedDate.split("-").join(" ");
};
