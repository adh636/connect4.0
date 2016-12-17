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
var board_1 = require("./board");
var blue_player_1 = require("./blue-player");
var BoardComponent = (function () {
    function BoardComponent() {
        this.changeBackground = new core_1.EventEmitter();
        this.currentPlayer = new blue_player_1.BluePlayer();
        this.board = new board_1.Board();
    }
    BoardComponent.prototype.dropPiece = function (column) {
        this.currentPlayer = this.currentPlayer.dropPiece(this.board, column);
        this.changeBackground.emit(this.currentPlayer.getState());
    };
    BoardComponent.prototype.restart = function () {
        this.board = new board_1.Board();
        this.currentPlayer = new blue_player_1.BluePlayer();
        this.changeBackground.emit(this.currentPlayer.getState());
    };
    BoardComponent.prototype.playerTurn = function () {
        if (this.currentPlayer.getState().includes("Blue"))
            return "blue-turn";
        return "red-turn";
    };
    BoardComponent.prototype.boardStyle = function () {
        if (this.currentPlayer.getState().includes("Red"))
            return "red-border";
    };
    BoardComponent.prototype.isActiveColumn = function (column) {
        return this.board.boardState[column][0] == 0
            && !this.currentPlayer.getState().includes('Wins');
    };
    BoardComponent.prototype.playerColor = function () {
        if (this.currentPlayer.getState().includes("Blue"))
            return "Blue";
        return "Red";
    };
    BoardComponent.prototype.isWinner = function () {
        return this.currentPlayer.getState().includes("Wins");
    };
    BoardComponent.prototype.activeCell = function (cell) {
        if (cell === 1)
            return "cell active-cell-red";
        if (cell === 2)
            return "cell active-cell-blue";
        return "cell";
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BoardComponent.prototype, "changeBackground", void 0);
    BoardComponent = __decorate([
        core_1.Component({
            selector: "c4-board",
            templateUrl: "app/src/board.component.html",
            styleUrls: ["app/src/board.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], BoardComponent);
    return BoardComponent;
}());
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map