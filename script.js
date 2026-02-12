// Grab Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const heartTrigger = document.getElementById("heart-trigger");
const loveContainer = document.getElementById("love-container");
const paperText = document.getElementById("typewriter-text");
const closeLetterBtn = document.getElementById("close-letter");

const message = "To my Valentine Jace ,\n\nI'm so glad you said yes!\nThese past couple of months have meant the world to me\nYou have shown me love, acceptence, and patience\nI love how nerdy you are, how much you love you family. \n Your love of games and anime make me smile \nYou lights up my world!\n I love you for who you are.\nHappy Valentines day my forever \nLove, Chinenye";

// Open Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

//  Runaway No Button
noBtn.addEventListener("mouseover", () => {
    const moveRange = 200;
    const distance = Math.random() * moveRange + 100;
    const angle = Math.random() * Math.PI * 2;
    const movex = Math.cos(angle) * distance;
    const movey = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${movex}px, ${movey}px)`;
});

//Click Yes Button
yesBtn.addEventListener("click", () => {
    title.textContent = "YIPEEEEEEEE!!!";
    catImg.src = "cat_dance.gif";
    buttons.style.display = "none";
    finalText.style.display = "block";
    document.querySelector(".letter-window").classList.add("final");
});

// Click Heart Trigger to Open Scroll
heartTrigger.addEventListener("click", () => {
    letter.style.display = "none"; // Hide cat window
    loveContainer.style.display = "flex"; // Show scroll
    paperText.innerHTML = ""; // Reset text
    typeWriter(message, 0); // Start animation
});

// Click Heart to Close Scroll
closeLetterBtn.addEventListener("click", () => {
    loveContainer.style.display = "none"; // Hide scroll
    letter.style.display = "flex"; // Show cat window again
});

// Typewriter Logic
function typeWriter(text, i) {
    if (i < text.length) {
        if (text.charAt(i) === "\n") {
            paperText.innerHTML += "<br>";
        } else {
            paperText.innerHTML += text.charAt(i);
        }
        setTimeout(() => typeWriter(text, i + 1), 60);
    }
}