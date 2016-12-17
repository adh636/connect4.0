"use strict";
var board_component_1 = require("../src/board.component");
describe("connect 4", function () {
    var connect4;
    beforeEach(function () {
        connect4 = new board_component_1.BoardComponent();
        connect4.restart();
    });
    it("should add blue piece to board on first drop", function () {
        connect4.dropPiece(0);
        var expectedBoard = [
            [0, 0, 0, 0, 0, 2],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        expect(connect4.board.boardState).toEqual(expectedBoard);
    });
    it("should add red piece to board on second drop", function () {
        connect4.dropPiece(0);
        connect4.dropPiece(0);
        var expectedBoard = [
            [0, 0, 0, 0, 1, 2],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        expect(connect4.board.boardState).toEqual(expectedBoard);
    });
    it("should do nothing when trying to drop a piece in a full column", function () {
        connect4.dropPiece(0);
        connect4.dropPiece(0);
        connect4.dropPiece(0);
        connect4.dropPiece(0);
        connect4.dropPiece(0);
        connect4.dropPiece(0);
        connect4.dropPiece(0);
        var expectedBoard = [
            [1, 2, 1, 2, 1, 2],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        expect(connect4.board.boardState).toEqual(expectedBoard);
    });
});
//# sourceMappingURL=board.component.spec.js.map