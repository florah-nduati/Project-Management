

// create task
export const createTask = async (req, res) => {
  try {
    const { userId } = await req.auth();
    const { projectId } = req.params;
    const { title, description, status, priority } = req.body;

    // check if user is project lead
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: { members: { include: { user: true } } },
    }); 
    if (!project) {
      return res.status(404).json({ message: "project not found" });
    }
    if (project.team_lead !== userId) {
        return res
          .status(404)
          .json({ message: "only project lead can add tasks" });
      }

    const task = await prisma.task.create({
        data: {
          title,
          description,
          status,
          priority,
          projectId,
        },
      });
      return res.status(201).json(task);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.code || error.message });
    }
};