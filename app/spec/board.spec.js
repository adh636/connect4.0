"use strict";
var board_1 = require("../src/board");
describe("connect 4", function () {
    var board;
    beforeEach(function () {
        board = new board_1.Board();
    });
    it("should detect 4 in a row vertically", function () {
        board.boardState = [
            [0, 0, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        expect(board.checkForVerticalWinner(1)).toBeTruthy();
    });
    it("should detect 4 in a row horizontally", function () {
        board.boardState = [
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        expect(board.checkForHorizontalWinner(1)).toBeTruthy();
    });
    it("should detect 4 in a row downward diagonally", function () {
        board.boardState = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        expect(board.checkForDownwardDiagonalWinner(1)).toBeTruthy();
    });
    it("should detect 4 in a row upward diagonally", function () {
        board.boardState = [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        expect(board.checkForUpwardDiagonalWinner(1)).toBeTruthy();
    });
    it("should detect 4 in a row anywhere on board", function () {
        board.boardState = [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 2],
            [0, 0, 0, 0, 2, 0],
            [0, 0, 0, 2, 1, 0],
            [0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        expect(board.checkForWinner(2)).toBeTruthy();
    });
});
//# sourceMappingURL=board.spec.js.map