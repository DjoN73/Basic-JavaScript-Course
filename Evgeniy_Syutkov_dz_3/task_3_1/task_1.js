"use strict";

//решето эратосфена

let arr = [];
let i = 0;
let j;

while (i < 100) {
    arr[i] = i;
    i++;
}

arr[1] = 0;
let num = 2;
while (num < 100) {
    if (arr[num] != 0) {
        j = (num * 2);
        while (j < 100) {
            arr[j] = 0;
            j += num;
        }
    }
    num++;
}

let primes = [];

for (i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
        primes.push(i);
    }
}

console.log(primes);
