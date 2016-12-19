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
        for (let column = 0; column <= 6; column++) {
            let verticalSection: number[] = this.createVerticalSection(column);
            if (this.hasFourInARow(verticalSection, player)) return true;
        }
        return false;
    }

    private createVerticalSection(column: number): number[] {
        let section: number[] = [];
        for (let row = 0; row <= 5; row++) {
            section.push(this.boardState[column][row]);
        }
        return section;
    }

    checkForHorizontalWinner(player): boolean {
        for (let row = 0; row <= 5; row++) {
            let horizontalSection: number[] = this.createHorizontalSection(row);
            if (this.hasFourInARow(horizontalSection, player)) return true;
        }
        return false;
    }

    private createHorizontalSection(row: number): number[] {
        let section: number[] = [];
        for (let column = 0; column <= 6; column++) {
            section.push(this.boardState[column][row]);
        }
        return section;
    }

    checkForDiagonalWinner(player): boolean {
        return this.checkForDownwardDiagonalWinner(player) || this.checkForUpwardDiagonalWinner(player);
    }

    checkForDownwardDiagonalWinner(player): boolean {
        for (let column = 0; column <= 6; column++) {
            for (let row = 5; row >= 0; row--) {
                let downwardDiagonalSection: number[] = this.createDownwardDiagonalSection(column, row)
                if (this.hasFourInARow(downwardDiagonalSection, player)) return true;
            }
        }
        return false;
    }

    private createDownwardDiagonalSection(column: number, row: number): number[] {
        let section: number[] = [];
        for (let offset = 0; offset < 5; offset++) {
            if (column + offset <= 6 && row - offset >= 0) {
                section.push(this.boardState[column + offset][row - offset]);
            }
        }
        return section;
    }

    checkForUpwardDiagonalWinner(player): boolean {
        for (let column = 0; column <= 6; column++) {
            for (let row = 0; row <= 5; row++) {
                let upwardDiagonalSection: number[] = this.createUpwardDiagonalSection(column, row)
                if (this.hasFourInARow(upwardDiagonalSection, player)) return true;
            }
        }
        return false;
    }

    private createUpwardDiagonalSection(column: number, row: number): number[] {
        let section: number[] = [];
        for (let offset = 0; offset < 5; offset++) {
            if (column + offset <= 6 && row + offset <= 5) {
                section.push(this.boardState[column + offset][row + offset]);
            }
        }
        return section;
    }

    private hasFourInARow(section: number[], player: number): boolean {
        let count = 0;
        return section.some((cell: number) => {
            if (cell === player) {
                count++;
                return count === 4;
            }
            count = 0;
        });
    }
}