const FIZZ = 1;
const BUZZ = 2;
const FIZZBUZZ = 3;

function fizzbuzz(n) {
    if (n % 3 == 0 && n % 5 == 0) {
        return FIZZBUZZ;
    } else if (n % 3 == 0) {
        return FIZZ;
    } else if (n % 5 == 0) {
        return BUZZ;
    }
    return n;
}

for (let i = 0; i < 1000000; i++) {
    console.log(fizzbuzz(i));
}
