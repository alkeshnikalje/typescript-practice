import express from "express";
import totoRouter from "./routes/todos";
const app = express();

app.use(express.json());
app.use(totoRouter);

app.listen(3000, () => {
  console.log("server running..");
});
