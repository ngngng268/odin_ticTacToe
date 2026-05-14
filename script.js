function ticTacToe() {
    let gamePlayed = 0;
    let board = [];
    let lastMark = "none";
    let winner = "noone";
    let cellMarked = 0;
    for (i = 0; i <= 8; i++) {
        board[i] = " ";
    } //set all cell to "none"
    let game = "over";
    const cellNodeList = document.querySelectorAll("div.cell");
    const cellArr = Array.from(cellNodeList);
    console.log(cellArr);
    for (i = 0; i <= 8; i++) {
        cellArr[i].textContent = board[i]
    };
    function reset() {
        game = "over";
        for (i = 0; i <= 8; i++) {
            board[i] = " ";
        };
        lastMark = "none";
        let winner = "noone";
        cellMarked = 0;
        for (i = 0; i <= 8; i++) {
            cellArr[i].textContent = board[i];
        };
        display();
    }; //reset function
    const newGameBtn = document.querySelector(".newGameBtn");
    newGameBtn.addEventListener("click", function () { reset() })

    function newPlayerReset() {
        reset();
        player1.score = 0;
        player2.score = 0;
        scoreDisplay();
    }

    function display(content) {
        const bannerDiv = document.querySelector(".display");
        bannerDiv.textContent = content;
    } //display content on taskbar
    const player = function (name, mark) {
        this.name = name
        this.mark = mark
        this.score = 0
    };
    const name1 = document.querySelector(".name1");
    const name2 = document.querySelector(".name2");
    const mark1 = document.querySelector(".mark1");
    const mark2 = document.querySelector(".mark2");
    const score1 = document.querySelector(".score1");
    const score2 = document.querySelector(".score2");
    const player1 = new player(`${name1.value}`, `${mark1.value}`);
    const player2 = new player(`${name2.value}`, `${mark2.value}`);// need new button to open new dialog to enter new player name
    console.log(player1);

    function scoreDisplay() {
        score1.textContent = player1.score;
        score2.textContent = player2.score;
    }
    scoreDisplay();

    const changeInfoBtn = document.querySelector(".changeInfo");
    function changeInfoBtnFn() {
        if (
            (player1.mark === mark1.value)
            && (player2.mark === mark2.value)
            && (player2.name === name2.value)
            && (player1.name === name1.value)
        ) { display("Despite everything, it's still you!") }
        else if (
            (name1.value === name2.value)
            || (mark1.value === mark2.value)
        ) { display("Different players, different marks, please!") }
        else {
            if ((mark1.value !== player1.mark) || (mark2.value !== player2.mark)) {
                player1.mark = mark1.value;
                player2.mark = mark2.value;
                display("Info changed successfully");
            };
            if ((name1.value !== player1.name) || (name2.value !== player2.name)) {
                player2.name = name2.value;
                player1.name = name1.value;
                newPlayerReset();
                display("NEW PLAYER, NEW GAME!!")
            };
        }
        console.log(player1);
        console.log(player2);
    };
    changeInfoBtn.addEventListener("click", function () { changeInfoBtnFn() })

    function clickOnCell(element) {
        if (game === "over") {
            reset();
            game = "onGoing";
        };
        function cell(mark) {
            element.textContent = mark;
            lastMark = mark;
            board[`${element.id}`] = mark
        }
        if (element.textContent == " ") {
            if ((lastMark === "none")
                || (lastMark === player2.mark)) {
                cell(player1.mark)
            } else if (lastMark === player1.mark) {
                cell(player2.mark)
            };
            cellMarked = cellMarked + 1
        };

        if ((lastMark !== "none") &&
            (((board[0] === board[1])
                && (board[1] === board[2])
                && (board[2] === lastMark))
                || ((board[0] === board[3])
                    && (board[3] === board[6])
                    && (board[6] === lastMark))
                || ((board[0] === board[4])
                    && (board[4] === board[8])
                    && (board[8] === lastMark))
                || ((board[1] === board[4])
                    && (board[4] === board[7])
                    && (board[7] === lastMark))
                || ((board[2] === board[5])
                    && (board[5] === board[8])
                    && (board[8] === lastMark))
                || ((board[3] === board[4])
                    && (board[4] === board[5])
                    && (board[5] === lastMark))
                || ((board[6] === board[7])
                    && (board[7] === board[8])
                    && (board[8] === lastMark))
                || ((board[2] === board[4])
                    && (board[4] === board[6])
                    && (board[6] === lastMark))
            )
        ) {
            if (lastMark === player1.mark) {
                winner = player1;
                player1.score = player1.score + 3;
            } else if (lastMark === player2.mark) {
                winner = player2;
                player2.score = player2.score + 3
            };

            display(`Congratulations!! ${winner.name} is the winner of this game!!!!!`);
            gamePlayed = gamePlayed + 1;
            scoreDisplay();
            game = "over";
            ;

        } else if ((lastMark !== "none") && (cellMarked === 9)) {
            player1.score = player1.score + 1;
            player2.score = player2.score + 1;
            scoreDisplay();
            display(`It was a draw. Play again?`);
            gamePlayed = gamePlayed + 1;
            game = "over";
        };
        console.log(lastMark);
        console.log(board);
    };
    cellArr.forEach(element => {
        element.addEventListener("click", function () { clickOnCell(element) })
    });
}
ticTacToe()