import dayjs from "dayjs";
import type { Todo } from "./types.js";

export const isOverdue = (todo: Todo): boolean => {
    const now = dayjs();
    const {deadline, isDone} = todo;
    
    return !isDone && now.isAfter(deadline);
};