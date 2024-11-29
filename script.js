let display = document.getElementById('display');

function appendNumber(number) {
  if (display.innerText === '0') {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendOperator(operator) {
  const lastChar = display.innerText.slice(-1);
  if ('+-*/'.includes(lastChar)) {
    display.innerText = display.innerText.slice(0, -1) + operator;
  } else {
    display.innerText += operator;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || '0';
}

function calculate() {
  try {
    display.innerText = eval(display.innerText) || '0';
  } catch {
    display.innerText = 'Error';
  }
}
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (!isNaN(key)) {
    appendNumber(key); // Si es un número
  } else if ('+-*/.'.includes(key)) {
    appendOperator(key); // Si es un operador
  } else if (key === 'Enter') {
    calculate(); // Si presiona Enter
  } else if (key === 'Backspace') {
    deleteLast(); // Si presiona Backspace
  } else if (key === 'Escape') {
    clearDisplay(); // Si presiona Escape
  }
});
function calculate() {
  try {
    const result = eval(display.innerText);
    if (result === Infinity || isNaN(result)) {
      throw new Error("Operación inválida");
    }
    display.innerText = result;
  } catch {
    display.innerText = "Error";
    setTimeout(() => clearDisplay(), 1500); // Limpia automáticamente después de 1.5s
  }
}
