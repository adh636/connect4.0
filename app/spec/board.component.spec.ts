import {BoardComponent} from "../Board/board.component";
describe("connect 4", () => {
    it("should detect 4 in a row vertically", () => {
        let connect4: BoardComponent = new BoardComponent();
        connect4.score = [
            [0,0,1,1,1,1],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
        ];
        connect4.checkForWinner();
        expect(connect4.winner).toBeTruthy()
    });
});