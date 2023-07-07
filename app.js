const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
//middleware

app.use(express.json());

//routes
app.get("/happy", (req, res) => {
  res.send("yay it worked!!!!");
});

app.use("/api/v1/tasks", tasks);

const port = 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`app is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
