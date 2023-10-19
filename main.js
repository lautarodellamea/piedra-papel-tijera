import "./src/scss/style.scss";

const d = document;

const options = d.querySelector(".options");
const playing = d.querySelector(".playing");

const imgComputer = d.querySelector(".playing__img--pc");
const imgDivComputer = d.querySelector(".playing__div--pc");
const imgHuman = d.querySelector(".playing__img--human");

const playingItems = d.querySelector(".playing__item--condition");
const textCondition = d.querySelector(".playing__condition");

const modalRules = d.querySelector(".modal-rules");

const humanChoice = d.querySelector(".playing__div--human");
const computerChoice = d.querySelector(".playing__div--pc");

const score = d.querySelector(".header__count");
let contador = 0;
const winsCount = () => {
  contador++;
};
const resetCount = () => {
  contador -= 1;
};

const play = (humanOption) => {
  let computerOption = Math.floor(Math.random() * 3);

  if (computerOption === 0) {
    computerOption = "paper";
    computerChoice.style.borderColor = "#4f6af2";
    computerChoice.style.filter = "drop-shadow(4px 8px 0px #1a2977)";
  } else if (computerOption === 1) {
    computerOption = "scissors";
    computerChoice.style.borderColor = "#ec9e0e";
    computerChoice.style.filter = "drop-shadow(4px 8px 0px #6b490a)";
  } else {
    computerOption = "rock";
    computerChoice.style.borderColor = "#dc2e4e";
    computerChoice.style.filter = "drop-shadow(4px 8px 0px #8f172d)";
  }

  imgComputer.src = `./assets/images/icon-${computerOption}.svg`;
  imgDivComputer.classList.remove("playing__div--pc--inactive");

  if (computerOption === humanOption) {
    textCondition.innerText = "DRAW";
  } else if (computerOption === "rock" && humanOption == "scissors") {
    textCondition.innerText = "YOU LOSE";
    resetCount();
    score.innerText = contador;
  } else if (computerOption === "scissors" && humanOption == "paper") {
    textCondition.innerText = "YOU LOSE";
    resetCount();
    score.innerText = contador;
  } else if (computerOption === "paper" && humanOption == "rock") {
    textCondition.innerText = "YOU LOSE";
    resetCount();
    score.innerText = contador;
  } else {
    textCondition.innerText = "YOU WIN";
    winsCount();
    score.innerText = contador;
  }
};

const colorChange = (option) => {
  if (option === "paper") {
    humanChoice.style.borderColor = "#4f6af2";
    humanChoice.style.filter = "drop-shadow(4px 8px 0px #1a2977)";
  }

  if (option === "rock") {
    humanChoice.style.borderColor = "#dc2e4e";
    humanChoice.style.filter = "drop-shadow(4px 8px 0px #8f172d)";
  }

  if (option === "scissors") {
    humanChoice.style.borderColor = "#ec9e0e";
    humanChoice.style.filter = "drop-shadow(4px 8px 0px #6b490a)";
  }
};


d.addEventListener("click", (e) => {
  if (e.target.matches(".btn-rules")) {
    modalRules.classList.toggle("none");
  }

  if (e.target.matches(".rules__close")) {
    modalRules.classList.toggle("none");
  }

  if (e.target.matches(".modal-rules")) {
    modalRules.classList.toggle("none");
  }

  if (e.target.matches(".playing__btn")) {
    options.classList.toggle("none");
    playing.classList.toggle("none");

    imgHuman.src = "";
    imgComputer.src = "";
    imgDivComputer.classList.add("playing__div--pc--inactive");
    textCondition.innerText = "***";
    humanChoice.style.borderColor = "#fff";
    humanChoice.style.filter = "drop-shadow(4px 8px 0px #fff)";
    computerChoice.style.borderColor = "#fff";
    computerChoice.style.filter = "drop-shadow(4px 8px 0px transparent)";
  }

  if (e.target.closest(".options__div--rock")) {
    colorChange("rock");
    setTimeout(() => {
      play("rock");
    }, 500);
    options.classList.toggle("none");
    playing.classList.toggle("none");
    playingItems.classList.remove("none");
    imgHuman.src = `./assets/images/icon-rock.svg`;
  }

  if (e.target.closest(".options__div--paper")) {
    colorChange("paper");
    setTimeout(() => {
      play("paper");
    }, 500);
    options.classList.toggle("none");
    playing.classList.toggle("none");
    playingItems.classList.remove("none");
    imgHuman.src = `./assets/images/icon-paper.svg`;
  }

  if (e.target.closest(".options__div--scissors")) {
    colorChange("scissors");
    setTimeout(() => {
      play("scissors");
    }, 500);
    options.classList.toggle("none");
    playing.classList.toggle("none");
    playingItems.classList.remove("none");
    imgHuman.src = `./assets/images/icon-scissors.svg`;
  }
});

