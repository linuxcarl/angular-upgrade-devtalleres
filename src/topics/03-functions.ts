function addNumbers(a: number, b: number): number {
  return a + b;
}
const arrowFuntions =  (a: number, b: number): string => {
    return `${a + b}`;
}
const multiplyNumbers = (firstNumber: number,  secoundNomber: number): number => {
    return firstNumber * secoundNomber;
}
// const sumNumbers = addNumbers(5, 5);
// const sumNumbersArrow = arrowFuntions(5, 5);
// const multiplyNumbersArrow = multiplyNumbers(5, 5);
// console.log({
//     sumNumbers,
//     sumNumbersArrow,
//     multiplyNumbersArrow
// })

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}
const stride: Character = {
    name: 'Stride',
    hp: 100,
    showHp() {
        console.log(`HP: ${this.hp}`);
    }
}
healCharacter(stride, 20);
healCharacter(stride, 8);
stride.showHp();


export {};