import Task from "../entities/task";
import TaskModel from "../models/task";

interface TaskController {
    getAll(request: any, response: any): any,
};

const getAll = async (request: any, response: any): Promise<Task[]> => {

    const tasks: Task[] = await TaskModel.getAll();
    return response.status(200).json(tasks);

}

const TaskController: TaskController = {
    getAll,
};

export default TaskController;