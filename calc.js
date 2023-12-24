// console.log(`process.argv`, process.argv);
// const [num1, operator, num2] = process.argv.slice(2);

const num1 = process.argv[2];
const operator = process.argv[3];
const num2 = process.argv[4];

// console.log(`num1`, num1);
// console.log(`operator`, operator);
// console.log(`num2`, num2);

let result;
switch (operator) {
  case "+":
    result = +num1 + +num2;
    console.log(`result`, result);
    break;
  case "-":
    result = +num1 - +num2;
    console.log(`result`, result);
    break;
  case "*":
    result = +num1 * +num2;
    console.log(`result`, result);
    break;
  case "/":
    result = +num1 / +num2;
    console.log(`result`, result);
    break;
}
