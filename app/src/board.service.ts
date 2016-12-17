import { Injectable } from "@angular/core"

@Injectable()
export class BoardService {
    board: number[][] = [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
    ];

    getBoard(): number[][] {
        return this.board;
    }

    clearBoard(): void {
        this.board = [
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
        ];
    }

    checkForWinner(board: number[][]): boolean {
        return this.checkForVerticalWinner(board)
            || this.checkForHorizontalWinner(board)
            || this.checkForDiagonalWinner(board);
    }

    checkForVerticalWinner(board: number[][]): boolean {
        return board.some((column: number[]) => {
            let blueCount = 0;
            let redCount = 0;
            return column.some((cell: number) => {
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
    }

    checkForHorizontalWinner(board: number[][]): boolean {
        let blueCount = 0;
        let redCount = 0;
        for (let row = 0; row <= 5; row++) {
            for (let column = 0; column <= 6; column++) {
                if (board[column][row] === 1) {
                    redCount++;
                    blueCount = 0;
                    if (redCount === 4) return true;
                }
                else if (board[column][row] === 2) {
                    blueCount++;
                    redCount = 0;
                    if (blueCount === 4) return true;
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

    checkForDiagonalWinner(board: number[][]): boolean {
        return this.checkForDownwardDiagonalWinner(board) || this.checkForUpwardDiagonalWinner(board);
    }

    checkForDownwardDiagonalWinner(board: number[][]): boolean {
        let redCount = 0;
        let blueCount = 0;
        for (let column = 0; column <= 6; column++) {
            for (let row = 5; row >= 0; row--) {
                for (let diagonal = 0; diagonal < 5; diagonal++) {
                    if (column + diagonal <= 6 && row - diagonal >= 0) {
                        if (board[column+diagonal][row-diagonal] === 1) {
                            redCount++;
                            blueCount = 0;
                            if (redCount === 4) return true;
                        }
                        else if (board[column+diagonal][row-diagonal] === 2) {
                            blueCount++;
                            redCount = 0;
                            if (blueCount === 4) return true;
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

    checkForUpwardDiagonalWinner(board: number[][]): boolean {
        let redCount = 0;
        let blueCount = 0;
        for (let column = 0; column <= 6; column++) {
            for (let row = 0; row <= 5; row++) {
                for (let diagonal = 0; diagonal < 5; diagonal++) {
                    if (column + diagonal <= 6 && row + diagonal <= 5) {
                        if (board[column+diagonal][row+diagonal] === 1) {
                            redCount++;
                            blueCount = 0;
                            if (redCount === 4) return true;
                        }
                        else if (board[column+diagonal][row+diagonal] === 2) {
                            blueCount++;
                            redCount = 0;
                            if (blueCount === 4) return true;
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
}