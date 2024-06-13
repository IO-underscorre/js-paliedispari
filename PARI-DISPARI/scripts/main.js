const userForm = document.getElementById('game-form');
const textArea = document.getElementById('text-area');

let playedCount = 0;

userForm.addEventListener("submit" , 
    function ()  {
        const randomNumber = randomNumberGenerator (1 , 5);
        const sumResult = mySum(parseInt(document.getElementById('user-number').value) , randomNumber);

        const isGuessEven = document.getElementById('user-guess').value === 'even' ? true : false ;
        const isResultEven = evenNumberCheck(sumResult);

        textArea.innerHTML = `Il numero che è stato generato è ${randomNumber}, la somma dei due numeri è ${sumResult} e quindi `
        textArea.innerHTML += isResultEven ? '<b>pari</b>.' : '<b>dispari</b>.';
        textArea.innerHTML += '<br>'
        textArea.innerHTML += isResultEven === isGuessEven ? 'Complimenti, <strong>hai vinto!</strong>' : 'Mi dispiace, <strong>hai perso!</strong>';
        textArea.innerHTML += '<br>'
        textArea.innerHTML += playedCount >= 10 ? 'Il gioco ti sta proprio piacendo allora, gioca pure quanto vuoi!' : ' Puoi comunque giocare ancora!';

        playedCount++;
    }
);

// Random number generator between max and min (included)
function randomNumberGenerator(min , max) {
    return Math.floor((Math.random()) * (max - min + 1)) + min;
}

// Sum of 2 numbers
function mySum(number1 , number2) {
    return number1 + number2;
}

// Number comparison: if num1 is higher returns true, if num2 is higher or equal returns false
function evenNumberCheck(number) {
    return number % 2 === 0 ? true : false ;
}