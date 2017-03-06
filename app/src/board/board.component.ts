import {Component, Output, EventEmitter} from "@angular/core";
import * as _ from 'lodash';

import {Player} from "../player/player";
import {Board} from "./board";
import {BluePlayer} from "../player/blue-player";

@Component({
    selector: "c4-board",
    templateUrl: "app/src/board/board.component.html",
    styleUrls: ["app/src/board/board.component.css"]
})

export class BoardComponent {
    @Output() changeBackground: EventEmitter<any>;
    currentPlayer: Player;
    board: Board[];
    turnNumber: number;
    instructorMode: boolean;

    constructor() {
        this.changeBackground = new EventEmitter<any>();
        this.currentPlayer = new BluePlayer();
        this.instructorMode = false;
        this.turnNumber = 0;
        this.board = [new Board()];
    }

    dropPiece(column: number): void {
      if (this.columnFull(column) || this.currentPlayer.getState().includes("Wins")) return;
      this.board[this.turnNumber + 1] = _.cloneDeep(this.board[this.turnNumber]);
      this.currentPlayer = this.currentPlayer.dropPiece(this.board[this.turnNumber + 1], column);
      this.turnNumber++;
      this.board.splice(this.turnNumber + 1);
      this.changeBackground.emit(this.currentPlayer.getState());
    }

    columnFull(column: number): boolean {
      for (let row: number = 5; row >= 0; row--) {
        if (this.board[this.turnNumber].cellEmpty(column, row)) {
          return false;
        }
      }
      return true;
    }

    undoMove(): void {
      if (this.turnNumber > 0) {
        this.turnNumber--;
        this.currentPlayer = this.currentPlayer.changePlayer();
      }
      this.changeBackground.emit(this.currentPlayer.getState());
    }

    redoMove(): void {
      if (this.board[this.turnNumber + 1]) {
        this.turnNumber++;
        this.currentPlayer = this.currentPlayer.updatePlayer(this.board[this.turnNumber]);
      }
      this.changeBackground.emit(this.currentPlayer.getState());
    }

    restart(): void {
      this.turnNumber = 0;
        this.board = [new Board()];
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
        return this.board[this.turnNumber].boardState[column][0] == 0
            && !this.currentPlayer.getState().includes('Wins')
    }

    playerColor(): string {
        if (this.currentPlayer.getState().includes("Blue")) return "Blue";
        return "Red";
    }

    gameOver(): boolean {
        return this.currentPlayer.getState().includes("Wins");
    }

    activeCell(cell: number): string {
        if (cell === 1) return "cell active-cell-red";
        if (cell === 2) return "cell active-cell-blue";
        return "cell";
    }

    toggleInstructorMode(): void {
      this.instructorMode = !this.instructorMode;
    }
}
