import {PlayerImpl} from "./player";
import {BlueWinner} from "./blue-winner";
import {RedPlayer} from "./red-player";

export class BluePlayer extends PlayerImpl {
    PLAYER_ID = 2;
    stateDescription = "Blue Turn";
    currentWinner = new BlueWinner();

    protected otherPlayer() {
        return new RedPlayer();
    }

    changePlayer() {
        return new RedPlayer();
    }
 }