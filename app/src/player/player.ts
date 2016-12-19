import {Board} from "../board/board";

export interface Player {
    dropPiece(board: Board, column: number): Player;
    getState(): string;
}