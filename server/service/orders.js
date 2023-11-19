import fs from "fs";
const loadJSON = (path) =>
  JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));

const ORDERS = loadJSON("../data/orders.json");
export const findOrderByOrderNumberAndZipCode = (orderNumber, zipCode) =>
  ORDERS.find(
    (order) =>
      order.delivery_info.orderNo === orderNumber && order.zip_code === zipCode
  );
