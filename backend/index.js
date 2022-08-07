require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("tiny"));
app.use(cors());

app.use("/", indexRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
