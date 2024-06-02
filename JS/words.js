const words = [
  "تقييم المخاطر",
  "افضل العروض",
  "تحليل ودراسة",
  "تقديم الاستشارات",
  "حماية حقوق",
];
let index = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const textElement = document.getElementById("text");

function type() {
  if (isDeleting) {
    if (charIndex > 0) {
      currentWord = currentWord.substring(0, charIndex - 1);
      charIndex--;
      textElement.textContent = currentWord;
      setTimeout(type, 50); // Faster deletion speed
    } else {
      isDeleting = false;
      index = (index + 1) % words.length;
      setTimeout(type, 500);
    }
  } else {
    if (charIndex < words[index].length) {
      currentWord += words[index][charIndex];
      charIndex++;
      textElement.textContent = currentWord;
      setTimeout(type, 100); // Faster typing speed
    } else {
      isDeleting = true;
      setTimeout(type, 2000);
    }
  }
}
document.addEventListener("DOMContentLoaded", (event) => {
  type();
});
