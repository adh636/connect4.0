import { Component, Output, EventEmitter } from "@angular/core";

import { BoardService } from "./board.service";

@Component({
    selector: "c4-board",
    templateUrl: "app/src/board.component.html",
    styleUrls: ["app/src/board.component.css"],
    providers: [BoardService]
})

export class BoardComponent {
    @Output() changeBackground: EventEmitter<any>;

    board: number[][];
    redTurn: boolean;
    winner: boolean;
    numMoves: number = 0;

    constructor(private boardService: BoardService) {
        this.changeBackground = new EventEmitter<any>();
    }

    ngOnInit(): void {
        this.board = this.boardService.getBoard();
    }

    static activeCell(cell: any): string {
        if (cell == 1)
            return "cell active-cell-red";
        if (cell == 2)
            return "cell active-cell-blue";
        return "cell";
    }

    dropPiece(column: number): void {
        if (this.winner) return;

        for (let row: number = 5; row >= 0; row--) {
            if (this.cellEmpty(column, row)) {
                this.fillCell(column, row);
                this.numMoves++;
                if(this.boardService.checkForWinner(this.board)) {
                    this.winner = true;
                    return;
                }
                this.redTurn = !this.redTurn;
                this.changeBackground.emit(this.redTurn);
                return;
            }
        }
    }

    private cellEmpty(column: number, i: number) {
        return this.board[column][i] === 0;
    }

    private fillCell(column: number, i: number) {
        if (this.redTurn) {
            this.board[column][i] += 1;
        }
        else {
            this.board[column][i] += 2;
        }
    }

    restart(): void {
        this.resetBoard();
        this.numMoves = 0;
        this.winner = false;
        this.redTurn = false;
        this.changeBackground.emit(this.redTurn);
    }

    private resetBoard(): void {
        this.boardService.clearBoard();
        this.board = this.boardService.getBoard();
    }
}
