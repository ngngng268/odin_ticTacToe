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

    function newPlayerReset() {
        reset();
        player1.score = 0;
        player2.score = 0;

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
    const player1 = new player("First", "x");
    const player2 = new player("Second", "O");// need new button to open new dialog to enter new player name
    console.log(player1);

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
            game = "over";
            ;

        } else if ((lastMark !== "none") && (cellMarked === 9)) {
            player1.score = player1.score + 1;
            player2.score = player2.score + 1;
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