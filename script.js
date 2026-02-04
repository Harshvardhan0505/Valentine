let noCount = 0;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const catImage = document.getElementById("catImage");

const noMessages = [
  "R U SURE?? 🐥",
  "That hurts a little… 😢",
  "Please say yes 😩",
  "OHH come on 😠",
  "U are Breaking my heart 💔",
  "Nooooooo 😭",
  "AHAHAHAHA 🥺"
];

// Initial Yes size
let yesFont = 22;
let yesPadY = 14;
let yesPadX = 26;

noBtn.addEventListener("click", () => {
  noCount++;

  // Grow YES (REAL growth, pushes layout)
  yesFont += 6;
  yesPadY += 6;
  yesPadX += 10;

  yesBtn.style.fontSize = `${yesFont}px`;
  yesBtn.style.padding = `${yesPadY}px ${yesPadX}px`;

  // Update text
  const msgIndex = Math.min(noCount - 1, noMessages.length - 1);
  question.innerText = noMessages[msgIndex];
});

yesBtn.addEventListener("click", () => {
  catImage.src = "yes.png";
  question.innerHTML = "YAYYYY 💞<br>LOVE YOUUU 🥰";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});
