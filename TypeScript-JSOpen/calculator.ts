
type operation = 'multiply' | 'divide' | 'add';

const calculator = (number1:number, number2:number, op:operation) : number=>{
    if(op === 'multiply')
        return number1 * number2;
    if(op === 'add')
        return number1 + number2;
    if(op === 'divide')
        if(number2 === 0) throw new Error('cant divide by 0')
        return number1 / number2;
}

console.log(calculator( Number(process.argv[2]), Number(process.argv[3]), process.argv[4] as operation));
