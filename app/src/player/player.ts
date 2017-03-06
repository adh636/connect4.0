import {Board} from "../board/board";

export interface Player {
    dropPiece(board: Board, column: number): Player;
    getState(): string;
    changePlayer(): Player;
}

export abstract class PlayerImpl {
    protected PLAYER_ID: number;
    protected stateDescription: string;
    protected currentWinner: Player;
    protected abstract otherPlayer(): Player;

    getState(): string {
        return this.stateDescription;
    }

    dropPiece(board: Board, column: number): Player {
        if (board.updateBoard(column, this.PLAYER_ID)) {
            return this.updatePlayer(board);
        }
        return this;
    }

    updatePlayer(board: Board): Player {
        let winnerFound = board.checkForWinner(this.PLAYER_ID);
        if (winnerFound) return this.currentWinner;
        return this.otherPlayer();
    }

    changePlayer(): Player {
        return this.otherPlayer();
    }


}