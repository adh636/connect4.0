"use strict";
var Board = (function () {
    function Board() {
        this.boardState = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
    }
    Board.prototype.updateBoard = function (column, player) {
        for (var row = 5; row >= 0; row--) {
            if (this.cellEmpty(column, row)) {
                this.fillCell(column, row, player);
                return true;
            }
        }
        return false;
    };
    Board.prototype.fillCell = function (column, row, player) {
        this.boardState[column][row] = player;
    };
    Board.prototype.cellEmpty = function (column, i) {
        return this.boardState[column][i] === 0;
    };
    Board.prototype.checkForWinner = function (player) {
        return this.checkForVerticalWinner(player)
            || this.checkForHorizontalWinner(player)
            || this.checkForDiagonalWinner(player);
    };
    Board.prototype.checkForVerticalWinner = function (player) {
        return this.boardState.some(function (column) {
            var count = 0;
            return column.some(function (cell) {
                if (cell === player) {
                    count++;
                    return count === 4;
                }
                count = 0;
            });
        });
    };
    Board.prototype.checkForHorizontalWinner = function (player) {
        var count = 0;
        for (var row = 0; row <= 5; row++) {
            for (var column = 0; column <= 6; column++) {
                if (this.boardState[column][row] === player) {
                    count++;
                    if (count === 4)
                        return true;
                }
                else {
                    count = 0;
                }
            }
            count = 0;
        }
        return false;
    };
    Board.prototype.checkForDiagonalWinner = function (player) {
        return this.checkForDownwardDiagonalWinner(player) || this.checkForUpwardDiagonalWinner(player);
    };
    Board.prototype.checkForDownwardDiagonalWinner = function (player) {
        var count = 0;
        for (var column = 0; column <= 6; column++) {
            for (var row = 5; row >= 0; row--) {
                for (var diagonal = 0; diagonal < 5; diagonal++) {
                    if (column + diagonal <= 6 && row - diagonal >= 0) {
                        if (this.boardState[column + diagonal][row - diagonal] === player) {
                            count++;
                            if (count === 4)
                                return true;
                        }
                        else {
                            count = 0;
                        }
                    }
                }
                count = 0;
            }
        }
        return false;
    };
    Board.prototype.checkForUpwardDiagonalWinner = function (player) {
        var count = 0;
        for (var column = 0; column <= 6; column++) {
            for (var row = 0; row <= 5; row++) {
                for (var diagonal = 0; diagonal < 5; diagonal++) {
                    if (column + diagonal <= 6 && row + diagonal <= 5) {
                        if (this.boardState[column + diagonal][row + diagonal] === player) {
                            count++;
                            if (count === 4)
                                return true;
                        }
                        else {
                            count = 0;
                        }
                    }
                }
                count = 0;
            }
        }
        return false;
    };
    return Board;
}());
exports.Board = Board;
//# sourceMappingURL=board.js.map