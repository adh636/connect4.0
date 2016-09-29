import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "c4-board",
    templateUrl: "app/board/board.component.html",
    styleUrls: ["app/board/board.component.css"]
})

export class BoardComponent {
    @Output() changeBackground: EventEmitter<any>;

    score: number[][] = [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
    ];
    redTurn: boolean;
    winner: boolean;
    numMoves: number = 0;
    columns: boolean[] = [,,,,,,,];

    constructor() {
        this.changeBackground = new EventEmitter<any>();
    }

    dropPiece(column: number): void {
        if (!this.winner) {
            for (let i: number = 5; i >= 0; i--) {
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
                    if(this.checkForWinner()) {
                        this.winner = true;
                    }
                    else {
                        this.changeBackground.emit(this.redTurn);
                    }
                    return;
                }
            }
        }
    }

    checkForWinner(): boolean {
        if (this.checkForVerticalWinner() || this.checkForHorizontalWinner() || this.checkForDiagonalWinner()) {
            return true;
        }
        return false;
    }

    checkForVerticalWinner(): boolean {
        let blueCount = 0;
        let redCount = 0;
        for (let column = 0; column <= 6; column++) {
            for (let row = 0; row <= 5; row++) {
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
    }

    checkForHorizontalWinner(): boolean {
        let blueCount = 0;
        let redCount = 0;
        for (let row = 0; row <= 5; row++) {
            for (let column = 0; column <= 6; column++) {
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
    }

    checkForDiagonalWinner(): boolean {
        if (this.checkForUpwardDiagonalWinner() || this.checkForDownwardDiagonalWinner()) {
            return true;
        }
        return false;
    }

    checkForUpwardDiagonalWinner(): boolean {
        let redCount = 0;
        let blueCount = 0;
        for (let column = 0; column <= 6; column++) {
            for (let row = 5; row >= 0; row--) {
                for (let diagonal = 0; diagonal < 5; diagonal++) {
                    if (column + diagonal <= 6 && row - diagonal >= 0) {
                        if (this.score[column+diagonal][row-diagonal] === 1) {
                            redCount++;
                            blueCount = 0;
                            if (redCount === 4) {
                                return true;
                            }
                        }
                        else if (this.score[column+diagonal][row-diagonal] === 2) {
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
    }

    checkForDownwardDiagonalWinner(): boolean {
        let redCount = 0;
        let blueCount = 0;
        for (let column = 0; column <= 6; column++) {
            for (let row = 0; row <= 5; row++) {
                for (let diagonal = 0; diagonal < 5; diagonal++) {
                    if (column + diagonal <= 6 && row + diagonal <= 5) {
                        if (this.score[column+diagonal][row+diagonal] === 1) {
                            redCount++;
                            blueCount = 0;
                            if (redCount === 4) {
                                return true;
                            }
                        }
                        else if (this.score[column+diagonal][row+diagonal] === 2) {
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
    }

    restart(): void {
        this.score = [
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
        ];
        this.numMoves = 0;
        this.winner = false;
        this.redTurn = false;
        this.changeBackground.emit(this.redTurn);
    }
}
