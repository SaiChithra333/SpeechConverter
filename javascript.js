const convertToSpeech = () => {
    const inputText = document.getElementById('inputText').value;
    
    if ('speechSynthesis' in window) {
        const synthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(inputText);

        synthesis.speak(utterance);
    } else {
        alert("Your browser doesn't support the Speech Synthesis API. Please use a different browser.");
    }
};
