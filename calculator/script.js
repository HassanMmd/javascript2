let num1 = 0;
let num2 = 0;
let output = ``;
let operation;

const btns = document.body.querySelectorAll('button')
const text = document.body.querySelector('.text')
const dot = document.body.querySelector('#dot')
const equal = document.body.querySelector('#equal')
const clear = document.body.querySelector('#clear')
const eraseBtn = document.body.querySelector('.erase')

document.addEventListener('keydown', (e) => {
    if (e.key === '1') {
        keyIsPressed(`1`);
    } else if (e.key === '2') {
        keyIsPressed(`2`);
    } else if (e.key === '3') {
        keyIsPressed(`3`);
    } else if (e.key === '4') {
        keyIsPressed(`4`);
    } else if (e.key === '5') {
        keyIsPressed(`5`);
    } else if (e.key === '6') {
        keyIsPressed(`6`);
    } else if (e.key === '7') {
        keyIsPressed(`7`);
    } else if (e.key === '8') {
        keyIsPressed(`8`);
    } else if (e.key === '9') {
        keyIsPressed(`9`);
    } else if (e.key === '0') {
        keyIsPressed(`0`);
    } else if (e.key === 'Backspace') {
        output = ``;
        num1 = 0;
        num2 = 0;
        text.textContent = `0`;
    }
})

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        if (btns[i].classList.contains("num")) {
            if (text.textContent == `ERROR!`) {
                output = ``;
            }
            addingInput(btns[i].value);
            showResult();
        } else if (btns[i].classList.contains("operation")) {
            addingOperation(btns[i].value);
        }
    })
    btns[i].addEventListener('mouseenter', () => {
        if (btns[i].classList.contains("num")) {
            btns[i].style.backgroundColor = 'green';
        } else if (btns[i].classList.contains("operation")) {
            btns[i].style.backgroundColor = 'aquamarine';
        }
    })
    btns[i].addEventListener('mouseout', () => {
        btns[i].style.backgroundColor = 'antiquewhite';
    })
}

clear.addEventListener('mouseenter', () => {
    clear.style.backgroundColor = 'aquamarine';
})
equal.addEventListener('mouseenter', () => {
    equal.style.backgroundColor = 'aquamarine';
})
dot.addEventListener('mouseenter', () => {
    dot.style.backgroundColor = 'aquamarine';
})

function add(number1, number2) {
    n1 = Number(number1);
    n2 = Number(number2);
    return Math.round(((n1 + n2) + Number.EPSILON) * 10000) / 10000;
}

function subtract(number1, number2) {
    return Math.round(((number1 - number2) + Number.EPSILON) * 10000) / 10000;
}

function multiply(number1, number2) {
    return Math.round(((number1 * number2) + Number.EPSILON) * 10000) / 10000;
}

function divide(number1, number2) {
    if (number2 == 0) {
        return `ERROR!`
    }
    else {
        return Math.round(((number1 / number2) + Number.EPSILON) * 10000) / 10000;;
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

function addingInput(input) {
    output += `${input}`;
}

function addingOperation(classOperation) {
    dot.style.backgroundColor = `antiquewhite`;
    num1 = output;
    operation = `${classOperation}`;
    output = ``;
    dot.disabled = false;
}

function showResult() {
    text.textContent = `${output}`
    text.textContent = (`${output}`).slice(0, 10);
}

function keyIsPressed(key) {
    output += `${key}`;
    text.textContent = `${output}`
}

function erase() {
    if (output != 0) {
        text.textContent = `ــــ`
        output = '';
    } else if (num2 != 0) {
        output = '';
        text.textContent = `ــــ`
    } else {
        text.textContent = `ــــ`
        operation = null;
    }
}

dot.addEventListener('click', () => {
    output += `.`;
    output = output;
    console.log(output);
    text.textContent = `${output}`;
    dot.disabled = true;
})

equal.addEventListener('click', () => {
    if (text.textContent == `ERROR!`) {
        output = ``;
    }
    num2 = output;
    if (num1 == 0) {
        text.textContent = `0`;
    } else {
        output = operate(num1, num2, operation);
        console.log(operation);
        text.textContent = (`${output}`).slice(0, 10);
    }
    if (text.textContent.includes(`.`)){
        dot.style.backgroundColor = 'aquamarine';
        dot.disabled=true;
    }else{
        dot.style.backgroundColor = `antiquewhite`;
        dot.disabled=false;
    }
})

clear.addEventListener('click', () => {
    dot.style.backgroundColor = `antiquewhite`;
    output = ``;
    num1 = 0;
    num2 = 0;
    text.textContent = `0`;
    console.log(output);
    dot.disabled = false;
})

eraseBtn.addEventListener('click', () => {
    erase();
})