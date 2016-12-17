import {Player} from "./";
import {Board} from "../board/board";

export class RedWinner implements Player {
    getState(): string {
        return "Red Wins!";
    }

    dropPiece(board: Board, column: number): Player {
        return new RedWinner();
    }
}