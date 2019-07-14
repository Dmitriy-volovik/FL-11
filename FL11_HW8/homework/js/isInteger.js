const isInteger = (number) => typeof number === "number" && !(number % 1) && isFinite(number);
console.log(isInteger(5));
console.log(isInteger(5.1));
console.log(isInteger(Infinity));
console.log(isInteger(NaN));
console.log(isInteger('string'));
console.log(isInteger(5.0));
