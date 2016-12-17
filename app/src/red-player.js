"use strict";
var blue_player_1 = require("./blue-player");
var red_winner_1 = require("./red-winner");
var RedPlayer = (function () {
    function RedPlayer() {
    }
    RedPlayer.prototype.getState = function () {
        return "Red Turn";
    };
    RedPlayer.prototype.dropPiece = function (board, column) {
        if (board.updateBoard(column, 1)) {
            return this.updatePlayer(board);
        }
        return new RedPlayer();
    };
    RedPlayer.prototype.updatePlayer = function (board) {
        var winnerFound = board.checkForWinner(1);
        if (winnerFound)
            return new red_winner_1.RedWinner();
        return new blue_player_1.BluePlayer();
    };
    return RedPlayer;
}());
exports.RedPlayer = RedPlayer;
//# sourceMappingURL=red-player.js.map