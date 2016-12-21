import {Board} from "../board/board";
import {RedPlayer} from "./red-player";
import {BluePlayer} from "./blue-player";

export interface Player {
    dropPiece(board: Board, column: number): Player;
    getState(): string;
}

export abstract class PlayerImpl {
    protected PLAYER_ID: number;
    protected stateDescription: string;
    protected currentWinner: Player;

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

    protected abstract otherPlayer(): Player;
}