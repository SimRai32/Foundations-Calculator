let firstNumber = null;
let sign = null;
let display ="";
let equals=false;

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

function operate(numberOne,operation,numberTwo){
    let total = 0;

    if(operation =="+"){total=add(numberOne,numberTwo);}

    else if(operation =="-"){total=subtract(numberOne,numberTwo);}
    
    else if(operation =="*"){total=multiply(numberOne,numberTwo);}
    
    else if(operation =="/"){total=divide(numberOne,numberTwo);}
    
    return total;

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
            
            if (sign==null){
                sign=operation.value;
                firstNumber=display;
                display="";
                document.querySelector(".display").innerHTML=firstNumber+sign;
                
            }
            else if(equals==true){
                equals=false;
                sign=operation.value;
                

            }

            else if(display!=null){
               let total = operate(parseInt(firstNumber),sign,parseInt(display));
                document.querySelector(".display").innerHTML=+total.toFixed(3);
                sign=operation.value;
                firstNumber=total;
                display="";
                
            }
            
        })
    })


let equation=document.querySelector(".equal");
equation.addEventListener("click",() =>{
    if (sign!=null && display !=null){
        let total = operate(parseInt(firstNumber),sign,parseInt(display));
        document.querySelector(".display").innerHTML=+total.toFixed(3);
        firstNumber=total;
        display="";
        equals=true;
    }
})


let restart=document.querySelector(".clear");
restart.addEventListener("click", ()=>{
    display="";
    firstNumber=null;
    sign=null;
    document.querySelector(".display").innerHTML=null;
})

let backSpace=document.querySelector(".backspace");
backSpace.addEventListener("click", () =>{
    display=display.slice(0, (display.length)-1);
    console.log(display);
    document.querySelector(".display").innerHTML=display;
})

let decimal=document.querySelector(".decimal");
decimal.addEventListener("decimal",  ()=>{})

