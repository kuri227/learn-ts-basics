import type { Todo } from "../utils/types.js"
import { isOverdue } from "../utils/isOverdue.js"

const todo: Todo = {
    deadline : new Date(2025,9,15,9,45),
    isDone : false,
};
console.log(isOverdue(todo));