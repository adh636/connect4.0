import {BoardService} from "../src/board.service";

describe("connect 4", () => {
    let boardService: BoardService;
    beforeEach(() => {
        boardService = new BoardService();
    });
    it("should detect 4 in a row vertically", () => {
        let board = [
            [0,0,1,1,1,1],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
        ];
        expect(boardService.checkForVerticalWinner(board)).toBeTruthy();
    });
    it("should detect 4 in a row horizontally", () => {
        let board = [
            [0,0,1,0,0,0],
            [0,0,1,0,0,0],
            [0,0,1,0,0,0],
            [0,0,1,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
        ];
        expect(boardService.checkForHorizontalWinner(board)).toBeTruthy();
    });
    it("should detect 4 in a row downward diagonally", () => {
        let board = [
            [0,0,0,0,0,0],
            [0,0,0,1,0,0],
            [0,0,1,0,0,0],
            [0,1,0,0,0,0],
            [1,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
        ];
        expect(boardService.checkForDownwardDiagonalWinner(board)).toBeTruthy();
    });
    it("should detect 4 in a row upward diagonally", () => {
        let board = [
            [0,0,0,0,0,0],
            [0,1,0,0,0,0],
            [0,0,1,0,0,0],
            [0,0,0,1,0,0],
            [0,0,0,0,1,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
        ];
        expect(boardService.checkForUpwardDiagonalWinner(board)).toBeTruthy();
    });
    it("should detect 4 in a row anywhere on board", () => {
        let board = [
            [0,0,0,0,0,0],
            [0,1,0,0,0,0],
            [0,0,1,0,0,2],
            [0,0,0,0,2,0],
            [0,0,0,2,1,0],
            [0,0,2,0,0,0],
            [0,0,0,0,0,0],
        ];
        expect(boardService.checkForWinner(board)).toBeTruthy();
    });
});