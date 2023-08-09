var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var wins = [123, 456, 789, 147, 258, 369, 159, 357];
var curr_player = "O";
var won = false;
var tie = false; // Change tie to false initially

function game(b) {
  if (board[b - 1] == 0 && !won) {
    board[b - 1] = curr_player === "O" ? 1 : 2;
    document.getElementById("b" + b).textContent = curr_player;

    if (curr_player === "O") {
      curr_player = "X";
    } else {
      curr_player = "O";
    }
    document.getElementById("result").textContent = curr_player + " playing..";
    check_win();
    if (board.includes(0) == false && !won) {
      document.getElementById("result").textContent = "Tie !";
      tie = true;
    }
  }
}

function check_win() {
  for (let i = 0; i < wins.length; i++) {
    let win = [...wins[i].toString()].map(Number);

    if (
      board[win[0] - 1] === 1 &&
      board[win[1] - 1] === 1 &&
      board[win[2] - 1] === 1
    ) {
      won = true;
      document.getElementById("result").textContent = "O Wins !";
      console.log("Player O won!");

      break;
    } else if (
      board[win[0] - 1] === 2 &&
      board[win[1] - 1] === 2 &&
      board[win[2] - 1] === 2
    ) {
      won = true;
      document.getElementById("result").textContent = "X Wins !";
      console.log("Player X won!");
      break;
    }
  }
}

function new_game() {
  if (won == true || tie == true) {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    curr_player = "O";
    won = false;
    tie = false; // Reset the tie variable to false

    document.getElementById("result").textContent = "O playing..";
    for (let i = 1; i <= 9; i++) {
      document.getElementById("b" + i).textContent = "";
    }
  }
}
