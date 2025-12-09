/**
 * Navigates to the specified URL.
 * @param {string} url - The URL to navigate to.
 */
function navigateTo(url) {
    window.location.href = url;
}


/* --- NEW: Typewriter Effect --- */

// 1. Text to be typed
const fullText = "Hello, I'm <span class='highlight'>Yathin"; 
// 2. The HTML element where the text will appear
const textElement = document.getElementById('hero-text');
// 3. Speed of typing in milliseconds
const typingSpeed = 100; 
// 4. Index to keep track of the current character
let charIndex = 0;

// 5. The function that types the text
function typeWriter() {
    // If we haven't typed the whole text yet...
    if (charIndex < fullText.length) {
        // Add the next character or HTML tag to the element
        if (fullText.substring(charIndex).startsWith("<span")) {
            // If it's the start of the span tag, find the end and add the whole tag at once
            const closingTagIndex = fullText.indexOf('>', charIndex);
            textElement.innerHTML += fullText.substring(charIndex, closingTagIndex + 1);
            charIndex = closingTagIndex + 1;
        } else {
            // Otherwise, just add the next single character
            textElement.innerHTML += fullText.charAt(charIndex);
            charIndex++;
        }
        // Wait for 'typingSpeed' milliseconds, then run this function again
        setTimeout(typeWriter, typingSpeed);
    }
}

// 6. Start the typewriter effect when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    if (textElement) {
        typeWriter();
    }
});
