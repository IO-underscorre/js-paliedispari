const userForm = document.getElementById('text-form');
const outputArea = document.getElementById('output-area');

userForm.addEventListener("submit" , 
    function ()  {
        const userText = document.getElementById('text-input').value;
        const userTextNoSpaces = userText.replace(/\s/g, '');

        console.log(userTextNoSpaces);

        outputArea.innerHTML = `Il testo <strong>${userText}</strong> è una `
        outputArea.innerHTML += userText === userTextNoSpaces ? 'parola' : 'frase';
        outputArea.innerHTML += palindromeCheck(userTextNoSpaces) ? ' <strong>palindroma</strong>!' : ' <strong>non palindroma</strong>!';
    }
);

// String checker for palindrome
function palindromeCheck(word) {
    isPalindrome = true;
    word = word.toUpperCase()

    for(let i = 0 ; i < word.length / 2 && isPalindrome ; i++) {
        if (word[i] !== word[word.length - (i + 1)]) {
            isPalindrome = false;
        }
    }

    return isPalindrome;
}