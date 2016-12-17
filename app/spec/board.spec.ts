import {Board} from "../src/board/board";

describe("connect 4", () => {
    let board: Board;
    beforeEach(() => {
        board = new Board();
    });
    it("should detect 4 in a row vertically", () => {
        board.boardState = [
            [0,0,1,1,1,1],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
        ];
        expect(board.checkForVerticalWinner(1)).toBeTruthy();
    });
    it("should detect 4 in a row horizontally", () => {
        board.boardState = [
            [0,0,1,0,0,0],
            [0,0,1,0,0,0],
            [0,0,1,0,0,0],
            [0,0,1,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
        ];
        expect(board.checkForHorizontalWinner(1)).toBeTruthy();
    });
    it("should detect 4 in a row downward diagonally", () => {
        board.boardState = [
            [0,0,0,0,0,0],
            [0,0,0,1,0,0],
            [0,0,1,0,0,0],
            [0,1,0,0,0,0],
            [1,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
        ];
        expect(board.checkForDownwardDiagonalWinner(1)).toBeTruthy();
    });
    it("should detect 4 in a row upward diagonally", () => {
        board.boardState = [
            [0,0,0,0,0,0],
            [0,1,0,0,0,0],
            [0,0,1,0,0,0],
            [0,0,0,1,0,0],
            [0,0,0,0,1,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
        ];
        expect(board.checkForUpwardDiagonalWinner(1)).toBeTruthy();
    });
    it("should detect 4 in a row anywhere on board", () => {
        board.boardState = [
            [0,0,0,0,0,0],
            [0,1,0,0,0,0],
            [0,0,1,0,0,2],
            [0,0,0,0,2,0],
            [0,0,0,2,1,0],
            [0,0,2,0,0,0],
            [0,0,0,0,0,0],
        ];
        expect(board.checkForWinner(2)).toBeTruthy();
    });
});