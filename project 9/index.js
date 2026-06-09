const btn = document.getElementById("getPass");
const newPass = document.getElementById("newPass");
const range = document.getElementById("range");
const rangeVal = document.getElementById("rangeVal");
const capitalLetter = document.getElementById("capitalLetter");
const smallLetter = document.getElementById("smallLetter");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const copyBtn = document.getElementById("copyBtn");

rangeVal.innerText = range.value;

range.addEventListener('input', (e)=>{
rangeVal.innerText = e.target.value;
});

btn.addEventListener('click', ()=>{
    let capitalChars = "ABCDEFGHOJKLMNOPQRSTUVWXYZ";
    let smallChars = "abcdefghijklmnopqrstuvwxyz";
    let numberChars = "0123456789";
    let symbolChars = "~!@#$%^&*()_+{}";
    let final = '';
    
    if(capitalLetter.checked){
        final+=capitalChars;
    }

    if(smallLetter.checked){
        final+=smallChars;
    }

    if(number.checked){
        final+=numberChars;
    }

    if(symbol.checked){
        final+=symbolChars;
    }

    if(final === ""){
        alert("Please select atleast one option");
        return;
    }

    let generatedPass = "";

    for(let i =0; i<range.value; i++){ //just baar baar different randNum print karane ke liye
        let randomNum = Math.floor(Math.random() * final.length); //randomNum is generated(0 to 25) 
        generatedPass += final[randomNum];
    }
   newPass.innerText = `${generatedPass}`;
});

copyBtn.addEventListener('click', ()=>{
    if(!newPass.innerText){
        alert("No Password to copy");
        return;
    }
    window.navigator.clipboard.writeText(newPass.innerText);
    alert("Password Copied");
});