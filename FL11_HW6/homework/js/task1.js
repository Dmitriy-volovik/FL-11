let pointA, pointB, pointC;
let x = 0;
let y = 1;

pointA = prompt('Enter coordinates for A point').split(', ').map(element => Number(element));

while (typeof pointA[x] !== 'number' || isNaN(pointA[x]) || typeof pointA[y] !== 'number' || isNaN(pointA[y])) {
    alert('Please enter correct data. Expecting two positive number, divided comma and space');
    pointA = prompt('Enter coordinates for A point').split(', ').map(element => Number(element));
}

pointB = prompt('Enter coordinates for B point').split(', ').map(element => Number(element));
while (typeof pointB[x] !== 'number' || isNaN(pointB[x]) || typeof pointB[y] !== 'number' || isNaN(pointB[y])) {
    alert('Please enter correct data. Expecting two positive number, divided comma and space');
    pointB = prompt('Enter coordinates for B point').split(', ').map(element => Number(element));
}

pointC = prompt('Enter coordinates for C point').split(', ').map(element => Number(element));
while (typeof pointC[x] !== 'number'|| isNaN(pointC[x]) || typeof pointC[y] !== 'number' || isNaN(pointC[y])) {
    alert('Please enter correct data. Expecting two positive number, divided comma and space');
    pointC = prompt('Enter coordinates for C point').split(', ').map(element => Number(element));
}

const DIVIDER = 2;

if ((pointA[x] + pointB[x]) / DIVIDER === pointC[x] && (pointA[y] + pointB[y]) / DIVIDER === pointC[y]) {
    console.log(true);
} else {
    console.log(false);
}

