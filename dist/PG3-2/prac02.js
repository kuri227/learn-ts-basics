import dayjs from "dayjs";
const deadline = new Date(2025, 9, 2, 14, 15);
const createdAt = new Date(2025, 8, 25, 9, 45);
const str = `期限${dayjs(deadline).format("YYYY/MM/DD HH:mm")}` + `(登録日 ${dayjs(createdAt).format("YYYY/MM/DD HH:mm")})`;
console.log(str);
//# sourceMappingURL=prac02.js.map