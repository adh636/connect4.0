"use strict";
var board_component_1 = require("../Board/board.component");
describe("connect 4", function () {
    it("should detect 4 in a row vertically", function () {
        var connect4 = new board_component_1.BoardComponent();
        connect4.score = [
            [0, 0, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        connect4.checkForWinner();
        expect(connect4.winner).toBeTruthy();
    });
});
//# sourceMappingURL=board.component.spec.js.map