//Using prompt - for browser-based JavaScript, and Logging the output in the browser console

function reverseWords(sentence) {
    
    const words = sentence.split(' ');

   
    const reversedWords = words.map(word => reverseWord(word));

    // Join the reversed words to form the reversed sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}

// Example usage:
const inputSentence = prompt("Enter a sentence:");
const reversedResult = reverseWords(inputSentence);
console.log(reversedResult);
