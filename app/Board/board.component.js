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
var BoardComponent = (function () {
    function BoardComponent() {
        this.score = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        this.numMoves = 0;
        this.columns = [, , , , , , ,];
        this.changeBackground = new core_1.EventEmitter();
    }
    BoardComponent.prototype.dropPiece = function (column) {
        if (!this.winner) {
            for (var i = 5; i >= 0; i--) {
                if (this.score[column][i] === 0) {
                    if (this.redTurn) {
                        this.score[column][i] += 1;
                    }
                    else {
                        this.score[column][i] += 2;
                    }
                    this.numMoves++;
                    this.redTurn = !this.redTurn;
                    if (this.numMoves === 42) {
                        this.winner = true;
                    }
                    if (this.checkForWinner()) {
                        this.winner = true;
                    }
                    else {
                        this.changeBackground.emit(this.redTurn);
                    }
                    return;
                }
            }
        }
    };
    BoardComponent.prototype.checkForWinner = function () {
        if (this.checkForVerticalWinner() || this.checkForHorizontalWinner() || this.checkForDiagonalWinner()) {
            return true;
        }
        return false;
    };
    BoardComponent.prototype.checkForVerticalWinner = function () {
        var blueCount = 0;
        var redCount = 0;
        for (var column = 0; column <= 6; column++) {
            for (var row = 0; row <= 5; row++) {
                if (this.score[column][row] === 1) {
                    redCount++;
                    blueCount = 0;
                    if (redCount === 4) {
                        return true;
                    }
                }
                else if (this.score[column][row] === 2) {
                    blueCount++;
                    redCount = 0;
                    if (blueCount === 4) {
                        return true;
                    }
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
    BoardComponent.prototype.checkForHorizontalWinner = function () {
        var blueCount = 0;
        var redCount = 0;
        for (var row = 0; row <= 5; row++) {
            for (var column = 0; column <= 6; column++) {
                if (this.score[column][row] === 1) {
                    redCount++;
                    blueCount = 0;
                    if (redCount === 4) {
                        return true;
                    }
                }
                else if (this.score[column][row] === 2) {
                    blueCount++;
                    redCount = 0;
                    if (blueCount === 4) {
                        return true;
                    }
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
    BoardComponent.prototype.checkForDiagonalWinner = function () {
        if (this.checkForUpwardDiagonalWinner() || this.checkForDownwardDiagonalWinner()) {
            return true;
        }
        return false;
    };
    BoardComponent.prototype.checkForUpwardDiagonalWinner = function () {
        var redCount = 0;
        var blueCount = 0;
        for (var column = 0; column <= 6; column++) {
            for (var row = 5; row >= 0; row--) {
                for (var diagonal = 0; diagonal < 5; diagonal++) {
                    if (column + diagonal <= 6 && row - diagonal >= 0) {
                        if (this.score[column + diagonal][row - diagonal] === 1) {
                            redCount++;
                            blueCount = 0;
                            if (redCount === 4) {
                                return true;
                            }
                        }
                        else if (this.score[column + diagonal][row - diagonal] === 2) {
                            blueCount++;
                            redCount = 0;
                            if (blueCount === 4) {
                                return true;
                            }
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
    BoardComponent.prototype.checkForDownwardDiagonalWinner = function () {
        var redCount = 0;
        var blueCount = 0;
        for (var column = 0; column <= 6; column++) {
            for (var row = 0; row <= 5; row++) {
                for (var diagonal = 0; diagonal < 5; diagonal++) {
                    if (column + diagonal <= 6 && row + diagonal <= 5) {
                        if (this.score[column + diagonal][row + diagonal] === 1) {
                            redCount++;
                            blueCount = 0;
                            if (redCount === 4) {
                                return true;
                            }
                        }
                        else if (this.score[column + diagonal][row + diagonal] === 2) {
                            blueCount++;
                            redCount = 0;
                            if (blueCount === 4) {
                                return true;
                            }
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
    BoardComponent.prototype.restart = function () {
        this.score = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];
        this.numMoves = 0;
        this.winner = false;
        this.redTurn = false;
        this.changeBackground.emit(this.redTurn);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BoardComponent.prototype, "changeBackground", void 0);
    BoardComponent = __decorate([
        core_1.Component({
            selector: "c4-board",
            templateUrl: "app/board/board.component.html",
            styleUrls: ["app/board/board.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], BoardComponent);
    return BoardComponent;
}());
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map