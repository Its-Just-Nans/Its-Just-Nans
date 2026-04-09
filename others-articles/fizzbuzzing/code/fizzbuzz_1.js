const FIZZ = 1;
const BUZZ = 2;
const FIZZBUZZ = 3;

const tab = [FIZZBUZZ, 0, 0, FIZZ, 0, BUZZ, FIZZ, 0, 0, FIZZ, BUZZ, 0, FIZZ, 0, 0];

function fizzbuzz(n) {
    const res = tab[n % 15];
    return res == 0 ? n : res;
}

for (let i = 0; i < 1000000; i++) {
    console.log(fizzbuzz(i));
}
