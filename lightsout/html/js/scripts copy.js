"use strict";

window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;


const LightsOut = function (size, elem) {
  this.size = size;
  this.elem = elem;
  this.board = [];
  
  for (let i = 0; i < this.size; i++) {
    this.board.push([]);
    
    for (let j = 0; j < this.size; j++) {
      this.board[i].push(0);
    }
  }
};

LightsOut.prototype.isComplete = function () {
  for (let i = 0; i < this.board.length; i++) {
    for (let j = 0; j < this.board[i].length; j++) {
      if (this.board[i][j] === 1) {
        return false;
      }
    }
  }
  
  return true;
};

LightsOut.prototype.print = function () {
  let output = "<table>";
  
  for (let i = 0; i < this.board.length; i++) {
    output += "<tr>";
    
    for (let j = 0; j < this.board[i].length ;j++) {
      output += "<td onclick='moveHandler(this);' id='" + i + "-" + j + "' " +
        "class='" + (this.board[i][j] ? "on" : "off") + "'></td>";
    }
    
    output += "</tr>";
  }
  
  this.elem.innerHTML = output + "</table>";
};

LightsOut.prototype.move = function (row, col, stopPrint) {
  [[0, 0], [-1, 0], [0, -1], [1, 0], [0, 1]].forEach(e => {
    if (this.board[row+e[0]] !== undefined && 
        this.board[row+e[0]][col+e[1]] !== undefined) {
      this.board[row+e[0]][col+e[1]] ^= 1;
      
      if (!stopPrint) {
        this.printCell(row+e[0], col+e[1]);
      }
    }
  });
};

LightsOut.prototype.printCell = function (row, col) {
  let cell = document.getElementById(row + "-" + col);
  
  if (cell) {
     cell.className = this.board[row][col] ? "on" : "off";
  }
};

LightsOut.prototype.randomize = function (amount) {
  amount = amount || 2000;
        
  for (let i = 0; i < amount; i++) {
    const row = Math.random () * this.board.length | 0;
    const col = Math.random () * this.board.length | 0;
    this.move(row, col, true);
  }
};


function moveHandler(elem) {
  lightsOut.move(...elem.id.split("-").map(Number));
  
  if (lightsOut.isComplete()) {
    messageBox.innerText = "- solved -";
    
    setTimeout(() => {
      messageBox.innerHTML = "&nbsp;";
      lightsOut.randomize();
      lightsOut.print();
    }, 3000);
  }
}


const lightsOut = new LightsOut(5, document.getElementById("lights-out"));

instructionsToggle.addEventListener("click", e => {
  if (instructionsBox.style.display === "block") {
    instructionsBox.style.display = "none";
  }
  else {
    instructionsBox.style.display = "block";
  }
});

instructionsBox.addEventListener("click", e => {
  instructionsBox.style.display = "none";
});

lightsOut.randomize();
lightsOut.print();