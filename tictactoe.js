"use strict";

var User = {
    PLAYER: "Player",
    AI: "AI",
    PLAYERONE: "Player One",
    PLAYERTWO: "Player Two"
};

var currentMultiPlayer = "X";

var board = document.getElementsByTagName("td");
window.onload = init;

var boardCode = '<table><tr><td id="1">X</td><td id="2">X</td><td id="3">X</td></tr><tr><td id="4">X</td><td id="5">X</td><td id="6">X</td></tr><tr><td id="7">X</td><td id="8">X</td><td id="9">X</td></tr></table>';

function resetBoard() {
    for (var i = 0; i < board.length; i++) {
        board[i].innerHTML = " ";
        board[i].style.cursor = "pointer";
    }
}

function makeBoard() {
    document.getElementById("tic").innerHTML = "";
    var h1 = document.createElement("h1");
    h1.textContent = "Tic-Tac-Toe";
    var diffText = document.createElement("p");
    diffText.id = "diffText";
    diffText.textContent = "Current Difficulty: ";

    document.getElementById("tic").appendChild(h1);
    document.getElementById("tic").appendChild(diffText);
    document.getElementById("tic").innerHTML += boardCode;
    var div = document.createElement("div");
    div.className = "but";
    var button = document.createElement("button");
    button.id = "return";
    button.textContent = "Return to Menu"
    button.onclick = function () {
        makeTitle();
    }
    div.appendChild(button);
    document.getElementById("tic").appendChild(div);
    resetBoard();
}

function init() {
    makeTitle();
}

function makeTitle() {
    document.getElementById("tic").innerHTML = "";
    var main = document.createElement("main");
    main.id = "modeSelect";
    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");

    h1.textContent = "Tic-Tac-Toe";
    h2.textContent = "Select a mode!";
    var div = document.createElement("div");
    div.className = "but";
    var single = document.createElement("button");
    single.id = "single";
    single.textContent = "Singleplayer";
    single.onclick = function () {
        makeSingleTitle();
    };
    var multi = document.createElement("button");
    multi.id = "multi";
    multi.textContent = "Multiplayer";
    multi.onclick = function () {
        multiPlayer();
    };

    main.appendChild(h1);
    main.appendChild(h2);
    div.appendChild(single);
    div.appendChild(multi);
    main.appendChild(div);
    document.getElementById("tic").appendChild(main);
}

function makeSingleTitle() {
    var main = document.createElement("main");
    main.id = "singleTitle";

    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");

    h1.textContent = "Tic-Tac-Toe";
    h2.textContent = "Select a difficulty level!";

    var div = document.createElement("div");
    div.className = "but";

    var input = document.createElement("select");
    input.name = "difficulty";
    input.id = "difSelect";
    var options = [document.createElement("option"), document.createElement("option"), document.createElement("option")];
    options[0].value = "easy";
    options[0].textContent = "Easy";
    options[1].value = "medium";
    options[1].textContent = "Medium";
    options[2].value = "hard";
    options[2].textContent = "Hard";

    var button = document.createElement("button");
    button.id = "playMulti";
    button.textContent = "Play!";
    button.onclick = function () {
        startSingle(input.selectedOptions[0].value);
    };

    main.appendChild(h1);
    main.appendChild(h2);
    input.appendChild(options[0]);
    input.appendChild(options[1]);
    input.appendChild(options[2]);
    div.appendChild(input);
    div.appendChild(button);
    main.appendChild(div);
    document.getElementById("tic").removeChild(document.getElementById("modeSelect"));
    document.getElementById("tic").appendChild(main);

}

function startSingle(value) {
    if (value === "hard") {
        hardMode();
    } else if (value === "medium") {
        mediumMode();
    } else if (value === "easy") {
        easyMode();
    }
}

function multiPlayer() {
    document.getElementById("tic").removeChild(document.getElementById("modeSelect"));
    makeBoard();
    document.getElementById("diffText").textContent = "Current Player: X";
    for (var i = 0; i < board.length; i++) {
        board[i].addEventListener("click", multiClick);
    }
    currentMultiPlayer = "X";
    openmenu("Tic-Tac-Toe: Multiplayer", "Welcome to Multiplayer! Player One is X and Player Two is O. Player One goes first!", "Welcome!");

    function multiClick(e) {
        var clicked = e.target;
        var id = parseInt(clicked.id) - 1;
        var obj = board[id];
        if (obj.innerHTML === " ") {
            obj.innerHTML = currentMultiPlayer;
            obj.style.cursor = "not-allowed";
            currentMultiPlayer = currentMultiPlayer === "X" ? "O" : "X";
        } else {
            return;
        }
        document.getElementById("diffText").textContent = "Current Player: " + currentMultiPlayer;
        setTimeout(function () {
            if (checkMultiWin() != null) {
                if (checkMultiWin() === "tie")
                    openmenu("Tic-Tac-Toe: Multiplayer", "Player One and Player Two tied!", "Tie!");
                else
                    openmenu("Tic-Tac-Toe: Multiplayer", checkMultiWin().toString() + " won!", "Winner!");
                resetBoard();
                currentPlayer = "X";
                document.getElementById("diffText").textContent = "Current Player: X";
                return;
            }
        }, 100);
    }
}

function hardMode() {
    document.getElementById("tic").removeChild(document.getElementById("singleTitle"));
    makeBoard();
    document.getElementById("diffText").textContent = "Current Difficulty: Hard";
    for (var i = 0; i < board.length; i++) {
        board[i].addEventListener("click", hardClick);
    }

    function hardClick(e) {
        var clicked = e.target;
        var id = parseInt(clicked.id) - 1;
        var obj = board[id];
        if (obj.innerHTML === " ") {
            obj.innerHTML = "X";
            obj.style.cursor = "not-allowed";
        } else {
            return;
        }
        setTimeout(function () {
            if (checkWin() != null) {
                if (checkWin() === "tie")
                    openmenu("Tic-Tac-Toe: Singleplayer", "You and the AI tied!", "Tie!");
                else
                    openmenu("Tic-Tac-Toe: Singleplayer", "The " + checkWin().toString() + " won!", "Winner!");
                resetBoard();
                return;
            }
            playHardAI();
            if (checkWin() != null) {
                if (checkWin() === "tie")
                    openmenu("Tic-Tac-Toe: Singleplayer", "You and the AI tied!", "Tie!");
                else
                    openmenu("Tic-Tac-Toe: Singleplayer", "The " + checkWin().toString() + " won!", "Winner!");
                resetBoard();
                return;
            }
        }, 500);

    }
}

function mediumMode() {
    document.getElementById("tic").removeChild(document.getElementById("singleTitle"));
    makeBoard();
    document.getElementById("diffText").textContent = "Current Difficulty: Medium";
    for (var i = 0; i < board.length; i++) {
        board[i].addEventListener("click", mediumClick);
    }

    function mediumClick(e) {
        var clicked = e.target;
        var id = parseInt(clicked.id) - 1;
        var obj = board[id];
        if (obj.innerHTML === " ") {
            obj.innerHTML = "X";
            obj.style.cursor = "not-allowed";
        } else {
            return;
        }
        setTimeout(function () {
            if (checkWin() != null) {
                if (checkWin() === "tie")
                    openmenu("Tic-Tac-Toe: Singleplayer", "You and the AI tied!", "Tie!");
                else
                    openmenu("Tic-Tac-Toe: Singleplayer", "The " + checkWin().toString() + " won!", "Winner!");
                resetBoard();
                return;
            }
            playMediumAI();
            if (checkWin() != null) {
                if (checkWin() === "tie")
                    openmenu("Tic-Tac-Toe: Singleplayer", "You and the AI tied!", "Tie!");
                else
                    openmenu("Tic-Tac-Toe: Singleplayer", "The " + checkWin().toString() + " won!", "Winner!");
                resetBoard();
                return;
            }
        }, 500);

    }
}

function easyMode() {
    document.getElementById("tic").removeChild(document.getElementById("singleTitle"));
    makeBoard();
    document.getElementById("diffText").textContent = "Current Difficulty: Easy";
    for (var i = 0; i < board.length; i++) {
        board[i].addEventListener("click", easyClick);
    }

    function easyClick(e) {
        var clicked = e.target;
        var id = parseInt(clicked.id) - 1;
        var obj = board[id];
        if (obj.innerHTML === " ") {
            obj.innerHTML = "X";
            obj.style.cursor = "not-allowed";
        } else {
            return;
        }
        setTimeout(function () {
            if (checkWin() != null) {
                if (checkWin() === "tie")
                    openmenu("Tic-Tac-Toe: Singleplayer", "You and the AI tied!", "Tie!");
                else
                    openmenu("Tic-Tac-Toe: Singleplayer", "The " + checkWin().toString() + " won!", "Winner!");
                resetBoard();
                return;
            }
            playEasyAI();
            if (checkWin() != null) {
                if (checkWin() === "tie")
                    openmenu("Tic-Tac-Toe: Singleplayer", "You and the AI tied!", "Tie!");
                else
                    openmenu("Tic-Tac-Toe: Singleplayer", "The " + checkWin().toString() + " won!", "Winner!");
                resetBoard();
                return;
            }
        }, 500);

    }
}