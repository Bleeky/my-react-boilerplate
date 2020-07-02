import { of } from 'rxjs';
import { ofType } from 'redux-observable';
import { mergeMap, takeUntil } from 'rxjs/operators';
import { setNavbarFulfilled } from '../actions';

const setNavbarEpic = action$ =>
  action$.pipe(
    ofType('SET_NAVBAR_REQUEST'),
    mergeMap(action => of(setNavbarFulfilled(action.payload)).pipe(takeUntil(action$.ofType('SET_NAVBAR_REQUEST')))),
  );

export default setNavbarEpic;
