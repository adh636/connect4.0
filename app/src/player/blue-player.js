"use strict";
var red_player_1 = require("./red-player");
var blue_winner_1 = require("./blue-winner");
var BluePlayer = (function () {
    function BluePlayer() {
    }
    BluePlayer.prototype.getState = function () {
        return "Blue Turn";
    };
    BluePlayer.prototype.dropPiece = function (board, column) {
        if (board.updateBoard(column, 2)) {
            return this.updatePlayer(board);
        }
        return new BluePlayer();
    };
    BluePlayer.prototype.updatePlayer = function (board) {
        var winnerFound = board.checkForWinner(2);
        if (winnerFound)
            return new blue_winner_1.BlueWinner();
        return new red_player_1.RedPlayer();
    };
    return BluePlayer;
}());
exports.BluePlayer = BluePlayer;
//# sourceMappingURL=blue-player.js.map