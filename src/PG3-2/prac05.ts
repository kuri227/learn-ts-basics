import type { Todo } from "../utils/types.js"
import { getTodoStatus } from "../utils/getTodoStatus.js";

const todo: Todo = {
    deadline : new Date(2025,9,16,2,15),
    isDone : false,
    name : "基礎物理3の宿題",
};

console.log(getTodoStatus(todo));