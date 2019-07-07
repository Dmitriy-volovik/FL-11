let triangle;
let a = 0;
let b = 1;
let c = 2;

triangle = prompt('Enter triangle points in format - a, b, c').split(', ').map(element => Number(element));
if (typeof triangle[a] !== 'number' || isNaN(triangle[a]) || triangle[a] < 0 ||
    typeof triangle[b] !== 'number' || isNaN(triangle[b]) || triangle[b] < 0 ||
    typeof triangle[c] !== 'number' || isNaN(triangle[c]) || triangle[c] < 0) {
    console.log('Triangle doesn’t exist');
        
}else{
    if (triangle[a] === triangle[b] && triangle[a] === triangle[c]) {
        console.log('Equivalent triangle');
    } else {
        if (triangle[a] === triangle[b] || triangle[a] === triangle[c] || triangle[c] === triangle[b]) {
            console.log('Isosceles triangle’')
        } else{
            console.log('Normal triangle');
            
        }
    }

}

