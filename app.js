let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    if (turnO) {
      //player O
      box.innerText = "O";
      turnO = false;
    } else {
      //player X
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const enableBtn=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}

const disableBtn=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}


showWinner=(winner)=>{
msg.innerText=`Congratulations, Winner Is ${winner}`;
msgContainer.classList.remove("hide");
disableBtn();
}
const checkWinner=()=>{
    for( let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("won",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

const resetGame=()=>{
  turnO=true;
  enableBtn();
  msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);