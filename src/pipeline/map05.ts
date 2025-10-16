import type{ Todo } from "./types.js";
import { initTodos } from "./initTodos.js";

const targetId = 3;
const newName = "電気電子回路1の課題";
const updatedTodos: Todo[] = initTodos.map((todo) => {
    return todo.id === targetId ? {...todo, name: newName} : todo;
});

console.log(JSON.stringify(updatedTodos, null, 2));