const ORDERS = require("../data/orders.json");
const findOrderByOrderNumberAndZipCode = (orderNumber, zipCode) => {
  return ORDERS.find(
    (order) =>
      order.delivery_info.orderNo === orderNumber && order.zip_code === zipCode
  );
};

module.exports = {
  findOrderByOrderNumberAndZipCode,
};
