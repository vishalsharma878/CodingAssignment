let currentInput = '';
let currentExpression = '';

function appendCharacter(char) {
    currentInput += char;
    document.getElementById('input').value = currentInput;
}

function clearInput() {
    currentInput = '';
    currentExpression = '';
    document.getElementById('input').value = '';
    document.getElementById('output').value = '';
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        document.getElementById('output').value = result;
    } catch (error) {
        document.getElementById('output').value = 'Error';
    }
}
