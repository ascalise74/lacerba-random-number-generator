import { error } from "console";
import { off } from "process";
import { json } from "stream/consumers";

function RNG(min: number, max: number) {
    const Nrandom = Math.random();
    return Math.trunc((max - min) * Nrandom + min);
}

function RNGDec(min: number, max: number, precision: number) {
    try {
        const Nrandom = Math.random();
        let result: string;
        result = ((max - min) * Nrandom + min).toFixed(precision);
        return result;
    } catch (error) {
        console.log(`Exception generated: ${error}`);
        return 0;
    }
}


function RNGSequence(min: number, max: number, len: number): number[] {
    if (len > (max - min)) {
        throw new Error(`Cannot to generate ${len} numbers between ${min} and ${max}`)
    }
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

/*let ArrayRNG: number[] = [];
ArrayRNG = RNGSequence(0, 1000, 2000);

console.log(ArrayRNG);*/

//console.log(RNGDec(0, 10, -1));

const estrazioni : {[Ruota:string] : number[]} = {};

const ruote : string[] = ['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano', 'Napoli', 'Palermo', 'Roma', 'Torino', 'Venezia','Nazionale'];

ruote.forEach(ruota => {
    let myarray :number[] = [];
    myarray = RNGSequence(1, 100, 5);
    estrazioni[ruota] = myarray;
});

const jsonresult = JSON.stringify(estrazioni,null,2);
console.log(jsonresult);

