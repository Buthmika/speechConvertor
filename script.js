let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("#select");

// Populate voices when available
window.speechSynthesis.onvoiceschanged = () => {
      voices = window.speechSynthesis.getVoices();
      speech.voice = voices[0]; // Default to the first available voice

      voiceSelect.innerHTML = ""; // Clear existing options
      voices.forEach((voice, i) => {
            let option = new Option(voice.name, i); // Create option element
            voiceSelect.add(option);
      });
};

// Set the voice based on user selection
voiceSelect.addEventListener("change", () => {
      speech.voice = voices[voiceSelect.value];
});

// Speak text when button is clicked
document.querySelector("#button").addEventListener("click", () => {
      speech.text = document.querySelector("#text").value;
      window.speechSynthesis.speak(speech);
});
