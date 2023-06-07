import Task from "../entities/task";

interface TaskUtil {
    mapper(result: any): Task,
    mapperMany(result: any): Task[]
}

const mapper = (result: any): Task => {
    return {
        id: result.id,
        done: result.done,
        description: result.description
    }
}

const mapperMany = (result: any[]): Task[] => {
    return result.map(res => mapper(res));
}

const TaskUtil: TaskUtil = {
    mapper, 
    mapperMany,
}

export default TaskUtil;