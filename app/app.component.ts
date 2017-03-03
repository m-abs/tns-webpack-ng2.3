import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter = 0;

    private states = [
      {
        show1: true,
        show2: true,
      },
      {
        show1: false,
        show2: true,
      },
      {
        show1: true,
        show2: true,
      },
      {
        show1: true,
        show2: false,
      },
      {
        show1: true,
        show2: true,
      },
      {
        show1: false,
        show2: false,
      },
    ];

    public get show1() {
      const idx = this.counter % this.states.length;
      return this.states[idx].show1;
    }

    public get show2() {
      const idx = this.counter % this.states.length;
      return this.states[idx].show2;
    }

    public get message(): string {
        if (this.show1 && this.show2) {
            return 'Show both ActionItems';
        } else if (this.show1) {
            return 'Show only "1"';
        } else if (this.show2) {
            return 'Show only "2"';
        } else {
            return `Show none\nNext should show in proper order`;
        }
    }

    public onTap() {
        this.counter++;
    }
}
