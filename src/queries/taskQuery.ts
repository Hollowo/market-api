interface TaskQueries {
    getAll(): string,
};

const getAll = (): string => {
    return `SELECT * from task`;
}

const TaskQueries: TaskQueries = {
    getAll,
};

export default TaskQueries;