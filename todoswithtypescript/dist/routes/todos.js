"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const todos = [
    { id: 1, text: "gym today" },
    { id: 2, text: "typescript practice" },
];
router.get("/todos", (req, res) => {
    res.json(todos);
});
router.post("/todos", (req, res) => {
    const newTodod = {
        id: Date.now(),
        text: req.body.text,
    };
    todos.push(newTodod);
    res.json(newTodod);
});
exports.default = router;
