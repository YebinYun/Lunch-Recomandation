require("dotenv").config();

const Port = process.env.PORT;
const cors = require("cors");
const express = require("express");
const app = express();
const router = require("./routes/route.js");

app.use(cors());
app.use("/naver", router);

app.listen(Port, () => console.log(`Server listening on port ${Port}`));

app.get("/", (req, res) => {
    res.send(`Server listening on port ${Port}`);
});

module.exports = app;