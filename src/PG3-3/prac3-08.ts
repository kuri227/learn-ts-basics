const arr = ["Python", "C言語", "TypeScript", "C#"];
const arr2 = arr.map((value, index) => `${index + 1}: ${value}`);

console.log(arr2);