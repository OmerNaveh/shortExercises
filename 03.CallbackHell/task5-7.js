
function changeBgCol(color)
{
    document.body.style.backgroundColor = color;
}

function changeColors(time,color,callback, reject){
    setTimeout(()=>{
        let ranNum= Math.floor(Math.random()*10);
        if(ranNum> 5){
            changeBgCol(color)
            callback();
        } else{
            reject();
        }
    }, time)
}

function rejection(count){
    console.log(`your ${count} request was rejected`)
}

changeColors(1000 ,"blue", () => { 
    changeColors(1000 ,"red", () => {
        changeColors(1000 ,"green", () => {
            changeColors(1000 ,"brown", () => {
                changeColors(1000 ,"pink", () => {
                    changeColors(1000 ,"purple", () => {
                        changeColors(1000 ,"yellow",()=>{}, ()=>{rejection(7)});
                    },  ()=>{rejection(6)})
                },  ()=>{rejection(5)})
            },  ()=>{rejection(4)})
        },  ()=>{rejection(3)})
    },  ()=>{rejection(2)})
},  ()=>{rejection(1)});

