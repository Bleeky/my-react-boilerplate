import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
// import Loadable from "react-loadable";

// import reducerRegistry from "reducerRegistry";
// import epicsRegistry from "epicsRegistry";
import NotFound from "NotFound";
import { setNavbar } from "components/Navbar/actions";
// import { LoadingSpinner } from "components/Loading";

// const HotelsRouter = Loadable({
//   loader: async () => {
//     const hotelsReducerPromise = import(/* webpackChunkName: "hotelsReducer" */ 'modules/Hotels/reducers');
//     const hotelsEpicsPromise = import(/* webpackChunkName: "hotelsEpics" */ 'modules/Hotels/epics');
//     await Promise.all([hotelsReducerPromise, hotelsEpicsPromise]).then((values) => {
//       reducerRegistry.register('hotels', values[0].default);
//       epicsRegistry.register(values[1].default);
//     });
//     return import(/* webpackChunkName: "hotels" */ 'routes/HotelsRouter');
//   },
//   loading: LoadingSpinner,
//   delay: 300,
// });
// const PartnersRouter = Loadable({
//   loader: async () => {
//     const partnersReducerPromise = await import(/* webpackChunkName: "partnersReducer" */ 'modules/Partners/reducers');
//     const partnersEpicsPromise = await import(/* webpackChunkName: "partnersEpics" */ 'modules/Partners/epics');
//     await Promise.all([partnersReducerPromise, partnersEpicsPromise]).then((values) => {
//       reducerRegistry.register('partners', values[0].default);
//       epicsRegistry.register(values[1].default);
//     });
//     return import(/* webpackChunkName: "partners" */ 'routes/PartnersRouter');
//   },
//   loading: LoadingSpinner,
//   delay: 300,
// });
// const SettingsRouter = Loadable({
//   loader: () => import(/* webpackChunkName: "settings" */ 'routes/SettingsRouter'),
//   loading: LoadingSpinner,
//   delay: 300,
// });

class HomeRouterView extends PureComponent {
  static propTypes = {
    setNavbar: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    // this.props.setNavbar({ top: { display: true, type: "admin" } });
  }

  render() {
    return (
      <Switch>
        {/* <Route path="/hotels" component={HotelsRouter} />
        <Route path="/partners" component={PartnersRouter} />
        <Route path="/settings" component={SettingsRouter} /> */}
        <Route component={NotFound} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setNavbar,
    },
    dispatch
  );

const HomeRouter = connect(mapStateToProps, mapDispatchToProps)(HomeRouterView);

export default HomeRouter;
