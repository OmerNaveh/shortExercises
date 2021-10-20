const { validStudent } = require('./db')
const http = require('http');

http.createServer((req,res)=>{
    //always write headers
    res.writeHead(200, 'ok',
     {'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Origin':"*"},
     {'Content-Type': 'text/html'}
    );
    // usage of data
    let isable;
    req.on('data', (data) => {
        const userInfo = JSON.parse(data);
        if(validateName(userInfo.name) && validateAge(userInfo.age) && validateAbility(userInfo.ability)){
        res.write('You are registered you king!')
        }
        else{
        res.write('not able to register you suck!')
        }
      });
    
    req.on('end', () => {
        res.end();
        return
    });
}).listen(8080, ()=>{
    console.log('running on server')
})

function validateName(name){
    if(validStudent.nameNotEqual.includes(name))return false
    return true
}
function validateAge(age){
if(age>=validStudent.minAge && age<= validStudent.maxAge) return true;
return false;
}
function validateAbility(ability){
    if(validStudent.ability.includes(ability))return true
    return false
}