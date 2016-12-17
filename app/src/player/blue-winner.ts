import {Player} from "./player";
import {Board} from "../board/board";

export class BlueWinner implements Player {
    getState(): string {
        return "Blue Wins!";
    }

    dropPiece(board: Board, column: number): Player {
        return new BlueWinner();
    }
}