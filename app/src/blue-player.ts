import {Player} from "./player";
import {Board} from "./board";
import {RedPlayer} from "./red-player";
import {BlueWinner} from "./blue-winner";

export class BluePlayer implements Player {
    getState(): string {
        return "Blue Turn";
    }

    dropPiece(board: Board, column: number): Player {
        if (board.updateBoard(column, 2)) {
            return this.updatePlayer(board);
        }
        return new BluePlayer();
    }

    updatePlayer(board: Board): Player {
        let winnerFound = board.checkForWinner(2);
        if (winnerFound) return new BlueWinner();
        return new RedPlayer();
    }
 }