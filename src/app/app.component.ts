import { INCREMENT } from './actions';
import { IAppState, rootReducer } from './store';
import { NgRedux, select } from 'ng2-redux';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @select() counter;

  constructor(private ngRedux: NgRedux<IAppState>) {
    // ngRedux.subscribe(() => {
    //   const currentState = ngRedux.getState();
    //   this.counter$ = currentState.counter;
    // });

    /**
      if we use the subscribe method then we have to unsubscribe that by using ngDestroy life-cycle hook
      else we'll face memory leak issue.
      so, we are using select decorator to make it observable and then async pipe in our template..
    * */
  }

  /**
    we were modifying the state here however
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
