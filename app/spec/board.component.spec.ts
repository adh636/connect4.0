import {BoardComponent} from "../src/board.component";

describe("connect 4", () => {
    let connect4: BoardComponent;
    beforeEach(() => {
        connect4 = new BoardComponent();
        connect4.restart();
    });
    it("should add blue piece to board on first drop", () => {
        connect4.dropPiece(0);
        let expectedBoard = [
            [0,0,0,0,0,2],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
        ];
        expect(connect4.board.boardState).toEqual(expectedBoard);
    });
    it("should add red piece to board on second drop", () => {
        connect4.dropPiece(0);
        connect4.dropPiece(0);
        let expectedBoard = [
            [0,0,0,0,1,2],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
        ];
        expect(connect4.board.boardState).toEqual(expectedBoard);
    });
    it("should do nothing when trying to drop a piece in a full column", () => {
        connect4.dropPiece(0);
        connect4.dropPiece(0);
        connect4.dropPiece(0);
        connect4.dropPiece(0);
        connect4.dropPiece(0);
        connect4.dropPiece(0);
        connect4.dropPiece(0);
        let expectedBoard = [
            [1,2,1,2,1,2],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
        ];
        expect(connect4.board.boardState).toEqual(expectedBoard);
    });
});