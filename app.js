let block = document.querySelectorAll('.block');
let formula = document.querySelector('.formula');
let result = document.querySelector('.result');
let num = document.querySelectorAll('.num');
let fkey = document.querySelectorAll('.fkey');
let equel = document.querySelector('.eq');
let clearKey = document.querySelector('.b1');
let backKey = document.querySelector('.back');

let tempEnter = [];
let tempResult = [];
let tempFormula = [];


let eqPress = false;  // indicate that equal sign is pressed
let fkeyFound = false; // use for moving between addNum and selFunction
let addSelPass = true; //
let clearPass = false; // for clear all when press number after eql pressed
let elsePass = true; 
let opperatorPass = true;
let answerBack = false
let backKeyPressed = false // when back key pressing result fully erased and formula when erasing, continue update the fomula, because otherwise when click a opperator it will erase all
let pastAns = 0;

formula.textContent = '';
result.textContent = '0';

if(result.textContent == ' '){
    formula.textContent = ' ';
}

for(let i=0;i<num.length;i++){
    num[i].addEventListener('click',(e)=> {addNum(i)})
}

for(let i=0;i<fkey.length;i++){
    fkey[i].addEventListener('click',(e)=> {selectFunction(i)})
}

equel.addEventListener('click',(e)=> {getResult()});

backKey.addEventListener('click',(e)=> {
    if(answerBack){
        let backResult = result.textContent;
        backResult = backResult.substring(0,backResult.length-1); 
        result.textContent = backResult;
    }
    else{
        tempEnter.pop();
        result.textContent = tempEnter.join('');
    }

    // For testing

    /* if(result.textContent == ''){
        let backResult = formula.textContent;
        backResult = backResult.substring(0,backResult.length-1);
        formula.textContent = backResult;
        backKeyPressed = true;
    }
    if(result.textContent == '' && formula.textContent == ''){
        clearing();
    } */
});

clearKey.addEventListener('click',(e)=> {clearing()});

function addNum (val){
    tempResult = [];
    fkeyFound = false;

    if(clearPass)clearing();

    if(eqPress && addSelPass){
        if(eqPress && elsePass){
            tempEnter = [];
            elsePass = true;
        }
        if(!addSelPass)tempFormula = [];
        tempEnter.push(num[val].textContent);
        eqPress = false;
        result.textContent = tempEnter.join('');
        formula.textContent = tempFormula.join('');
    }
    else{
        if(tempEnter.length<15)tempEnter.push(num[val].textContent);
        result.textContent = tempEnter.join('');
        addSelPass = true;
        elsePass = false;
    }
    answerBack = false;
}

function selectFunction(val){
    if(eqPress && opperatorPass){
        tempFormula = [];
        tempFormula.push(result.textContent);
        addSelPass = false;
        opperatorPass = false;
    }

    //For testing 

    /* if(backKeyPressed){
        fkeyFound = false;
        backKeyPressed = false;
    }  */   
    if(!fkeyFound){
        tempResult = tempEnter;
        tempEnter = [];
        if(!eqPress){
            result.textContent = tempResult.join('');
            tempFormula.push(tempResult.join(''));
        }
        tempFormula.push(fkey[val].textContent);
        fkeyFound = true;
    }
    console.log(tempFormula);
    if(tempFormula[tempFormula.length-1] != fkey[val].textContent){
        tempFormula[tempFormula.length-1]=fkey[val].textContent;
    }
    addSelPass = false;
    
    formula.textContent = tempFormula.join('');
    clearPass = false;
    answerBack = false;
}


//
function getResult(){

    // remove when fkey icons if tempFormula has end
    console.log(tempFormula[tempFormula.length-1]);
    console.log( tempEnter.join(''));
    if(tempFormula[tempFormula.length-1] != tempEnter.join(''))tempFormula.push(tempEnter.join(''));
    pastAns = eval(tempFormula.join(''));
    if(pastAns.toString().length>12){
        let tempAns = pastAns.toString().substring(0,13);
        pastAns = tempAns;
    }  
    formula.textContent = tempFormula.join('');
    result.textContent = pastAns;
    eqPress = true;
    clearPass = true;
    opperatorPass = true;
    answerBack = true;
}

function clearing(){
    tempEnter = [];
     tempResult = [];
     tempFormula = [];

     eqPress = false;
     fkeyFound = false;
     addSelPass = true
     clearPass = false;
     elsePass = true;
     opperatorPass = true;
     answerBack = false
     pastAns = 0;

    formula.textContent = '';
    result.textContent = '0';
}
  
  





















function delay(ms){

    return new Promise( resolve => {
        setTimeout(()=> {resolve('')},ms);
    })

}


async function trys(){

    while(true){
        run();
        for(let i=0;i<7;i++){
            await delay(200);
        }
    }

}


//trys();


async function run(){
    for(let i=0;i<22;i++){
        if(0<=i && i<=18)block[i].style.filter = "brightness(70%)";
        if(0<=i-1 && i-1<=18)block[i-1].style.filter = "brightness(80%)";
        if(0<=i-2 && i-2<=18)block[i-2].style.filter = "brightness(90%)";
        if(0<=i-3 && i-3<=18)block[i-3].style.filter = "brightness(100%)";
        await delay(200);
    }
}


