import { equals,add,sub,multiply,divide} from '../helpers/math';
import {logger, addEvents} from '../helpers/logger';
//elements
const equalsBtn = document.getElementById('equalsBtn')
const userInput = document.getElementById('userInput')
const allKeyNumbers = document.getElementsByClassName('numbers')
const deleteBtn = document.getElementById('deleteBtn');
//event listeners
export function calcFunc(){
giveNumbersMeaning();
addEvents()
equalsBtn.addEventListener('click' , ()=>{
    logger.number2 = userInput.value;
    userInput.value = equals(Number(logger.number1),Number(logger.number2),logger.callback);
})
}

function giveNumbersMeaning(){
    for(let num of allKeyNumbers){
        num.addEventListener('click', ()=>{
            userInput.value += num.value;
        })
    }
    deleteBtn.addEventListener('click', ()=>{
        userInput.value = userInput.value.slice(0, userInput.value.length-1);
    })
}