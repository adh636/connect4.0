import {PlayerImpl} from "./player";
import {RedWinner} from "./red-winner";
import {BluePlayer} from "./blue-player";

export class RedPlayer extends PlayerImpl {
    PLAYER_ID = 1;
    stateDescription = "Red Turn";
    currentWinner = new RedWinner();

    protected otherPlayer() {
        return new BluePlayer();
    }

    changePlayer() {
        return new BluePlayer();
    }
}