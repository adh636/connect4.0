import {Player} from "./player";
import {Board} from "../board/board";
import {BluePlayer} from "./blue-player";
import {RedPlayer} from "./red-player";

export class RedWinner implements Player {
    getState(): string {
        return "Red Wins!";
    }

    dropPiece(board: Board, column: number): Player {
        return new RedWinner();
    }

    changePlayer(): Player {
        return new RedPlayer();
    }
}