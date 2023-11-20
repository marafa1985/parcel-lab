const express = require("express");
const cors = require("cors");
const { findOrderByOrderNumberAndZipCode } = require("./service/orders.js");
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get("/orders/:orderNo", (req, res) => {
  const { orderNo } = req.params;
  const { zip } = req.query;

  if (!zip) {
    return res.status(400).json({
      error: {
        message: "Missing zip code",
      },
    });
  }

  const getOrderDetails = findOrderByOrderNumberAndZipCode(orderNo, zip);

  if (!getOrderDetails) {
    return res.status(404).json({
      error: {
        message: "Order not found",
      },
    });
  }

  res.status(200).json(getOrderDetails);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
