require("dotenv").config();

const express = require("express");
const http = require("http");
const cookieParser = require("cookie-parser");
const { default: mongoose } = require("mongoose");
const errorMiddleware = require("./midlewares/error.middleware");

const app = express();

// Middleware
app.use(express.json());

app.use("/api", require("./routes/index"));

app.use(errorMiddleware);

const bootstrap = async () => {
  try {
    const PORT = process.env.PORT || 4000;

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
