import { of } from "rxjs";
import { ofType } from "redux-observable";
import { mergeMap, catchError, takeUntil, flatMap } from "rxjs/operators";
import { meRequest, meFulfilled, meRejected } from "../actions";

const meEpic = (action$) =>
  action$.pipe(
    ofType("ME_REQUEST"),
    mergeMap((action) =>
      meRequest({
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).pipe(
        flatMap((response) =>
          of(meFulfilled(response.response, action.extras))
        ),
        catchError((error) => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          return of(meRejected(error, action.extras));
        }),
        takeUntil(action$.ofType("ME_REQUEST"))
      )
    )
  );

export default meEpic;
