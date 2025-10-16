import type { Todo } from "./types.js";

export const initTodos: Todo[] = [
    {
        id: 1,
        name: "React予習(Youtube)",
        isDone: false,
        priority: 1,
        deadline: new Date(2024,9,0),
    },
    {
        id: 2,
        name: "TypeScriptの復習",
        isDone: true,
        priority: 2,
        deadline: new Date(2024,9,30),
    },
    {
        id: 3,
        name: "基礎物理学3の宿題",
        isDone: false,
        priority: 1,
        deadline: new Date(2024, 9, 20, 23, 59),
    },
    {
        id: 4,
        name: "知識科学概論の宿題",
        isDone: true,
        priority: 3,
        deadline: new Date(2024, 9, 27),
    },
];