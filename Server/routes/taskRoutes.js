import express from "express";
import {protect} from "../middlewares/authMiddleware.js";

import { createTask, updateTask, deleteTask } from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.post("/", createTask);
taskRouter.put("/:id", updateTask);
taskRouter.delete("/delete",protect, deleteTask);

export default taskRouter;