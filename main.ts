import { off } from "process";

function RNG(min: number, max: number) {
    const Nrandom = Math.random();
    return Math.trunc((max - min) * Nrandom + min);
}

function RNGDec(min: number, max: number, precision: number) {
    const Nrandom = Math.random();
    let result: string;
    result = ((max - min) * Nrandom + min).toFixed(precision);
    return result;
}


function RNGSequence(min: number, max: number, len: number): number[] {
    let myarray: number[] = [];
    while (myarray.length < len) {
        let numero = RNG(min, max);
        if (myarray.includes(numero)) {
            continue;
        }
        myarray.push(numero);
    }
    return myarray;
}

let ArrayRNG: number[] = [];
ArrayRNG = RNGSequence(0, 100, 10);

console.log(ArrayRNG);



