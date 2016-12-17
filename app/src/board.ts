export class Board {
    boardState: number[][];

    constructor() {
        this.boardState = [
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
        ];
    }

    updateBoard(column: number, player: number): boolean {
        for (let row: number = 5; row >= 0; row--) {
            if (this.cellEmpty(column, row)) {
                this.fillCell(column, row, player);
                return true;
            }
        }
        return false;
    }

    private fillCell(column: number, row: number, player: number) {
        this.boardState[column][row] = player;
    }

    private cellEmpty(column: number, i: number) {
        return this.boardState[column][i] === 0;
    }

    checkForWinner(player: number): boolean {
        return this.checkForVerticalWinner(player)
            || this.checkForHorizontalWinner(player)
            || this.checkForDiagonalWinner(player);
    }

    checkForVerticalWinner(player: number): boolean {
        return this.boardState.some((column: number[]) => {
            let count = 0;
            return column.some((cell: number) => {
                if (cell === player) {
                    count++;
                    return count === 4;
                }
                count = 0;
            });
        });
    }

    checkForHorizontalWinner(player): boolean {
        let count: number = 0;
        for (let row = 0; row <= 5; row++) {
            for (let column = 0; column <= 6; column++) {
                if (this.boardState[column][row] === player) {
                    count++;
                    if (count === 4) return true;
                }
                else {
                    count = 0
                }
            }
            count = 0;
        }
        return false;
    }

    checkForDiagonalWinner(player): boolean {
        return this.checkForDownwardDiagonalWinner(player) || this.checkForUpwardDiagonalWinner(player);
    }

    checkForDownwardDiagonalWinner(player): boolean {
        let count = 0;
        for (let column = 0; column <= 6; column++) {
            for (let row = 5; row >= 0; row--) {
                for (let diagonal = 0; diagonal < 5; diagonal++) {
                    if (column + diagonal <= 6 && row - diagonal >= 0) {
                        if (this.boardState[column+diagonal][row-diagonal] === player) {
                            count++;
                            if (count === 4) return true;
                        }
                        else {
                            count = 0;
                        }
                    }
                }
                count = 0;
            }
        }
        return false;
    }

    checkForUpwardDiagonalWinner(player): boolean {
        let count = 0;
        for (let column = 0; column <= 6; column++) {
            for (let row = 0; row <= 5; row++) {
                for (let diagonal = 0; diagonal < 5; diagonal++) {
                    if (column + diagonal <= 6 && row + diagonal <= 5) {
                        if (this.boardState[column+diagonal][row+diagonal] === player) {
                            count++;
                            if (count === 4) return true;
                        }
                        else {
                            count = 0;
                        }
                    }
                }
                count = 0;
            }
        }
        return false;
    }
}