import dayjs from "dayjs";
import type { Todo } from "./types.js";

export const printTodo = (todo: Todo): void => {
    const isDone = todo.isDone;
    let replyStr:string; 
    if (isDone) {
        replyStr = "【済】"
    } else {
        replyStr = "【未】"
    }

    const todoSummary =
        `${replyStr} (優先度: ${todo.priority}) ${todo.name}` +
        ` 期日: ${dayjs(todo.deadline).format("YYYY/MM/DD HH:mm")}`;
    console.log(todoSummary);
};