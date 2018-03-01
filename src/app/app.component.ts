import { INCREMENT } from './actions';
import { IAppState, rootReducer } from './store';
import { NgRedux } from 'ng2-redux';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter = 0;

  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.subscribe(() => {
      const currentState = ngRedux.getState();
      this.counter = currentState.counter;
      console.log(currentState);
    });
  }

  /**
    we are modifying the state here however
    when using the REDUX architecture we don't modify the state here...
  **/
  increment() {
    // this.counter = +1 ;
    this.ngRedux.dispatch({ type: INCREMENT});
  }

  reset() {
    this.ngRedux.dispatch({ type: 'RESET'});
  }
}
