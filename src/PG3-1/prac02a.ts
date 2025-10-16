const calculator = {
    add : function(a: number, b: number){
        return a+b;
    },

    multiply : function(a: number, b: number){
        return a*b;
    },

    division : function(a: number, b: number){
        return a/b;
    }
};

const A : number = 2;
const B : number = 3;

console.log(`${A}と${B}を足すと、${calculator.add(A,B)}`);
console.log(`${A}と${B}を掛けると、${calculator.multiply(A,B)}`);
console.log(`${B}を${A}で割ると、${calculator.division(B,A)}`);
