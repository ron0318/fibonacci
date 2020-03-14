'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);
function fib(n) {
    if (n === 0) {
        return 0;
    }else if (n === 1) {
        return 1;
    }
    return memo.get(n - 1) + memo.get(n - 2);
}
const length = 100;
for (let i = 0; i <= length; i++) {
    fib(i);
    memo.set(i, fib(i));
    console.log(fib(i));
}
