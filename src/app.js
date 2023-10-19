import { renderMain } from "./ppt/renders/main/render-main";
import { renderPlaying } from "./ppt/renders/playing/render-playing";
import { play } from "./ppt/renders/use-cases/play";

export const App = (elementId) => {
  renderMain(elementId);

  const btnPiedra = document.querySelector(".options__div--rock");
  const btnPapel = document.querySelector(".options__div--paper");
  const btnTijera = document.querySelector(".options__div--scissors");

  btnPiedra.addEventListener("click", () => {
    setTimeout(() => {
      renderPlaying(elementId, "rock");
      /* play("piedra"); */
    }, 100);
  });

  btnPapel.addEventListener("click", (e) => {
    setTimeout(() => {
      renderPlaying(elementId, "paper");
      play("papel");
    }, 100);
  });

  btnTijera.addEventListener("click", (e) => {
    setTimeout(() => {
      renderPlaying(elementId, "scissors");
      play("tijera");
    }, 100);
  });

  /* 

  

  btnPapel.addEventListener("click", (e) => {
    resultado.innerText = "Loading...";
    setTimeout(() => {
      jugar("papel");
    }, 1000);
  });

  btnTijera.addEventListener("click", (e) => {
    resultado.innerText = "Loading...";
    setTimeout(() => {
      jugar("tijera");
    }, 1000);
  }); */
};
