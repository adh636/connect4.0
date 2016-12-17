import {Player} from "./";
import {Board} from "../board/board";
import {BluePlayer} from "./blue-player";
import {RedWinner} from "./red-winner";

export class RedPlayer implements Player {
    getState(): string {
        return "Red Turn";
    }

    dropPiece(board: Board, column: number): Player {
        if (board.updateBoard(column, 1)) {
            return this.updatePlayer(board);
        }
        return new RedPlayer();
    }

    updatePlayer(board: Board): Player {
        let winnerFound = board.checkForWinner(1);
        if (winnerFound) return new RedWinner();
        return new BluePlayer();
    }
}