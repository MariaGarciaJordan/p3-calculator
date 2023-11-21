//obtener elementos del DOM
const resulLabel = document.querySelector('.calculator__result');
const buttons = document.querySelectorAll('.calculator__button');

//variables para almacenar los numeros y las operaciones
let currentNumber = "";
let previousNumber = "";
let currentOperator = "";

//funcion para acualizar el resultado
const updateResult = ()=>{
    resulLabel.textContent = currentNumber;
}

//funcion para operacion matematica
const calculate = ()=>{
    //aqui los numeros pasan de cadena a numero
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);

    //aqui se vera como se realiza la operacion segun lo que seleccionamos
    switch(currentOperator) {
        case '+':
            currentNumber = num1 + num2;
            break;
        case '-':
            currentNumber = num1 - num2;
            break;
         case 'x':
            currentNumber = num1 * num2;
            break;
         case '/':
            currentNumber = num1 / num2;
            break;
    }
    //aqui los numeros pasan a cadena
    currentNumber = currentNumber.toString();
}

//evento que se dispara al pulsar un botón
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        const value = button.textContent;
        
        //verificamos si el botton es un numero
        if(button.classList.contains('data--number')){
            currentNumber = currentNumber + value; //aqui se concatena
            updateResult();
        }
        else if(value === '='){
            calculate();
            updateResult();
            //reiniciar las variables despues de la operacion
            currentNumber = "";
            previousNumber = "";
        }
        //boton de limpiar
        else if(value === 'C'){
            currentNumber = "";
            previousNumber = "";
            currentOperator = "";
            updateResult();
            resulLabel.textContent = 0;
        }
        else {
            previousNumber = currentNumber;
            currentNumber = '';
            currentOperator = value;
        }
    })
})