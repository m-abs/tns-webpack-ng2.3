import { Component, animate, trigger, state, style, transition } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "app.component.html",
  animations: [
    trigger('statePercent', [
      state('in', style({
        transform: 'translateY(0)',
      })),
      state('out', style({
        transform: 'translateY(100%)',
      })),
      state('void', style({
        transform: 'translateY(100%)',
      })),
      transition('in => out', animate('2000ms ease-out')),
      transition('* => in', animate('2000ms ease-out')),
    ]),
    trigger('stateAbsolute', [
      state('in', style({
        transform: 'translateY(0)',
      })),
      state('out', style({
        transform: 'translateY(200)',
      })),
      state('void', style({
        transform: 'translateY(200)',
      })),
      transition('in => out', animate('2000ms ease-out')),
      transition('* => in', animate('2000ms ease-out')),
    ]),
  ],
})
export class AppComponent {
  public animateState: string = 'in';

  public doAnimate() {
    if (this.animateState === 'in') {
      this.animateState = 'out';
    } else {
      this.animateState = 'in';
    }
  }
}
