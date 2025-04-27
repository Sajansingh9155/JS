function appendValue(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = 'Error';
    }
}

function backspace() {
    const currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (key >= '0' && key <= '9') { 
        appendValue(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') { 
        appendValue(key);
    } else if (key === 'Enter') { 
        calculate();
    } else if (key === 'Backspace') { 
        backspace();
    } else if (key === 'c' || key === 'C') {
        clearResult();
    }
});