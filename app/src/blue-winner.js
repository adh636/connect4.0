"use strict";
var BlueWinner = (function () {
    function BlueWinner() {
    }
    BlueWinner.prototype.getState = function () {
        return "Blue Wins!";
    };
    BlueWinner.prototype.dropPiece = function (board, column) {
        return new BlueWinner();
    };
    return BlueWinner;
}());
exports.BlueWinner = BlueWinner;
//# sourceMappingURL=blue-winner.js.map