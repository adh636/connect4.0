"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var BoardService = (function () {
    function BoardService() {
        this.board = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
    }
    BoardService.prototype.getBoard = function () {
        return this.board;
    };
    BoardService.prototype.clearBoard = function () {
        this.board = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
    };
    BoardService.prototype.checkForWinner = function (board) {
        return this.checkForVerticalWinner(board)
            || this.checkForHorizontalWinner(board)
            || this.checkForDiagonalWinner(board);
    };
    BoardService.prototype.checkForVerticalWinner = function (board) {
        return board.some(function (column) {
            var blueCount = 0;
            var redCount = 0;
            return column.some(function (cell) {
                if (cell === 1) {
                    redCount++;
                    blueCount = 0;
                    return redCount === 4;
                }
                if (cell === 2) {
                    blueCount++;
                    redCount = 0;
                    return blueCount === 4;
                }
                redCount = 0;
                blueCount = 0;
            });
        });
    };
    BoardService.prototype.checkForHorizontalWinner = function (board) {
        var blueCount = 0;
        var redCount = 0;
        for (var row = 0; row <= 5; row++) {
            for (var column = 0; column <= 6; column++) {
                if (board[column][row] === 1) {
                    redCount++;
                    blueCount = 0;
                    if (redCount === 4)
                        return true;
                }
                else if (board[column][row] === 2) {
                    blueCount++;
                    redCount = 0;
                    if (blueCount === 4)
                        return true;
                }
                else {
                    redCount = 0;
                    blueCount = 0;
                }
            }
            redCount = 0;
            blueCount = 0;
        }
        return false;
    };
    BoardService.prototype.checkForDiagonalWinner = function (board) {
        return this.checkForDownwardDiagonalWinner(board) || this.checkForUpwardDiagonalWinner(board);
    };
    BoardService.prototype.checkForDownwardDiagonalWinner = function (board) {
        var redCount = 0;
        var blueCount = 0;
        for (var column = 0; column <= 6; column++) {
            for (var row = 5; row >= 0; row--) {
                for (var diagonal = 0; diagonal < 5; diagonal++) {
                    if (column + diagonal <= 6 && row - diagonal >= 0) {
                        if (board[column + diagonal][row - diagonal] === 1) {
                            redCount++;
                            blueCount = 0;
                            if (redCount === 4)
                                return true;
                        }
                        else if (board[column + diagonal][row - diagonal] === 2) {
                            blueCount++;
                            redCount = 0;
                            if (blueCount === 4)
                                return true;
                        }
                        else {
                            redCount = 0;
                            blueCount = 0;
                        }
                    }
                }
                redCount = 0;
                blueCount = 0;
            }
        }
        return false;
    };
    BoardService.prototype.checkForUpwardDiagonalWinner = function (board) {
        var redCount = 0;
        var blueCount = 0;
        for (var column = 0; column <= 6; column++) {
            for (var row = 0; row <= 5; row++) {
                for (var diagonal = 0; diagonal < 5; diagonal++) {
                    if (column + diagonal <= 6 && row + diagonal <= 5) {
                        if (board[column + diagonal][row + diagonal] === 1) {
                            redCount++;
                            blueCount = 0;
                            if (redCount === 4)
                                return true;
                        }
                        else if (board[column + diagonal][row + diagonal] === 2) {
                            blueCount++;
                            redCount = 0;
                            if (blueCount === 4)
                                return true;
                        }
                        else {
                            redCount = 0;
                            blueCount = 0;
                        }
                    }
                }
                redCount = 0;
                blueCount = 0;
            }
        }
        return false;
    };
    BoardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BoardService);
    return BoardService;
}());
exports.BoardService = BoardService;
//# sourceMappingURL=board.service.js.map