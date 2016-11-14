import {Component, Input} from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app/app.component.html",
    styleUrls: ["app/app.component.css"]
})

export class AppComponent {
    @Input() redTurn: boolean;

    playerBackground: string = "#9FD2E6";
    redBackground: string = "#FFDBD6";
    blueBackground: string = "#9FD2E6";

    changeBackground(redTurn: boolean): void {
        if (redTurn) this.playerBackground = this.redBackground;
        else this.playerBackground = this.blueBackground;
    }
}