

let calculation = localStorage.getItem('.inputNumberArea') || '';

displayCalculation();


function updateCalculation(value){
    calculation += value
    displayCalculation();
    localStorage.setItem('.inputNumberArea', calculation);
}
function displayCalculation() {
    document.querySelector('.inputNumberArea')
    .innerHTML = calculation;
}





