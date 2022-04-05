let firstNumber = "";
let sign = null;
let display ="";


function add(numberOne,numberTwo){
    let total =numberOne+numberTwo;
    return total;
}


function subtract(numberOne,numberTwo){
    let total =numberOne-numberTwo;
    return total;
}


function multiply(numberOne,numberTwo){
    let total =numberOne*numberTwo;
    return total;
}


function divide(numberOne,numberTwo){
    let total =numberOne/numberTwo;
    if (numberTwo==0){
    total="Nice try smart guy";
    }
    return total;
}


function operationCheck(){
    if(firstNumber=="")firstNumber=display;
    else if(firstNumber&&display!=""){
        operate(parseFloat(firstNumber),sign,parseFloat(display));
        
    }
    display="";
}


function operate(numberOne,operation,numberTwo){
    let total = 0;

    if(operation =="+"){total=add(numberOne,numberTwo);}

    else if(operation =="-"){total=subtract(numberOne,numberTwo);}
    
    else if(operation =="*"){total=multiply(numberOne,numberTwo);}
    
    else if(operation =="/"){total=divide(numberOne,numberTwo);}

    if (typeof total ==="string"){
        document.querySelector(".display").innerHTML=total;
        firstNumber="";
        display="";
        return;
    }

    document.querySelector(".display").innerHTML= +total.toFixed(3);
    firstNumber=total;
    display="";
    return;
}


let numbers = document.querySelectorAll(".number");
numbers.forEach((number) =>{
    number.addEventListener("click", () =>{

            display=display+number.value;
            document.querySelector(".display").innerHTML=display;
    })
})


let operations = document.querySelectorAll(".operation");
operations.forEach((operation) =>{
    operation.addEventListener("click", () =>{
                document.querySelector(".display").innerHTML=operation.value;
                operationCheck();
                sign=operation.value;
                
             
        })
    })


let equation=document.querySelector(".equal");
equation.addEventListener("click",() =>{
    if (firstNumber && display !=""){
        operate(parseFloat(firstNumber),sign,parseFloat(display));
    }
})


let restart=document.querySelector(".clear");
restart.addEventListener("click", ()=>{
    display="";
    firstNumber="";
    sign=null;
    document.querySelector(".display").innerHTML=null;
})


let backSpace=document.querySelector(".backspace");
backSpace.addEventListener("click", () =>{
    display=display.slice(0, (display.length)-1);
    document.querySelector(".display").innerHTML=display;
})


let decimal=document.querySelector(".decimal");
decimal.addEventListener("click",  ()=>{
            if(display.includes(".")==false){
            display=display+".";
            document.querySelector(".display").innerHTML=display;
            }
})


window.addEventListener("keydown", (e)=>{
    
    if(e.key>=0 && e.key<=9){
        display=display+e.key;
            document.querySelector(".display").innerHTML=display;
    }

    else if(e.key=="+"||e.key=="-"||e.key=="*"||e.key=="/"){
        document.querySelector(".display").innerHTML=e.key;
                operationCheck();
                sign=e.key;
    }

    else if(e.key=="="){
        if (firstNumber && display !=""){
            operate(parseFloat(firstNumber),sign,parseFloat(display));
        }
    }

    else if (e.key=="Backspace"){

        display=display.slice(0, (display.length)-1);
        document.querySelector(".display").innerHTML=display;
    }

    else if (e.key=="."){
        if(display.includes(".")==false){
            display=display+".";
            document.querySelector(".display").innerHTML=display;
            }
    }
    
    else if(e.key=="Delete"){
        display="";
        firstNumber="";
        sign=null;
        document.querySelector(".display").innerHTML=null;
    }
    
})  