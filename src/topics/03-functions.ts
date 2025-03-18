function addNumbers(a: number, b: number): number {
  return a + b;
}
const arrowFuntions =  (a: number, b: number): string => {
    return `${a + b}`;
}
const multiplyNumbers = (firstNumber: number,  secoundNomber: number): number => {
    return firstNumber * secoundNomber;
}
const sumNumbers = addNumbers(5, 5);
const sumNumbersArrow = arrowFuntions(5, 5);
const multiplyNumbersArrow = multiplyNumbers(5, 5);
console.log({
    sumNumbers,
    sumNumbersArrow,
    multiplyNumbersArrow
})

export {};