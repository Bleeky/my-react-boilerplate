import { of } from "rxjs";
import { ofType } from "redux-observable";
import { mergeMap, catchError, takeUntil, flatMap } from "rxjs/operators";
import { logoutRequest, logoutFulfilled, logoutRejected } from "../actions";

const logoutEpic = (action$, state$) =>
  action$.pipe(
    ofType("LOGOUT_REQUEST"),
    mergeMap((action) =>
      logoutRequest({ access_token: state$.value.auth.accessToken }).pipe(
        flatMap((response) => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          return of(logoutFulfilled(response, action.extras));
        }),
        catchError((error) => of(logoutRejected(error, action.extras))),
        takeUntil(action$.ofType("LOGOUT_REQUEST"))
      )
    )
  );

export default logoutEpic;
