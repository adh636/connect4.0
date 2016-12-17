import {Component, Output, EventEmitter} from "@angular/core";

import {Player} from "./player";
import {Board} from "./board";
import {BluePlayer} from "./blue-player";

@Component({
    selector: "c4-board",
    templateUrl: "app/src/board.component.html",
    styleUrls: ["app/src/board.component.css"]
})

export class BoardComponent {
    @Output() changeBackground: EventEmitter<any>;

    currentPlayer: Player;
    board: Board;

    constructor() {
        this.changeBackground = new EventEmitter<any>();
        this.currentPlayer = new BluePlayer();
        this.board = new Board();
    }

    dropPiece(column: number): void {
        this.currentPlayer = this.currentPlayer.dropPiece(this.board, column);
        this.changeBackground.emit(this.currentPlayer.getState());
    }

    restart(): void {
        this.board = new Board();
        this.currentPlayer = new BluePlayer();
        this.changeBackground.emit(this.currentPlayer.getState());
    }

    playerTurn(): string {
        if (this.currentPlayer.getState().includes("Blue")) return "blue-turn";
        return "red-turn";
    }

    boardStyle(): string {
        if (this.currentPlayer.getState().includes("Red")) return "red-border";
    }

    isActiveColumn(column: number): boolean {
        return this.board.boardState[column][0] == 0
            && !this.currentPlayer.getState().includes('Wins')
    }

    playerColor(): string {
        if (this.currentPlayer.getState().includes("Blue")) return "Blue";
        return "Red";
    }

    isWinner(): boolean {
        return this.currentPlayer.getState().includes("Wins");
    }

    activeCell(cell: number): string {
        if (cell === 1) return "cell active-cell-red";
        if (cell === 2) return "cell active-cell-blue";
        return "cell";
    }
}
