function isPalindrome(word) {
    // Stop condition: an empty word or a word containing a single character is a palindrome
    if (word.length <= 1) {
        return true;
    }

    // Compare the characters at the ends of the word
    if (word[0] !== word[word.length - 1]) {
        return false;
    }

    // Recursively test the rest of the word
    return isPalindrome(word.substring(1, word.length - 1));
}

// Example usage:
const testWord = "level";
console.log(isPalindrome(testWord)); // Output: true
