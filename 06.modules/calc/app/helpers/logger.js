import { multiply, sub ,add ,divide } from "./math"

//elements
const multiplyBtn = document.getElementById('multiplyBtn')
const subtractBtn = document.getElementById('subtractBtn')
const divideBtn = document.getElementById('divideBtn')
const addBtn = document.getElementById('addBtn')
const userInput = document.getElementById('userInput')


//logger Object
export const logger= {number1: 0,
number2:0, callback:''};

//general update object function
const updateLogger = (number1,callback) =>{
    logger.number1 = number1;
    logger.callback = callback;
}
//eventListeners
export function addEvents(){
multiplyBtn.addEventListener('click',()=>{
    updateLogger(userInput.value, multiply);
    userInput.value = '';
})

divideBtn.addEventListener('click', ()=>{
    updateLogger(userInput.value, divide);
    userInput.value = '';
})
addBtn.addEventListener('click',()=>{
    updateLogger(userInput.value, add);
    userInput.value = '';
} )
subtractBtn.addEventListener('click', ()=>{
    updateLogger(userInput.value, sub);
    userInput.value = '';
} )
}
