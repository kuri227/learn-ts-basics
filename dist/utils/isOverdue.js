import dayjs from "dayjs";
export const isOverdue = (todo) => {
    const now = dayjs();
    const { deadline, isDone } = todo;
    return !isDone && now.isAfter(deadline);
};
//# sourceMappingURL=isOverdue.js.map