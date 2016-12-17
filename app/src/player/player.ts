import {Board} from "./board";
export interface Player {
    dropPiece(board: Board, column: number): Player;
    getState(): string;
}