import React from "react";
import { empty, of, concat } from "rxjs";
import { actions } from "react-redux-toastr";
import { useHistory } from "react-router-dom";
import { initialize } from "redux-form";
import { tap, ignoreElements, flatMap } from "rxjs/operators";

import { LoadingSpinner } from "components/Loading";
import { setNavbarEpic } from "components/Navbar/epics";
import authEpics from "modules/Auth/epics";

import { toastsSettings } from "common/constants";

const initializeFormEpic = (action$) =>
  action$.pipe(
    flatMap((action) => {
      if (
        action.type.endsWith("FULFILLED") &&
        action.extras &&
        action.extras.initializeForm
      ) {
        if (Array.isArray(action.extras.initializeForm)) {
          let formsActions = [];
          action.extras.initializeForm.forEach((form) => {
            formsActions = [
              ...formsActions,
              of(
                initialize(form.form, form.data(action.payload), {
                  keepDirty: true,
                  updateUnregisteredFields: true,
                })
              ),
            ];
          });
          return concat(...formsActions);
        }
        return of(
          initialize(
            action.extras.initializeForm.form,
            action.extras.initializeForm.data(action.payload),
            {
              keepDirty: true,
              updateUnregisteredFields: true,
            }
          )
        );
      }
      return empty();
    })
  );

const callbackSuccessEpic = (action$) =>
  action$.pipe(
    tap((action) => {
      if (
        action.type.endsWith("FULFILLED") &&
        action.extras &&
        action.extras.callbackSuccess
      ) {
        action.extras.callbackSuccess();
      }
    }),
    ignoreElements()
  );

const resNotFoundEpic = (action$) =>
  action$.pipe(
    tap((action) => {
      if (
        action.type.endsWith("REJECTED") &&
        action?.payload?.response &&
        action.payload.response.code === "res_not_found" &&
        action.payload.status === 404
      ) {
        if (
          action.extras.routeNotFound &&
          action.extras.resNotFoundRedirect !== false &&
          !useHistory().location.pathname.endsWith("not-found")
        ) {
          useHistory().push(
            action.extras.routeNotFound(useHistory().location.pathname)
          );
        } else if (action.extras.resNotFoundToast) {
          // Display a not found toast
        }
      }
    }),
    ignoreElements()
  );

const toastLoadingEpic = (action$) =>
  action$.pipe(
    flatMap((action) => {
      if (
        action.extras &&
        action.extras.toastLoading &&
        action.type.endsWith("REQUEST")
      ) {
        return of({
          type: "TOAST_LOADING_ADD",
          extras: {
            toastType: "loading",
            toastID: action.extras.uuid,
            toastLoading: action.extras.toastLoading,
          },
        });
      }
      if (
        action.extras &&
        action.extras.toastLoading &&
        (action.type.endsWith("FULFILLED") || action.type.endsWith("REJECTED"))
      ) {
        return of({
          type: "TOAST_LOADING_REMOVE",
          extras: { removeToastID: action.extras.uuid },
        });
      }
      return empty();
    })
  );

const toastsEpic = (action$) =>
  action$.pipe(
    flatMap((action) => {
      if (
        action.extras &&
        (action.extras.toastType || action.extras.removeToastID)
      ) {
        return concat(
          action.extras.removeToastID
            ? of(actions.remove(action.extras.removeToastID))
            : empty(),
          action.extras.toastType === "loading"
            ? of(
                actions.add({
                  id: action.extras.toastID ? action.extras.toastID : null,
                  type: "info",
                  message: action.extras.toastLoading.toastMessage,
                  options: {
                    timeOut: 0,
                    showCloseButton: false,
                    icon: (
                      <LoadingSpinner className="toastr-info toastr--loading" />
                    ),
                    transitionOut: "fadeOut",
                  },
                })
              )
            : empty(),
          action.extras.toastType && action.extras.toastType !== "loading"
            ? of(
                actions.add({
                  id: action.extras.toastID ? action.extras.toastID : null,
                  type: action.extras.toastType,
                  message: action.extras.toastMessage,
                  options: {
                    component: action.extras.toastComponent,
                    ...toastsSettings[action.extras.toastType],
                    transitionOut: "fadeOut",
                    showCloseButton: true,
                    uniqueID: action.extras.uniqueID,
                  },
                })
              )
            : empty()
        );
      }
      return empty();
    })
  );

export class EpicsRegistry {
  constructor() {
    this.emitChange = null;
    this.epics = [
      authEpics,
      callbackSuccessEpic,
      initializeFormEpic,
      setNavbarEpic,
      toastLoadingEpic,
      toastsEpic,
      resNotFoundEpic,
    ];
  }

  getEpics() {
    return [...this.epics];
  }

  register(epic) {
    this.epics = [...this.epics, epic];
    if (this.emitChange) {
      this.emitChange(this.getEpics());
    }
  }

  setChangeListener(listener) {
    this.emitChange = listener;
  }
}

const epicsRegistry = new EpicsRegistry();
export default epicsRegistry;
