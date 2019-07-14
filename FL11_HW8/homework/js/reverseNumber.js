function reverseNumber(number) {
    let singleDigit, reverseNumber = 0;
    while (number) {
        singleDigit = number % 10;
        reverseNumber = (reverseNumber * 10) + singleDigit;
        number = number / 10 | 0;
    }
    return reverseNumber;
}
console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));
