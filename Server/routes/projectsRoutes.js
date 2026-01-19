import express from 'express';
import { createProject, updateProject } from '../controllers/projectController.js';
import { addMember } from '../controllers/workspaceController.js';

const projectRouter = express.Router();

projectRouter.post('/', createProject);
projectRouter.put('/', updateProject);
projectRouter.post('/:projectId/addMember', addMember);

export default projectRouter;