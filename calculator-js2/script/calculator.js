//adding event listeners to buttons to create stored number
let a = "";
let recentOperator = false; //this is a flag to note whether the user is pressing multiple operators in a row
let recentSum = false; //this is a flag to note whether the user just got a total (so we know whether we should start a new equation)

document.getElementById("zero").addEventListener('click', 
function(){
    recentOperator = false;
    if (recentSum == true){
        numArray = [];
    };
    if (a.length<=10){
        a=a+"0";
    }
    document.getElementById("screen").innerText = a;});
document.getElementById("one").addEventListener('click', 
function(){
    recentOperator = false;
    if (recentSum == true){
        numArray = [];
    };
    if (a.length<=10){
        a=a+"1";
    }
    document.getElementById("screen").innerText = a;});
document.getElementById("two"). addEventListener('click', 
function(){
    recentOperator = false;
    if (recentSum == true){
        numArray = [];
    };
    if (a.length<=10){
        a=a+"2";
    }
    document.getElementById("screen").innerText = a;});
document.getElementById("three").addEventListener('click', 
function(){
    recentOperator = false;
    if (recentSum == true){
        numArray = [];
    };
    if (a.length<=10){
        a=a+"3";
    }
    document.getElementById("screen").innerText = a;});
document.getElementById("four").addEventListener('click', 
function(){
    recentOperator = false;
    if (recentSum == true){
        numArray = [];
    };
    if (a.length<=10){
        a=a+"4";
    }
    document.getElementById("screen").innerText = a;});
document.getElementById("five").addEventListener('click', 
function(){
    recentOperator = false;
    if (a.length<=10){
        a=a+"5";
    }
    document.getElementById("screen").innerText = a;});
document.getElementById("six").addEventListener('click', 
function(){
    recentOperator = false;
    if (recentSum == true){
        numArray = [];
    };
    if (a.length<=10){
        a=a+"6";
    }
    document.getElementById("screen").innerText = a;});
document.getElementById("seven").addEventListener('click', 
function(){
    recentOperator = false;
    if (recentSum == true){
        numArray = [];
    };
    if (a.length<=10){
        a=a+"7";
    }
    document.getElementById("screen").innerText = a;});
document.getElementById("eight").addEventListener('click', 
function(){
    recentOperator = false;
    if (recentSum == true){
        numArray = [];
    };
    if (a.length<=10){
        a=a+"8";
    }
    document.getElementById("screen").innerText = a;});
document.getElementById("nine").addEventListener('click', 
function(){
    recentOperator = false;
    if (recentSum == true){
        numArray = [];
    };
    if (a.length<=10){
        a=a+"9";
    }
    document.getElementById("screen").innerText = a;});
document.getElementById("dot").addEventListener('click', 
function(){
    recentOperator = false;
    if (recentSum == true){
        numArray = [];
    };
    if (!a.includes(".") && a.length<=10){
        a=a+"."};
    document.getElementById("screen").innerText = a;});

//adding operator buttons -- each operator executes the equals function if the user didn't just press a different operator and also stores a second number if necessary
let numArray=[];
let operator;
document.getElementById("plus").addEventListener('click', function(){
    if (numArray[0] && recentOperator == false){
        equals();
        operator = "plus";
    };
    if (!numArray[0] && recentOperator == false){
        numArray.push(Number(a));
    };
    operator = "plus";
    a = "";
    recentOperator = true;
    recentSum = false;
});

document.getElementById("minus").addEventListener('click', function(){
    if (numArray[0] && recentOperator == false){
        equals();
        operator = "minus";
    };
    if (!numArray[0] && recentOperator == false){
        numArray.push(Number(a));
    };
    operator = "minus";
    a = "";
    recentOperator = true;
    recentSum = false;
});

document.getElementById("times").addEventListener('click', function(){
    if (numArray[0] && recentOperator == false){
        equals();
        operator = "times";
    };
    if (!numArray[0] && recentOperator == false){
        numArray.push(Number(a));
    };
    a = "";
    operator = "times";
    recentOperator = true;
    recentSum = false;
});

document.getElementById("divide").addEventListener('click', function(){
    if (numArray[0] && recentOperator == false){
        equals();
        operator = "divide";
    };
    if (!numArray[0] && recentOperator == false){
        numArray.push(Number(a));
    };
    a = "";
    operator = "divide";
    recentOperator = true;
    recentSum = false;
});

//adding equals button functionality -- equals executes almost the same thing 4 times (different for each operator)
let totalSum = 0;
let numDigits = 0;
let notated = "";
let afterDot = "";
document.getElementById("equals").addEventListener('click', equals); 

function equals(){
    if (!recentSum){
    numArray.push(Number(a));
    a = "";
    if (operator == "plus"){
        totalSum = numArray[0]+numArray[1];
    }
    else if (operator == "minus"){
        totalSum = numArray[0]-numArray[1];
    }
    else if (operator == "times"){
        totalSum = numArray[0]*numArray[1];
    }
    else if (operator == "divide"){
        if (numArray[1]!=0){
            totalSum = numArray[0]/numArray[1];
        }
        else if (numArray[1]==0){
            document.getElementById("screen").innerText = "Error"
            numArray.pop();
            recentSum = true;
            return;
        }
    }
        if (totalSum.toString().length <= 10){ //normal function if number doesn't have overflow problems
            document.getElementById("screen").innerText = totalSum;
        }
        
        else if (totalSum.toString().length >10){ //if overflow problems
            if (totalSum.toString().substr(0, 11).includes(".")){
                notated = totalSum.toFixed(10 - totalSum.toFixed().toString().length).toString();
                for (let i = 10; i>2; i--){
                    if (notated.charAt(i+1) == 0){
                        notated = notated.substr(0, i);
                    }
                    else {
                        break;
                    }
                }
            }
            else{
            if (totalSum>=0){ //if positive number
                numDigits = totalSum.toFixed().toString().length;
                numDigitsLess = numDigits - 1;

                if (totalSum.toFixed().toString().charAt(5) != "0"){
                    afterDot = totalSum.toFixed().toString().substr(1,5);
                    notated = totalSum.toFixed().toString().charAt(0) + "." + afterDot +"e"+numDigitsLess.toString();
                }
                else if (totalSum.toFixed().toString().charAt(5) == "0"){
                    afterDot = totalSum.toFixed().toString().substr(1,4);
                    notated = totalSum.toFixed().toString().charAt(0) + "." + afterDot +"e"+numDigitsLess.toString();
                    if (totalSum.toFixed().toString().charAt(4) == "0"){
                        afterDot = totalSum.toFixed().toString().substr(1,3);
                        notated = totalSum.toFixed().toString().charAt(0) + "." + afterDot +"e"+numDigitsLess.toString();
                        if (totalSum.toFixed().toString().charAt(3) == "0"){
                            afterDot = totalSum.toFixed().toString().substr(1,2);
                            notated = totalSum.toFixed().toString().charAt(0) + "." + afterDot +"e"+numDigitsLess.toString();
                            if (totalSum.toFixed().toString().charAt(2) == "0"){
                                afterDot = totalSum.toFixed().toString().substr(1,1)
                                notated = totalSum.toFixed().toString().charAt(0) + "." + afterDot +"e"+numDigitsLess.toString();
                                if (totalSum.toFixed().toString().charAt(1) == "0"){
                                    notated = totalSum.toFixed().toString().charAt(0) + "e"+numDigitsLess.toString();
                                }
                            }
                        }
                    }
                }
            }
            else if (totalSum<0){ //if negative number
                numDigits = totalSum.toFixed().toString().length;
                numDigitsLess = numDigits - 2;
                if (totalSum.toFixed().toString().charAt(6) != "0"){
                    afterDot = totalSum.toFixed().toString().substr(2,6);
                    notated = totalSum.toFixed().toString().substr(0, 2) + "." + afterDot +"e"+numDigitsLess.toString();
                }
                else if (totalSum<0){
                    numDigits = totalSum.toFixed().toString().length;
                    numDigitsLess = numDigits - 2;
                    if (totalSum.toFixed().toString().charAt(6) != "0"){
                        afterDot = totalSum.toFixed().toString().substr(2,6);
                        notated = totalSum.toFixed().toString().substr(0, 2) + "." + afterDot +"e"+numDigitsLess.toString();
                    }
                    else if (totalSum.toFixed().toString().charAt(6) == "0"){
                        afterDot = totalSum.toFixed().toString().substr(2,5);
                        notated = totalSum.toFixed().toString().substr(0,2) + "." + afterDot +"e"+ numDigitsLess.toString();
                        if (totalSum.toFixed().toString().charAt(5) == "0"){
                            afterDot = totalSum.toFixed().toString().substr(2,4);
                            notated = totalSum.toFixed().toString().substr(0,2) + "." + afterDot +"e"+numDigitsLess.toString();
                            if (totalSum.toFixed().toString().charAt(4) == "0"){
                                afterDot = totalSum.toFixed().toString().substr(2,3);
                                notated = totalSum.toFixed().toString().substr(0,2) + "." + afterDot +"e"+numDigitsLess.toString();
                                if (totalSum.toFixed().toString().charAt(3) == "0"){
                                    afterDot = totalSum.toFixed().toString().substr(2,2)
                                    notated = totalSum.toFixed().toString().substr(0,2) + "." + afterDot +"e"+numDigitsLess.toString();
                                    if (totalSum.toFixed().toString().charAt(2) == "0"){
                                        notated = totalSum.toFixed().toString().substr(0,2) + "e"+numDigitsLess.toString();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
            document.getElementById("screen").innerText = notated;
        };

        numArray[0] = totalSum;
        numArray.pop();
        recentSum = true;
    };
};

//adding memory buttons functionality
let memTotal = 0;
document.getElementById("memory-plus").addEventListener('click', 
function(){
    memTotal = Number(a);
    a = "";
});
document.getElementById("memory-recall").addEventListener('click',
function(){
    a = memTotal.toString();
    document.getElementById("screen").innerText = a;
});
document.getElementById("memory-clear").addEventListener('click',
function(){
    memTotal = 0;
});
document.getElementById("all-clear").addEventListener('click',
function(){
    memTotal = 0;
    numArray = [];
    a = "";
    document.getElementById("screen").innerText = a;
});
