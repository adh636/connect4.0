import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app/app.component.html",
    styleUrls: ["app/app.component.css"]
})

export class AppComponent {
    playerBackground: string = "#E1DEFF";
    RED_BACKGROUND: string = "#FFE7EE";
    BLUE_BACKGROUND: string = "#E1DEFF";

    changeBackground(gameState: string): void {
        if (gameState.includes("Red")) this.playerBackground = this.RED_BACKGROUND;
        else this.playerBackground = this.BLUE_BACKGROUND;
    }
}