import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take';

import { CounterDecrease } from './store';

@Component({
  selector: "my-app",
  templateUrl: "app.component.html",
})
export class AppComponent {
  public counter$ = this.store.select<number>('counter');

  public get counter() {
    let res: number;

    this.counter$.take(1).subscribe((c) => res = c);

    return res;
  }

  public get message(): string {
    if (this.counter > 0) {
      return this.counter + " taps left";
    } else {
      return "Hoorraaay! \nYou are ready to start building!";
    }
  }

  constructor(private store: Store<any>) {
  }

  public onTap() {
    this.store.dispatch(new CounterDecrease());
  }
}
