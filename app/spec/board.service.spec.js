"use strict";
var board_service_1 = require("../src/board.service");
describe("connect 4", function () {
    var boardService;
    beforeEach(function () {
        boardService = new board_service_1.BoardService();
    });
    it("should detect 4 in a row vertically", function () {
        var board = [
            [0, 0, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        expect(boardService.checkForVerticalWinner(board)).toBeTruthy();
    });
    it("should detect 4 in a row horizontally", function () {
        var board = [
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        expect(boardService.checkForHorizontalWinner(board)).toBeTruthy();
    });
    it("should detect 4 in a row downward diagonally", function () {
        var board = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        expect(boardService.checkForDownwardDiagonalWinner(board)).toBeTruthy();
    });
    it("should detect 4 in a row upward diagonally", function () {
        var board = [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        expect(boardService.checkForUpwardDiagonalWinner(board)).toBeTruthy();
    });
    it("should detect 4 in a row anywhere on board", function () {
        var board = [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 2],
            [0, 0, 0, 0, 2, 0],
            [0, 0, 0, 2, 1, 0],
            [0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        expect(boardService.checkForWinner(board)).toBeTruthy();
    });
});
//# sourceMappingURL=board.service.spec.js.map