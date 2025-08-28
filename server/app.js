require("dotenv").config();

const express = require("express");
const http = require("http");
const cookieParser = require("cookie-parser");
const { default: mongoose } = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

app.use("/api", require("./routes/index"));

const PORT = process.env.PORT || 4000;

const bootstrap = async () => {
  try {
    console.log("mongo: ", process.env.MONGO_URI);

    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("MongpDB connected"));
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    console.log("Database connected");
  } catch (error) {
    console.error(error);
  }
};

bootstrap();
