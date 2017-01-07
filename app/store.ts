import { ActionReducer, Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

export const DECREMENT = 'DECREMENT';
export const INCREMENT = 'INCREMENT';
export const INIT = 'INIT';
export const RESET = 'RESET';
export const SET = 'SET';

export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case INCREMENT: {
      return state + 1;
    }
    case DECREMENT: {
      return state - 1;
    }
    case RESET: {
      return 0;
    }
    case SET: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export class CounterIncrease implements Action {
  type = INCREMENT;
  payload = null;
}

export class CounterInit implements Action {
  type = INIT;
  payload = null;
}

export class CounterSet implements Action {
  type = SET;

  constructor(public payload: number) {
  }
}

@Injectable()
export class CounterEffects {
  @Effect() init$ = this.actions$
    .ofType('INIT')
    .startWith(new CounterInit())
    .map(() => new CounterSet(16));

  constructor(private actions$: Actions) {
  }
}
