let inputArea = document.querySelector("input");
let wordsBox = document.querySelector(".words");
let counter = document.querySelector(".counter");
let wordsNum = 1; // counter of input words
let inputLettersNum = 0; // counter of input words
const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];

inputArea.addEventListener("focus", createWordsBox, { once: true });
inputArea.addEventListener("keyup", removeWordIfMatch);
inputArea.addEventListener("keydown", CountDownShowScore, { once: true });

// creat 30 words wraped in span and display it in box
function createWordsBox() {
  wordsBox.style.visibility = "visible";
  words.sort(() => Math.random() - 0.5);
  for (let word of words) {
    let wordsSpan = document.createElement("span");
    wordsSpan.innerHTML = word;
    wordsBox.appendChild(wordsSpan);
  }
}

// remove the last valid user input from the words box
function removeWordIfMatch() {
  let inputWordsArr = inputArea.value.split(" ");
  if (inputWordsArr.length > wordsNum) {
    let lastWord = inputWordsArr[inputWordsArr.length - 2];
    let firstwordbox = wordsBox.firstElementChild;
    if (lastWord.toLowerCase() == firstwordbox.innerHTML.toLowerCase()) {
      wordsNum = inputWordsArr.length - 1;
      console.log(wordsNum);
      console.log(inputWordsArr);
      inputLettersNum = inputArea.value.length;
      firstwordbox.remove();
    }
  }
}

// set game countdown and calculate the speed
function CountDownShowScore() {
  const countdwon = setInterval(() => {
    if (counter.innerHTML == 0) {
      let disabled = document.createAttribute("disabled");
      inputArea.setAttributeNode(disabled);
      counter.style.fontSize = "20px";
      counter.innerHTML = `Your Speed per minute : ${wordsNum * 2} word
        -  ${inputLettersNum * 2} letter 
        `;
      clearInterval(countdwon);
    } else {
      counter.innerHTML--;
    }
  }, 1000);
}
