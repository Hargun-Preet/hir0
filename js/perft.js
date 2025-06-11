var perft_leafNodes;

function Perft(depth) {
    if (depth == 0) {
        perft_leafNodes++;
        return;
    }

    GenerateMoves();

    var index;
    var move;

    for (index = GameBoard.moveListStart[GameBoard.ply]; index < GameBoard.moveListStart[GameBoard.ply + 1]; ++index) {
        move = GameBoard.moveList[index];
        if (MakeMove(move) == BOOL.FALSE) {
            continue;
        }
        Perft(depth - 1);
        TakeMove();
    }

    return;
}

function PerftTest(depth) {
    PrintBoard();
    console.log("Starting Test to Depth:" + depth);
    perft_leafNodes = 0;

    var index;
    var move;
    var moveNum = 0;

    GenerateMoves();

    for (index = GameBoard.moveListStart[GameBoard.ply]; index < GameBoard.moveListStart[GameBoard.ply + 1]; ++index) {
        move = GameBoard.moveList[index];
        if (MakeMove(move) == BOOL.FALSE) {
            continue;
        }
        moveNum++;
        var cumNodes = perft_leafNodes;
        Perft(depth - 1);
        TakeMove();
        var oldNodes = perft_leafNodes - cumNodes;
        console.log("move:" + moveNum + " " + PrMove(move) + " " + oldNodes);
    }

    console.log("Test Complete:" + perft_leafNodes + " leaf nodes visited");

    return;
}