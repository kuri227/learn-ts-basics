const numArr: number[] = [10, 11, 12, 13];

const addedToEnd = [...numArr, 14];
console.log(`末尾に要素を追加 => ` + addedToEnd);

const addedToStart = [9, ...numArr];
console.log(`先頭に要素を追加 => ` + addedToStart);

const n=2;
const insertedAtn = [...numArr.slice(0,n), 10.5, ...numArr.slice(n)];
console.log(`${n}番目の位置に要素を挿入 => ` + insertedAtn);
