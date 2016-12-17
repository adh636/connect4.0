"use strict";
var RedWinner = (function () {
    function RedWinner() {
    }
    RedWinner.prototype.getState = function () {
        return "Red Wins!";
    };
    RedWinner.prototype.dropPiece = function (board, column) {
        return new RedWinner();
    };
    return RedWinner;
}());
exports.RedWinner = RedWinner;
//# sourceMappingURL=red-winner.js.map