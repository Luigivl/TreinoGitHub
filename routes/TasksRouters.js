const express = require("express");
const router = express();
const TaskControllers = require("../controllers/TaskControllers");

router.get("/tasks/add", TaskControllers.createtask);
router.post("/tasks/add", TaskControllers.create);
router.post("/tasks/remove", TaskControllers.remove);
router.get("/tasks", TaskControllers.showTask);
router.get("/tasks/edit/:id", TaskControllers.edit);
router.post("/tasks/edit", TaskControllers.Updat);
router.post("/task/done", TaskControllers.done);
module.exports = router;
