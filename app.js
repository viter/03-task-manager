require("dotenv").config();
const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");

const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);
app.use(notFound);

const port = process.env.PORT | 3000;

const start = async () => {
  try {
    await connectDB(process.env.DB_CONNECTION_STRING);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
