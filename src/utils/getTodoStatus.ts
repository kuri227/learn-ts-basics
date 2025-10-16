import dayjs from "dayjs"
import type { Todo } from "./types.js"

export const getTodoStatus = ({deadline, isDone, name}: Todo): string => {
    const now = new Date();
    const diffMs = deadline.getTime() - now.getTime();
    const diffHours = Math.floor(Math.abs(diffMs) / (1000 * 60 * 60));

    if (isDone){
        return `【済】${name}`;
    } else if (diffMs >= 0){
        return `【未】${name}(期限まで残り${diffHours}時間)`;
    } else {
        return `【未】${name}(期限を${diffHours}時間超過)`;
    }
};