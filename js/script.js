function randomNumber () {
    return Math.floor(Math.random() * 10)
}

function randomMonth (randomNumber) {
    if (randomNumber === 0){
        return "January";
    } else if (randomNumber === 1) {
        return "February";
    } else if (randomNumber === 2) {
        return "April";
    } else if (randomNumber === 3) {
        return "May";
    }
}




function getString() {
    return "Hello, this is the string from the external JavaScript function!";
   }

 function handleButtonClick() {

     const result = getString();

     const resultElement = document.getElementById('result');

     resultElement.textContent = result;
   }

 document.addEventListener('DOMContentLoaded', (event) => {
 document.getElementById('myButton').addEventListener('click', handleButtonClick);
   });