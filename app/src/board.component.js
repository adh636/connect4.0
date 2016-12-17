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
var board_service_1 = require("./board.service");
var BoardComponent = (function () {
    function BoardComponent(boardService) {
        this.boardService = boardService;
        this.numMoves = 0;
        this.changeBackground = new core_1.EventEmitter();
    }
    BoardComponent.prototype.ngOnInit = function () {
        this.board = this.boardService.getBoard();
    };
    BoardComponent.prototype.activeCell = function (cell) {
        if (cell == 1)
            return "cell active-cell-red";
        if (cell == 2)
            return "cell active-cell-blue";
        return "cell";
    };
    BoardComponent.prototype.dropPiece = function (column) {
        if (this.winner)
            return;
        for (var row = 5; row >= 0; row--) {
            if (this.cellEmpty(column, row)) {
                this.fillCell(column, row);
                this.numMoves++;
                if (this.boardService.checkForWinner(this.board)) {
                    this.winner = true;
                    return;
                }
                this.redTurn = !this.redTurn;
                this.changeBackground.emit(this.redTurn);
                return;
            }
        }
    };
    BoardComponent.prototype.cellEmpty = function (column, i) {
        return this.board[column][i] === 0;
    };
    BoardComponent.prototype.fillCell = function (column, i) {
        if (this.redTurn) {
            this.board[column][i] += 1;
        }
        else {
            this.board[column][i] += 2;
        }
    };
    BoardComponent.prototype.restart = function () {
        this.resetBoard();
        this.numMoves = 0;
        this.winner = false;
        this.redTurn = false;
        this.changeBackground.emit(this.redTurn);
    };
    BoardComponent.prototype.resetBoard = function () {
        this.boardService.clearBoard();
        this.board = this.boardService.getBoard();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BoardComponent.prototype, "changeBackground", void 0);
    BoardComponent = __decorate([
        core_1.Component({
            selector: "c4-board",
            templateUrl: "app/src/board.component.html",
            styleUrls: ["app/src/board.component.css"],
            providers: [board_service_1.BoardService]
        }), 
        __metadata('design:paramtypes', [board_service_1.BoardService])
    ], BoardComponent);
    return BoardComponent;
}());
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map