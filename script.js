let inputEl = document.querySelector("#input-el")
let convertBtn = document.querySelector("#convert-btn")
let lengthEl = document.querySelector("#length-el")
let volEl = document.querySelector("#vol-el")
let massEl = document.querySelector("#mass-el")
let numValue;


convertBtn.addEventListener("click" , function(){
numValue = inputEl.value
if(numValue){
lengthEl.textContent=
`
${numValue} meters = ${(numValue * 3.28).toFixed(2)} feets 
| ${numValue} feets = ${(numValue /3.28).toFixed(2) } meters
`
volEl.textContent=
`
${numValue} litres = ${(numValue * 0.26).toFixed(2)} gallon 
| ${numValue} gallon = ${(numValue /0.26).toFixed(2) } litres
`
massEl.textContent=
`
${numValue} kilogram = ${(numValue * 2.204).toFixed(2)} pound 
| ${numValue} pound = ${(numValue /2.204).toFixed(2) } kilogram
`
}})