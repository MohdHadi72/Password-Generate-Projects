
const inputRangeVal = document.getElementById("inputRange");
const SlideValue = document.getElementById("SlideValue");
const PassBox = document.getElementById("passBox");

const lowerCaseVal = document.getElementById("lowercase");
const UpperCaseVal = document.getElementById("Uppercase");
const NumbersVal = document.getElementById("Numbers");
const SymblesVal = document.getElementById("Symbles");

const genBtnVal = document.getElementById("genBtn");
const copyIconVal = document.getElementById("copyIcon");
const passIndicatorVal = document.getElementById("passIndicator");

const iconColor = document.getElementById("IconsColor");
const containerVal = document.getElementById("container");

const textcolor = document.getElementById("textLoweCase");

const TextPass = document.getElementById("textPass")


const loweCaseLetter = "abcdefghtjklmnopqrstuvwxyz";
const UpperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!/?[]{}+-_<>'@#$%^&*()~`.,|";








SlideValue.textContent = inputRangeVal.value;
inputRangeVal.addEventListener("input", ()=>{
    SlideValue.textContent = inputRangeVal.value;
    SlideValue.style.fontWeight = "bold";
    SlideValue.style.fontFamily = "Bangers";
    SlideValue.style.letterSpacing = "1.4px";

    passwordGenerater();
})


const colors = ["red","orange","purple","green"];

iconColor.addEventListener("click", ()=>{
 let randomColor = colors[Math.floor(Math.random() * colors.length)];
 containerVal.style.backgroundColor = randomColor;
 TextPass.style.color = "white";
 SlideValue.style.color = "white";
});



function passwordGenerater(){
    const length = inputRangeVal.value;
    let characters = "";
    let password = "";
   

    characters += lowerCaseVal.checked ? loweCaseLetter : "";
    characters += UpperCaseVal.checked ? UpperCaseLetter : "";
    characters += NumbersVal.checked ? numbers : "";
    characters += SymblesVal.checked ? symbols : "";

    for(let i=0; i< length ;i++){
        password += characters.charAt(Math.floor(Math.random() *  characters.length));

    }

    PassBox.value = password;
    PassBox.style.fontWeight = "bold";
    PassBox.style.paddingLeft = "2%";
}
