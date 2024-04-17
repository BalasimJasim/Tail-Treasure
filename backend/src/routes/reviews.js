const express = require("express");
const router = require("./routes/reviews");

const app = express();

app.use("/reviews", router);

module.exports = app;

export default app;
