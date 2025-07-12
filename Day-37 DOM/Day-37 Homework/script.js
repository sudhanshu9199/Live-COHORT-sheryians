let main = document.querySelector("main");
let emojiElem = document.querySelectorAll(".emoji");
let messageText = document.querySelector(".text");

// Mood data
const moodInfo = {
  "😊": {
    bg: "#ffeaa7",
    soundId: "happySound",
    message: "Feeling Happy! Keep smiling 😊",
    animation: "glow",
  },
  "😢": {
    bg: "#dff9fb",
    soundId: "sadSound",
    message: "It's okay to feel sad sometimes 😢",
    animation: "pulse",
  },
  "😡": {
    bg: "#d75d47ff",
    soundId: "angrySound",
    message: "Take a deep breath, champ!",
    animation: "shake",
  },
  "😱": {
    bg: "#f6e58d",
    soundId: "scaredSound",
    message: "It's just fear... it’ll pass. 😱",
    animation: "zoom",
  },
  "🤩": {
    bg: "#e056fd",
    soundId: "excitedSound",
    message: "Wow! You're excited! 🤩",
    animation: "bounce",
  },
  "😌": {
    bg: "#81ecec",
    soundId: "calmSound",
    message: "So calm... breathe in, breathe out 😌. Peace looks good on you.",
    animation: "fade",
  },
  "😎": {
    bg: "#55efc4",
    soundId: "coolSound",
    message: "Too cool to handle 😎",
    animation: "pop",
  },
  "🥳": {
    bg: "#fdcb6e",
    soundId: "celebrationSound",
    message: "Let’s celebrate your vibe! 🥳",
    animation: "bounce",
  },
  "💖": {
    bg: "#ff7675",
    soundId: "loveSound",
    message: "Spread love everywhere 💖, Love is in the air! or You're surrounded by warmth and care.",
    animation: "heartbeat",
  },
  "": {
    bg: "#75ff9aff",
    soundId: "love",
    message: " ",
    animation: "glow",
  },
};


function stopAllSounds() {
    document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

// Add event listeners
emojiElem.forEach(el => {
    el.addEventListener('click', () => {
        let mood = moodInfo[el.textContent];

        if (mood) {
            document.body.style.backgroundColor = mood.bg;

            // Update message
            messageText.textContent = mood.message;

            // Play sound
            stopAllSounds();
            let sound = document.getElementById(mood.soundId);
            if (sound) sound.play();

            // Animation
            messageText.className = `text animate-${mood.animation}`;
        }
    })
})