import { of, race } from "rxjs";
import { ofType } from "redux-observable";
import { mergeMap, flatMap, take, catchError } from "rxjs/operators";
import {
  loginRequest,
  loginFulfilled,
  loginRejected,
  loginCancelled,
} from "../actions";

const loginEpic = (action$) =>
  action$.pipe(
    ofType("LOGIN_REQUEST"),
    mergeMap((action) =>
      race(
        loginRequest(action.payload).pipe(
          flatMap((response) => {
            localStorage.setItem("accessToken", response.response.access_token);
            localStorage.setItem(
              "refreshToken",
              response.response.refresh_token
            );
            return of(
              loginFulfilled(response.response, {
                ...action.extras,
                toastType: "success",
              })
            );
          }),
          catchError((error) =>
            of(loginRejected(error, { ...action.extras, toastType: "error" }))
          )
        ),
        action$.pipe(
          ofType("LOGIN_REQUEST"),
          flatMap(() => of(loginCancelled(action.payload, action.extras))),
          take(1)
        )
      )
    )
  );

export default loginEpic;
