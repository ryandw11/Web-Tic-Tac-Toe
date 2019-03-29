function playHardAI() {

    /*
        Check if its self will win.
    */
    if (board[0].innerHTML === " " && board[1].innerHTML === "O" && board[2].innerHTML === "O") {
        board[0].innerHTML = "O";
        board[0].style.cursor = "not-allowed";
    } else if (board[0].innerHTML === "O" && board[1].innerHTML === " " && board[2].innerHTML === "O") {
        board[1].innerHTML = "O";
        board[1].style.cursor = "not-allowed";
    } else if (board[0].innerHTML === "O" && board[1].innerHTML === "O" && board[2].innerHTML === " ") {
        board[2].innerHTML = "O";
        board[2].style.cursor = "not-allowed";
    }
    // NeOt Row
    else if (board[3].innerHTML === " " && board[4].innerHTML === "O" && board[5].innerHTML === "O") {
        board[3].innerHTML = "O";
        board[3].style.cursor = "not-allowed";
    } else if (board[3].innerHTML === "O" && board[4].innerHTML === " " && board[5].innerHTML === "O") {
        board[4].innerHTML = "O";
        board[4].style.cursor = "not-allowed";
    } else if (board[3].innerHTML === "O" && board[4].innerHTML === "O" && board[5].innerHTML === " ") {
        board[5].innerHTML = "O";
        board[5].style.cursor = "not-allowed";
    }
    // NeOt Row
    else if (board[6].innerHTML === " " && board[7].innerHTML === "O" && board[8].innerHTML === "O") {
        board[6].innerHTML = "O";
        board[6].style.cursor = "not-allowed";
    } else if (board[6].innerHTML === "O" && board[7].innerHTML === " " && board[8].innerHTML === "O") {
        board[7].innerHTML = "O";
        board[7].style.cursor = "not-allowed";
    } else if (board[6].innerHTML === "O" && board[7].innerHTML === "O" && board[8].innerHTML === " ") {
        board[8].innerHTML = "O";
        board[8].style.cursor = "not-allowed";
    }
    // Vertical
    else if (board[0].innerHTML === " " && board[3].innerHTML === "O" && board[6].innerHTML === "O") {
        board[0].innerHTML = "O";
        board[0].style.cursor = "not-allowed";
    } else if (board[0].innerHTML === "O" && board[3].innerHTML === " " && board[6].innerHTML === "O") {
        board[3].innerHTML = "O";
        board[3].style.cursor = "not-allowed";
    } else if (board[0].innerHTML === "O" && board[3].innerHTML === "O" && board[6].innerHTML === " ") {
        board[6].innerHTML = "O";
        board[6].style.cursor = "not-allowed";
    }
    // NeOt Vertical
    else if (board[1].innerHTML === " " && board[4].innerHTML === "O" && board[7].innerHTML === "O") {
        board[1].innerHTML = "O";
        board[1].style.cursor = "not-allowed";
    } else if (board[1].innerHTML === "O" && board[4].innerHTML === " " && board[7].innerHTML === "O") {
        board[4].innerHTML = "O";
        board[4].style.cursor = "not-allowed";
    } else if (board[1].innerHTML === "O" && board[4].innerHTML === "O" && board[7].innerHTML === " ") {
        board[7].innerHTML = "O";
        board[7].style.cursor = "not-allowed";
    }
    // NeOt Vertical
    else if (board[2].innerHTML === " " && board[5].innerHTML === "O" && board[8].innerHTML === "O") {
        board[2].innerHTML = "O";
        board[2].style.cursor = "not-allowed";
    } else if (board[2].innerHTML === "O" && board[5].innerHTML === " " && board[8].innerHTML === "O") {
        board[5].innerHTML = "O";
        board[5].style.cursor = "not-allowed";
    } else if (board[2].innerHTML === "O" && board[5].innerHTML === "O" && board[8].innerHTML === " ") {
        board[8].innerHTML = "O";
        board[8].style.cursor = "not-allowed";
    }
    // Diagnal
    else if (board[0].innerHTML === " " && board[4].innerHTML === "O" && board[8].innerHTML === "O") {
        board[0].innerHTML = "O";
        board[0].style.cursor = "not-allowed";
    } else if (board[0].innerHTML === "O" && board[4].innerHTML === " " && board[8].innerHTML === "O") {
        board[4].innerHTML = "O";
        board[4].style.cursor = "not-allowed";
    } else if (board[0].innerHTML === "O" && board[4].innerHTML === "O" && board[8].innerHTML === " ") {
        board[8].innerHTML = "O";
        board[8].style.cursor = "not-allowed";
    }
    // next diagnal
    else if (board[2].innerHTML === " " && board[4].innerHTML === "O" && board[6].innerHTML === "O") {
        board[2].innerHTML = "O";
        board[2].style.cursor = "not-allowed";
    } else if (board[2].innerHTML === "O" && board[4].innerHTML === " " && board[6].innerHTML === "O") {
        board[4].innerHTML = "O";
        board[4].style.cursor = "not-allowed";
    } else if (board[2].innerHTML === "O" && board[4].innerHTML === "O" && board[6].innerHTML === " ") {
        board[6].innerHTML = "O";
        board[6].style.cursor = "not-allowed";
    }
    /*
    Check if the player is about to win
    */
    else if (board[0].innerHTML === " " && board[1].innerHTML === "X" && board[2].innerHTML === "X") {
        board[0].innerHTML = "O";
        board[0].style.cursor = "not-allowed";
    } else if (board[0].innerHTML === "X" && board[1].innerHTML === " " && board[2].innerHTML === "X") {
        board[1].innerHTML = "O";
        board[1].style.cursor = "not-allowed";
    } else if (board[0].innerHTML === "X" && board[1].innerHTML === "X" && board[2].innerHTML === " ") {
        board[2].innerHTML = "O";
        board[2].style.cursor = "not-allowed";
    }
    // Next Row
    else if (board[3].innerHTML === " " && board[4].innerHTML === "X" && board[5].innerHTML === "X") {
        board[3].innerHTML = "O";
        board[3].style.cursor = "not-allowed";
    } else if (board[3].innerHTML === "X" && board[4].innerHTML === " " && board[5].innerHTML === "X") {
        board[4].innerHTML = "O";
        board[4].style.cursor = "not-allowed";
    } else if (board[3].innerHTML === "X" && board[4].innerHTML === "X" && board[5].innerHTML === " ") {
        board[5].innerHTML = "O";
        board[5].style.cursor = "not-allowed";
    }
    // Next Row
    else if (board[6].innerHTML === " " && board[7].innerHTML === "X" && board[8].innerHTML === "X") {
        board[6].innerHTML = "O";
        board[6].style.cursor = "not-allowed";
    } else if (board[6].innerHTML === "X" && board[7].innerHTML === " " && board[8].innerHTML === "X") {
        board[7].innerHTML = "O";
        board[7].style.cursor = "not-allowed";
    } else if (board[6].innerHTML === "X" && board[7].innerHTML === "X" && board[8].innerHTML === " ") {
        board[8].innerHTML = "O";
        board[8].style.cursor = "not-allowed";
    }
    // Vertical
    else if (board[0].innerHTML === " " && board[3].innerHTML === "X" && board[6].innerHTML === "X") {
        board[0].innerHTML = "O";
        board[0].style.cursor = "not-allowed";
    } else if (board[0].innerHTML === "X" && board[3].innerHTML === " " && board[6].innerHTML === "X") {
        board[3].innerHTML = "O";
        board[3].style.cursor = "not-allowed";
    } else if (board[0].innerHTML === "X" && board[3].innerHTML === "X" && board[6].innerHTML === " ") {
        board[6].innerHTML = "O";
        board[6].style.cursor = "not-allowed";
    }
    // Next Vertical
    else if (board[1].innerHTML === " " && board[4].innerHTML === "X" && board[7].innerHTML === "X") {
        board[1].innerHTML = "O";
        board[1].style.cursor = "not-allowed";
    } else if (board[1].innerHTML === "X" && board[4].innerHTML === " " && board[7].innerHTML === "X") {
        board[4].innerHTML = "O";
        board[4].style.cursor = "not-allowed";
    } else if (board[1].innerHTML === "X" && board[4].innerHTML === "X" && board[7].innerHTML === " ") {
        board[7].innerHTML = "O";
        board[7].style.cursor = "not-allowed";
    }
    // Next Vertical
    else if (board[2].innerHTML === " " && board[5].innerHTML === "X" && board[8].innerHTML === "X") {
        board[2].innerHTML = "O";
        board[2].style.cursor = "not-allowed";
    } else if (board[2].innerHTML === "X" && board[5].innerHTML === " " && board[8].innerHTML === "X") {
        board[5].innerHTML = "O";
        board[5].style.cursor = "not-allowed";
    } else if (board[2].innerHTML === "X" && board[5].innerHTML === "X" && board[8].innerHTML === " ") {
        board[8].innerHTML = "O";
        board[8].style.cursor = "not-allowed";
    }
    // Diagnal
    else if (board[0].innerHTML === " " && board[4].innerHTML === "X" && board[8].innerHTML === "X") {
        board[0].innerHTML = "O";
        board[0].style.cursor = "not-allowed";
    } else if (board[0].innerHTML === "X" && board[4].innerHTML === " " && board[8].innerHTML === "X") {
        board[4].innerHTML = "O";
        board[4].style.cursor = "not-allowed";
    } else if (board[0].innerHTML === "X" && board[4].innerHTML === "X" && board[8].innerHTML === " ") {
        board[8].innerHTML = "O";
        board[8].style.cursor = "not-allowed";
    }
    // next diagnal
    else if (board[2].innerHTML === " " && board[4].innerHTML === "X" && board[6].innerHTML === "X") {
        board[2].innerHTML = "O";
        board[2].style.cursor = "not-allowed";
    } else if (board[2].innerHTML === "X" && board[4].innerHTML === " " && board[6].innerHTML === "X") {
        board[4].innerHTML = "O";
        board[4].style.cursor = "not-allowed";
    } else if (board[2].innerHTML === "X" && board[4].innerHTML === "X" && board[6].innerHTML === " ") {
        board[6].innerHTML = "O";
        board[6].style.cursor = "not-allowed";
    } else {
        var pickeds = false;
        while (!pickeds) {
            var picked = Math.ceil(Math.random() * 8);
            if (board[picked].innerHTML === " ") {
                board[picked].innerHTML = "O";
                board[picked].style.cursor = "not-allowed";
                pickeds = true;
            }
        }
    }
}

function playMediumAI() {

    /*
        Check if its self will win.
    */
    if (board[0].innerHTML === " " && board[1].innerHTML === "O" && board[2].innerHTML === "O") {
        board[0].innerHTML = "O";
        board[0].style.cursor = "not-allowed";
    } else if (board[0].innerHTML === "O" && board[1].innerHTML === " " && board[2].innerHTML === "O") {
        board[1].innerHTML = "O";
        board[1].style.cursor = "not-allowed";
    } else if (board[0].innerHTML === "O" && board[1].innerHTML === "O" && board[2].innerHTML === " ") {
        board[2].innerHTML = "O";
        board[2].style.cursor = "not-allowed";
    }
    // NeOt Row
    else if (board[3].innerHTML === " " && board[4].innerHTML === "O" && board[5].innerHTML === "O") {
        board[3].innerHTML = "O";
        board[3].style.cursor = "not-allowed";
    } else if (board[3].innerHTML === "O" && board[4].innerHTML === " " && board[5].innerHTML === "O") {
        board[4].innerHTML = "O";
        board[4].style.cursor = "not-allowed";
    } else if (board[3].innerHTML === "O" && board[4].innerHTML === "O" && board[5].innerHTML === " ") {
        board[5].innerHTML = "O";
        board[5].style.cursor = "not-allowed";
    }
    // NeOt Row
    else if (board[6].innerHTML === " " && board[7].innerHTML === "O" && board[8].innerHTML === "O") {
        board[6].innerHTML = "O";
        board[6].style.cursor = "not-allowed";
    } else if (board[6].innerHTML === "O" && board[7].innerHTML === " " && board[8].innerHTML === "O") {
        board[7].innerHTML = "O";
        board[7].style.cursor = "not-allowed";
    } else if (board[6].innerHTML === "O" && board[7].innerHTML === "O" && board[8].innerHTML === " ") {
        board[8].innerHTML = "O";
        board[8].style.cursor = "not-allowed";
    }
    // Vertical
    else if (board[0].innerHTML === " " && board[3].innerHTML === "O" && board[6].innerHTML === "O") {
        board[0].innerHTML = "O";
        board[0].style.cursor = "not-allowed";
    } else if (board[0].innerHTML === "O" && board[3].innerHTML === " " && board[6].innerHTML === "O") {
        board[3].innerHTML = "O";
        board[3].style.cursor = "not-allowed";
    } else if (board[0].innerHTML === "O" && board[3].innerHTML === "O" && board[6].innerHTML === " ") {
        board[6].innerHTML = "O";
        board[6].style.cursor = "not-allowed";
    }
    // NeOt Vertical
    else if (board[1].innerHTML === " " && board[4].innerHTML === "O" && board[7].innerHTML === "O") {
        board[1].innerHTML = "O";
        board[1].style.cursor = "not-allowed";
    } else if (board[1].innerHTML === "O" && board[4].innerHTML === " " && board[7].innerHTML === "O") {
        board[4].innerHTML = "O";
        board[4].style.cursor = "not-allowed";
    } else if (board[1].innerHTML === "O" && board[4].innerHTML === "O" && board[7].innerHTML === " ") {
        board[7].innerHTML = "O";
        board[7].style.cursor = "not-allowed";
    }
    // NeOt Vertical
    else if (board[2].innerHTML === " " && board[5].innerHTML === "O" && board[8].innerHTML === "O") {
        board[2].innerHTML = "O";
        board[2].style.cursor = "not-allowed";
    } else if (board[2].innerHTML === "O" && board[5].innerHTML === " " && board[8].innerHTML === "O") {
        board[5].innerHTML = "O";
        board[5].style.cursor = "not-allowed";
    } else if (board[2].innerHTML === "O" && board[5].innerHTML === "O" && board[8].innerHTML === " ") {
        board[8].innerHTML = "O";
        board[8].style.cursor = "not-allowed";
    }
    // Diagnal
    else if (board[0].innerHTML === " " && board[4].innerHTML === "O" && board[8].innerHTML === "O") {
        board[0].innerHTML = "O";
        board[0].style.cursor = "not-allowed";
    } else if (board[0].innerHTML === "O" && board[4].innerHTML === " " && board[8].innerHTML === "O") {
        board[4].innerHTML = "O";
        board[4].style.cursor = "not-allowed";
    } else if (board[0].innerHTML === "O" && board[4].innerHTML === "O" && board[8].innerHTML === " ") {
        board[8].innerHTML = "O";
        board[8].style.cursor = "not-allowed";
    }
    // next diagnal
    else if (board[2].innerHTML === " " && board[4].innerHTML === "O" && board[6].innerHTML === "O") {
        board[2].innerHTML = "O";
        board[2].style.cursor = "not-allowed";
    } else if (board[2].innerHTML === "O" && board[4].innerHTML === " " && board[6].innerHTML === "O") {
        board[4].innerHTML = "O";
        board[4].style.cursor = "not-allowed";
    } else if (board[2].innerHTML === "O" && board[4].innerHTML === "O" && board[6].innerHTML === " ") {
        board[6].innerHTML = "O";
        board[6].style.cursor = "not-allowed";
    } else {
        var pickeds = false;
        while (!pickeds) {
            var picked = Math.ceil(Math.random() * 8);
            if (board[picked].innerHTML === " ") {
                board[picked].innerHTML = "O";
                board[picked].style.cursor = "not-allowed";
                pickeds = true;
            }
        }
    }
}

function playEasyAI() {
    var pickeds = false;
    while (!pickeds) {
        var picked = Math.ceil(Math.random() * 8);
        if (board[picked].innerHTML === " ") {
            board[picked].innerHTML = "O";
            board[picked].style.cursor = "not-allowed";
            pickeds = true;
        }
    }
}

function checkWin() {
    if (board[0].innerHTML === "X" && board[1].innerHTML === "X" && board[2].innerHTML === "X") {
        return User.PLAYER;
    } else if (board[3].innerHTML === "X" && board[4].innerHTML === "X" && board[5].innerHTML === "X") {
        return User.PLAYER;
    } else if (board[6].innerHTML === "X" && board[7].innerHTML === "X" && board[8].innerHTML === "X") {
        return User.PLAYER;
    }
    /*
        Downwards
    */
    else if (board[0].innerHTML === "X" && board[3].innerHTML === "X" && board[6].innerHTML === "X") {
        return User.PLAYER;
    } else if (board[1].innerHTML === "X" && board[4].innerHTML === "X" && board[7].innerHTML === "X") {
        return User.PLAYER;
    } else if (board[2].innerHTML === "X" && board[5].innerHTML === "X" && board[8].innerHTML === "X") {
        return User.PLAYER;
    }
    /*
        Diagnal
    */
    else if (board[0].innerHTML === "X" && board[4].innerHTML === "X" && board[8].innerHTML === "X") {
        return User.PLAYER;
    } else if (board[2].innerHTML === "X" && board[4].innerHTML === "X" && board[6].innerHTML === "X") {
        return User.PLAYER;
    }

    /*
     *
     *   If the AI won
     *
     */
    else if (board[0].innerHTML === "O" && board[1].innerHTML === "O" && board[2].innerHTML === "O") {
        return User.AI;
    } else if (board[3].innerHTML === "O" && board[4].innerHTML === "O" && board[5].innerHTML === "O") {
        return User.AI;
    } else if (board[6].innerHTML === "O" && board[7].innerHTML === "O" && board[8].innerHTML === "O") {
        return User.AI;
    }
    /*
        Downwards
    */
    else if (board[0].innerHTML === "O" && board[3].innerHTML === "O" && board[6].innerHTML === "O") {
        return User.AI;
    } else if (board[1].innerHTML === "O" && board[4].innerHTML === "O" && board[7].innerHTML === "O") {
        return User.AI;
    } else if (board[2].innerHTML === "O" && board[5].innerHTML === "O" && board[8].innerHTML === "O") {
        return User.AI;
    }
    /*
        Diagnal
    */
    else if (board[0].innerHTML === "O" && board[4].innerHTML === "O" && board[8].innerHTML === "O") {
        return User.AI;
    } else if (board[2].innerHTML === "O" && board[4].innerHTML === "O" && board[6].innerHTML === "O") {
        return User.AI;
    } else if (board[0].innerHTML != " " && board[1].innerHTML != " " && board[2].innerHTML != " " && board[3].innerHTML != " " && board[4].innerHTML != " " && board[5].innerHTML != " " && board[6].innerHTML != " " && board[7].innerHTML != " " && board[8].innerHTML != " ") {
        return "tie";
    } else {
        return null;
    }
}


function checkMultiWin() {
    if (board[0].innerHTML === "X" && board[1].innerHTML === "X" && board[2].innerHTML === "X") {
        return User.PLAYERONE;
    } else if (board[3].innerHTML === "X" && board[4].innerHTML === "X" && board[5].innerHTML === "X") {
        return User.PLAYERONE;
    } else if (board[6].innerHTML === "X" && board[7].innerHTML === "X" && board[8].innerHTML === "X") {
        return User.PLAYERONE;
    }
    /*
        Downwards
    */
    else if (board[0].innerHTML === "X" && board[3].innerHTML === "X" && board[6].innerHTML === "X") {
        return User.PLAYERONE;
    } else if (board[1].innerHTML === "X" && board[4].innerHTML === "X" && board[7].innerHTML === "X") {
        return User.PLAYERONE;
    } else if (board[2].innerHTML === "X" && board[5].innerHTML === "X" && board[8].innerHTML === "X") {
        return User.PLAYERONE;
    }
    /*
        Diagnal
    */
    else if (board[0].innerHTML === "X" && board[4].innerHTML === "X" && board[8].innerHTML === "X") {
        return User.PLAYERONE;
    } else if (board[2].innerHTML === "X" && board[4].innerHTML === "X" && board[6].innerHTML === "X") {
        return User.PLAYERONE;
    }

    /*
     *
     *   If the AI won
     *
     */
    else if (board[0].innerHTML === "O" && board[1].innerHTML === "O" && board[2].innerHTML === "O") {
        return User.PLAYERTWO;
    } else if (board[3].innerHTML === "O" && board[4].innerHTML === "O" && board[5].innerHTML === "O") {
        return User.PLAYERTWO;
    } else if (board[6].innerHTML === "O" && board[7].innerHTML === "O" && board[8].innerHTML === "O") {
        return User.PLAYERTWO;
    }
    /*
        Downwards
    */
    else if (board[0].innerHTML === "O" && board[3].innerHTML === "O" && board[6].innerHTML === "O") {
        return User.PLAYERTWO;
    } else if (board[1].innerHTML === "O" && board[4].innerHTML === "O" && board[7].innerHTML === "O") {
        return User.PLAYERTWO;
    } else if (board[2].innerHTML === "O" && board[5].innerHTML === "O" && board[8].innerHTML === "O") {
        return User.PLAYERTWO;
    }
    /*
        Diagnal
    */
    else if (board[0].innerHTML === "O" && board[4].innerHTML === "O" && board[8].innerHTML === "O") {
        return User.PLAYERTWO;
    } else if (board[2].innerHTML === "O" && board[4].innerHTML === "O" && board[6].innerHTML === "O") {
        return User.PLAYERTWO;
    } else if (board[0].innerHTML != " " && board[1].innerHTML != " " && board[2].innerHTML != " " && board[3].innerHTML != " " && board[4].innerHTML != " " && board[5].innerHTML != " " && board[6].innerHTML != " " && board[7].innerHTML != " " && board[8].innerHTML != " ") {
        return "tie";
    } else {
        return null;
    }
}