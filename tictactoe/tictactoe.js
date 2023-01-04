var board = [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-']]
var thisTurn = 'X';
var moveCount = 0;
function nextMove(row, col) {
    moveCount++;
    if(board[row][col] != '-') {
        alert('invalid move');
        return;
    }
    document.getElementById("cell-" + row + '' + col).innerHTML = thisTurn;
   

    board[row][col] = thisTurn;

    var winner;
    if((board[0][0] == `X` && board[0][1] == `X` && board[0][2] == `X`) ||
    (board[1][0] == `X` && board[1][1] == `X` && board[1][2] == `X`) ||
    (board[2][0] == `X` && board[2][1] == `X` && board[2][2] == `X`) ||
    (board[0][0] == `X` && board[1][1] == `X` && board[2][2] == `X`) ||
    (board[0][2] == `X` && board[1][1] == `X` && board[2][0] == `X`) ||
    (board[0][0] == `X` && board[1][0] == `X` && board[2][0] == `X`) ||
    (board[0][1] == `X` && board[1][1] == `X` && board[2][1] == `X`) ||
    (board[0][2] == `X` && board[1][2] == `X` && board[2][2] == `X`)){
        winner = 'X';
    }
    else if((board[0][0] == `O` && board[0][1] == `O` && board[0][2] == `O`) ||
    (board[1][0] == `O` && board[1][1] == `O` && board[1][2] == `O`) ||
    (board[2][0] == `O` && board[2][1] == `O` && board[2][2] == `O`) ||
    (board[0][0] == `O` && board[1][1] == `O` && board[2][2] == `O`) ||
    (board[0][2] == `O` && board[1][1] == `O` && board[2][0] == `O`) ||
    (board[0][0] == `O` && board[1][0] == `O` && board[2][0] == `O`) ||
    (board[0][1] == `O` && board[1][1] == `O` && board[2][1] == `O`) ||
    (board[0][2] == `O` && board[1][2] == `O` && board[2][2] == `O`)){
        winner = 'O'
    }
   
    if(winner) {
        document.getElementById('message').innerHTML = winner + ' wins !!!';
        return;
    }

    if(moveCount == 9) {
        document.getElementById('message').innerHTML = 'Game Over. Good job both players. Refresh to replay.';
        return;

    }

    if(thisTurn=='X') {
        thisTurn = 'O'
    } else if(thisTurn=='O') {
        thisTurn = 'X'
    }

    document.getElementById('message').innerHTML = 'Player ' + thisTurn + " go next;";
}
