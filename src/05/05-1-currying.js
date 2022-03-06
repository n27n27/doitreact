function multiply(a, b) {
    return a * b;    
}

function multiplyTwo(a) {
    return multiply(a, 2);
}

function multiplyX(x) {
    return multiply(a, x);
}

const multiplyY = y => a => multiply(a, y);

const equation = (a, b, c) => x => ((x * a) * b) + c;
const formula = equation(2, 3, 4);
const x = 10;
const result = formula(x);