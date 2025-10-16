const date2str = (dt) => {
    const year = dt.getFullYear();
    const month = String(dt.getMonth() + 1).padStart(2, "0");
    const day = String(dt.getDate()).padStart(2, "0");
    const hours = String(dt.getHours()).padStart(2, "0");
    const minutes = String(dt.getMinutes()).padStart(2, "0");
    return `${year}/${month}/${day} ${hours}:${minutes}`;
};
const deadline = new Date(2025, 9, 2, 14, 15);
const createdAt = new Date(2025, 8, 25, 9, 45);
// 関数の呼出し (テンプレート文字列の内部)
let str = `期限 ${date2str(deadline)} (登録日 ${date2str(createdAt)})`;
console.log(str);
export {};
//# sourceMappingURL=prac00.js.map