// 配列の初期化 型明示
const numArr1: number[] = [4649, 3150, 0.5, -1];
const strArr1: string[] = ["M", "D", "E", "知能情報"] ;

// 配列の初期化 型推論
const numArr2 = [4649, 3150, 0.5, -1];
const strArr2 = ["M", "D", "E", "知能情報"];

// 空配列の初期化 型明示が必要
const numArr3: number[] = [];
const strArr3: string[] = [];

const arr1: (number | string)[] = ["one", 2, 3];