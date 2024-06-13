const userForm = document.getElementById('text-form');
const outputArea = document.getElementById('output-area');

userForm.addEventListener("submit" , 
    function ()  {
        const userWord = document.getElementById('text-input').value;

        outputArea.innerHTML = `La parola <strong>${userWord}</strong> `
        outputArea.innerHTML += palindromeCheck(userWord) ? '<strong>è palindroma</strong>!' : '<strong>non è palindroma</strong>!';
    }
);

// Text string checker for palindrome
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