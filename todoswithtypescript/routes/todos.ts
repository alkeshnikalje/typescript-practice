import { Router } from "express";
import { Todo } from "../models/todos";
const router = Router();

const todos: Todo[] = [
  { id: 1, text: "gym today" },
  { id: 2, text: "typescript practice" },
];

router.get("/todos", (req, res) => {
  res.json(todos);
});

router.post("/todos", (req, res) => {
  const newTodod: Todo = {
    id: Date.now(),
    text: req.body.text,
  };
  todos.push(newTodod);
  res.json(newTodod);
});

export default router;
