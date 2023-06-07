import connection from "./connection";
import TaskQueries from "../queries/taskQuery";
import Task from "../entities/task";
import TaskUtil from "../utils/taskUtil";

interface TaskModel {
    getAll(): Promise<Task[]>
}

const getAll = async (): Promise<Task[]> => {
    const tasks = await connection.execute(TaskQueries.getAll());
    return TaskUtil.mapperMany(tasks);
};

const TaskModel: TaskModel = {
    getAll
}

export default TaskModel;