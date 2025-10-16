export const func = (grade: number): string => {
    return `<li>${grade}年</li>`;
};

const grades: number[] = [1,2,3,4,5];
// mapによって配列にfuncを全適用
const gradeListItem: string[] = grades.map(func);


console.log(gradeListItem);