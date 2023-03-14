let num1 = 0;
let num2 = 0;
let output = ``;
let operation;

function add(number1, number2) {
    n1 = Number(number1);
    n2 = Number(number2);
    return n1 + n2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 == 0) {
        return `ERROR!`
    }
    else {
        return number1 / number2;
    }
}

function operate(number1, number2, operation) {
    switch (operation) {
        case `+`:
            return add(number1, number2);
        case `-`:
            return subtract(number1, number2);
        case `*`:
            return multiply(number1, number2)
        case `/`:
            return divide(number1, number2)
    }
}


const text = document.body.querySelector('.text')
const numOne = document.body.querySelector('#one')
const numTwo = document.body.querySelector('#two')
const numThree = document.body.querySelector('#three')
const numFour = document.body.querySelector('#four')
const numFive = document.body.querySelector('#five')
const numSix = document.body.querySelector('#six')
const numSeven = document.body.querySelector('#seven')
const numEight = document.body.querySelector('#eight')
const numNine = document.body.querySelector('#nine')
const numZero = document.body.querySelector('#zero')
const adding = document.body.querySelector('#add')
const minus = document.body.querySelector('#minus')
const multipling = document.body.querySelector('#multiply')
const dividing = document.body.querySelector('#divide')
const dot = document.body.querySelector('#dot')
const equal = document.body.querySelector('#equal')
const clear = document.body.querySelector('#clear')


numOne.addEventListener('click', () => {
    output += `1`;
    console.log(output);
    text.textContent = `${output}`;
})
numTwo.addEventListener('click', () => {
    output += `2`;
    console.log(output);
    text.textContent = `${output}`;
})
numThree.addEventListener('click', () => {
    output += `3`;
    console.log(output);
    text.textContent = `${output}`;
})
numFour.addEventListener('click', () => {
    output += `4`;
    console.log(output);
    text.textContent = `${output}`;
})
numFive.addEventListener('click', () => {
    output += `5`;
    console.log(output);
    text.textContent = `${output}`;
})
numSix.addEventListener('click', () => {
    output += `6`;
    console.log(output);
    text.textContent = `${output}`;
})
numSeven.addEventListener('click', () => {
    output += `7`;
    console.log(output);
    text.textContent = `${output}`;
})
numEight.addEventListener('click', () => {
    output += `8`;
    console.log(output);
    text.textContent = `${output}`;
})
numNine.addEventListener('click', () => {
    output += `9`;
    console.log(output);
    text.textContent = `${output}`;
})
numZero.addEventListener('click', () => {
    output += `0`;
    console.log(output);
    text.textContent = `${output}`;
})
dot.addEventListener('click', () => {
    output += `.`;
    output = output;
    console.log(output);
    text.textContent = `${output}`;
    dot.disabled = true;
})
equal.addEventListener('click', () => {
    num2 = output;
    if (num2 != 0) {
        output = operate(num1, num2, operation);
        console.log(output);
        text.textContent = `${output}`;
    }
    else if (num1 == 0) {
        text.textContent = `0`;
    }
    else if (num2==0){
        output = operate(num1, num2, operation);
        console.log(output);
        text.textContent = `${output}`;
    }
    else{
        return;
    }
})
clear.addEventListener('click', () => {
    output = ``;
    num1=0;
    num2=0;
    text.textContent = `0`;
    console.log(output);
    /*     text.textContent = `${output}`; */
    dot.disabled = false;
})
adding.addEventListener('click', () => {
    num1 = output;
    operation = `+`;
    output = ``;
    console.log(output);
    dot.disabled = false;
})
minus.addEventListener('click', () => {
    num1 = output;
    operation = `-`;
    output = ``;
    console.log(output);
    dot.disabled = false;
})
multipling.addEventListener('click', () => {
    num1 = output;
    operation = `*`;
    output = ``;
    console.log(output);
    dot.disabled = false;
})
dividing.addEventListener('click', () => {
    num1 = output;
    operation = `/`;
    output = ``;
    console.log(output);
    dot.disabled = false;
})
