import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { counterReducer, CounterEffects } from './store';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    StoreModule.provideStore({
      counter: (counterReducer),
    }),
    EffectsModule.run(CounterEffects),
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
