let boxes = document.querySelectorAll(".box");
let BtnBox = document.querySelector(".btn-box");
let Container = document.querySelector(".container");
let Btn = document.querySelectorAll(".btn");
let win = document.querySelector(".winMsg");
let reset = document.querySelector(".resetBtn");
let newGame = document.querySelector(".newBtn");
let msg = document.querySelector(".heading-1");

let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO == true) {
      box.innerText = "O";
      console.log("box was clicked by O");
      turnO = false;
      box.disabled = true;
    } else {
      box.innerText = "X";
      console.log("box was clicked by X");
      turnO = true;
      box.disabled = true;
    }
    checkWinner();
  });
});

const checkWinner = () => {
  for (let patterns of winPatterns) {
    let pos0 = boxes[patterns[0]].innerText.trim();
    let pos1 = boxes[patterns[1]].innerText.trim();
    let pos2 = boxes[patterns[2]].innerText.trim();
    if (pos0 != "" && pos1 != "" && pos2 != "") {
      if (pos0 === pos1 && pos1 === pos2) {
        console.log("winner is ", pos1);
        showWinner(pos0);
      }
    }
  }
};

const stop =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const start =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner = (winner) => {
  msg.innerText = `CONGRATULATIONS!!!! \n\n \n Winner is ${winner}`;
  win.classList.remove("hide");
  stop();
};

const resetGame=()=>{
    turnO=true;
    start();
    win.classList.add("hide");
}

reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);