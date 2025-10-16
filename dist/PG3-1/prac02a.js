const calculator = {
    add: function (a, b) {
        return a + b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    division: function (a, b) {
        return a / b;
    }
};
const A = 2;
const B = 3;
console.log(`${A}と${B}を足すと、${calculator.add(A, B)}`);
console.log(`${A}と${B}を掛けると、${calculator.multiply(A, B)}`);
console.log(`${B}を${A}で割ると、${calculator.division(B, A)}`);
export {};
//# sourceMappingURL=prac02a.js.map