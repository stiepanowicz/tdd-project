const assert = require('assert'); // synchronous, legacy CommonJS
// import assert from 'assert'; // asynchronous, modern ES

class Dollar {
    constructor(amount) {
        this.amount = amount;
    }
    times(multiplier) {
        return new Dollar(this.amount*2);
    }
}

let fiver = new Dollar(5);
let tenner = fiver.times(2);
assert.strictEqual(tenner.amount, 10);

console.log(fiver);
console.log(tenner);