const FIZZ = 1;
const BUZZ = 2;
const FIZZBUZZ = 3;

const tab = {
    0: FIZZBUZZ,
    3: FIZZ,
    5: BUZZ,
    6: FIZZ,
    9: FIZZ,
    10: BUZZ,
    12: FIZZ,
};

function fizzbuzz(n) {
    return tab[n % 15] ?? n;
}

for (let i = 0; i < 1000000; i++) {
    console.log(fizzbuzz(i));
}
