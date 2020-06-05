

function startGame() {
    for(let i=1;i<=9;i++) {
        clearBox(i);
        clearColor(i);
    }
    turn = 'X';
    winner = null;
    setMessage(turn +"'s Turn");
}

const setMessage = (msg) => {
    document.getElementById('player').innerText = msg;
}

const box = (square) => {
    if(winner  != null) {
        setMessage(turn + " Already won the game");
    } else if(square.innerText == "") {
        square.innerText = turn;
        switchTurn();
    } else {
        setMessage("This Square is already Filled "+ "it's "+turn+" turn");
    }
}

const switchTurn = () => {
    if(checkWinner(turn)) {
        setMessage("Congratulations, " + turn +" Win's.")
        winner =  turn;
    } else if(turn == 'X') {
        turn = 'O';
        setMessage(turn + "'s Turn");
    } else  {
        turn = 'X';
        setMessage(turn + "'s Turn");
    }
}
const getBox = (number) => {
    return document.getElementById('r'+number).innerHTML;
}
const checkMove = (a,b,c,sign) => {
    if(getBox(a)==sign && getBox(b)==sign && getBox(c)==sign){
        return true;
    } else  {
        return false;
    }
}

const checkWinner = (sign) => {
    let result = false;
    if(checkMove(1,2,3,sign) || checkMove(4,5,6,sign) || checkMove(7,8,9,sign) || 
    checkMove(1,4,7,sign) || checkMove(2,5,8,sign) || checkMove(3,6,9,sign) ||
    checkMove(1,5,9,sign) || checkMove(3,5,7,sign)) {

        changeColor();
        return true;
    } else {
        if(getBox(1)!="" && getBox(2)!="" && getBox(3)!="" && getBox(4)!="" &&
        getBox(5)!="" && getBox(6)!="" && getBox(7)!="" && getBox(8)!="" && getBox(9)!="") {
            setMessage("Match Is Tie");
            throw "End";
        }
    }
}

const clearBox = (number) => {
    document.getElementById('r'+number).innerHTML = "";
}

const clearColor = (number) => {
    document.getElementById('r'+number).style.background= 'black';
    document.getElementById('r'+number).style.color= 'white';
}

const changeColor = () => {
    if(checkMove(1,2,3,turn)){
        for(let i=1;i<=3;i++) {
            let color = document.getElementById('r'+i);
            color.style.background = "yellow";
            color.style.color = "red";
        }
    } else if(checkMove(4,5,6,turn)){
        for(let i=4;i<=6;i++) {
            let color = document.getElementById('r'+i);
            color.style.background = "yellow";
            color.style.color = "red";
        }
    } else if(checkMove(7,8,9,turn)){
        for(let i=7;i<=9;i++) {
            let color = document.getElementById('r'+i);
            color.style.background = "yellow";
            color.style.color = "red";
        }
    } else if(checkMove(1,4,7,turn)){
        for(let i=1;i<=7;i=i+3) {
            let color = document.getElementById('r'+i);
            color.style.background = "yellow";
            color.style.color = "red";
        }
    } else if(checkMove(2,5,8,turn)){
        for(let i=2;i<=8;i=i+3) {
            let color = document.getElementById('r'+i);
            color.style.background = "yellow";
            color.style.color = "red";
        }
    } else if(checkMove(3,6,9,turn)){
        for(let i=3;i<=9;i=i+3) {
            let color = document.getElementById('r'+i);
            color.style.background = "yellow";
            color.style.color = "red";
        }
    } else if(checkMove(1,5,9,turn)){
        for(let i=1;i<=9;i=i+4) {
            let color = document.getElementById('r'+i);
            color.style.background = "yellow";
            color.style.color = "red";
        }
    } else if(checkMove(3,5,7,turn)){
        for(let i=3;i<=7;i=i+2) {
            let color = document.getElementById('r'+i);
            color.style.background = "yellow";
            color.style.color = "red";
        }
    }
}