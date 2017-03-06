import {BoardComponent} from "../src/board/board.component";

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
        expect(connect4.board[connect4.turnNumber].boardState).toEqual(expectedBoard);
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
        expect(connect4.board[connect4.turnNumber].boardState).toEqual(expectedBoard);
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
        expect(connect4.board[connect4.turnNumber].boardState).toEqual(expectedBoard);
    });

    describe("instructor mode", () => {
        it("should store list of moves", () => {
            connect4.dropPiece(0);
            connect4.dropPiece(0);
            let expectedMoveList = ["", "Blue plays in column 1", "Red plays in column 1"];
            expect(connect4.board[connect4.turnNumber].moveList).toEqual(expectedMoveList);
        });
        it("should store all active board states", () => {
            connect4.dropPiece(0);
            connect4.dropPiece(0);
            let startingBoardState = [
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
            ];
            let turnOneBoardState = [
                [0,0,0,0,0,2],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
            ];
            let turnTwoBoardState = [
                [0,0,0,0,1,2],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
            ];
            expect(connect4.board[0].boardState).toEqual(startingBoardState);
            expect(connect4.board[1].boardState).toEqual(turnOneBoardState);
            expect(connect4.board[2].boardState).toEqual(turnTwoBoardState);
        });
        it("should be able to undo move", () => {
            connect4.dropPiece(0);
            connect4.dropPiece(0);
            connect4.undoMove();
            let expectedBoard = [
                [0,0,0,0,0,2],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
            ];
            expect(connect4.board[connect4.turnNumber].boardState).toEqual(expectedBoard);
        });
        it("should be able to redo move", () => {
            connect4.dropPiece(0);
            connect4.dropPiece(0);
            connect4.undoMove();
            connect4.redoMove();
            let expectedBoard = [
                [0,0,0,0,1,2],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
            ];
            expect(connect4.board[connect4.turnNumber].boardState).toEqual(expectedBoard);
        });
        it("should remove stored future moves when dropping a piece after undo", () => {
            connect4.dropPiece(0);
            connect4.dropPiece(0);
            connect4.undoMove();
            connect4.undoMove();
            connect4.dropPiece(0);
            expect(connect4.board[2]).toBeUndefined();
        });
    });
});