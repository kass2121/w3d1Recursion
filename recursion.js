"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
 */
module.exports = {
    sumTo,
    factorial,
    fibonacci,
    outputList,
    outputListLoop,
    reverseList,
    reverseListLoop
};

/**
 * 
 * @param {number} n number
 * @returns {number} return sum, Sum all numbers till the given one 
 */
function sumTo(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumTo(n - 1);
    }

}
console.log(sumTo(5)); //15
//-----------------------------------------------------------
/**
 * 
 * @param {*} number input number 
 * @returns {number} return factorial of the input 
 */
function factorial(number) {
    if (number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}
console.log(factorial(4)); //24
//------------------------------------------------------------
/**
 * 
 * @param {number} num 
 * @returns {number} return fibonacci num
 */
function fibonacci(num) {
    if (num <= 1) {
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
} //test 
console.log(fibonacci(10));
//-------------------------------------------------------------
/**
 * print list
 */
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function outputList(list) {

    alert(list.value);

    if (list.next) {
        printList(list.next);
    }

}
//--------------------------------------------------------
outputList(list);
/**
 * 
 */

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function outputListLoop(list) {
    let tmp = list;

    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next;
    }

}

outputListLoop(list);
//--------------------------------------------------------
/**
 * 
 */
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printReverseList(list) {

    if (list.next) {
        printReverseList(list.next);
    }

    console.log(list.value);
}

printReverseList(list);
/**
 * 
 */
//--------------------------------------------
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printReverseList(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        alert(arr[i]);
    }
}

printReverseList(list);
