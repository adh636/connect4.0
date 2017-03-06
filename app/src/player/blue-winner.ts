import {Player} from "./player";
import {Board} from "../board/board";
import {BluePlayer} from "./blue-player";

export class BlueWinner implements Player {
    getState(): string {
        return "Blue Wins!";
    }

    dropPiece(board: Board, column: number): Player {
        return new BlueWinner();
    }

    changePlayer(): Player {
        return new BluePlayer();
    }
}