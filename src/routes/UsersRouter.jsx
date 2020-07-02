import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import NotFound from "NotFound";
import { UsersList } from "modules/Users";

class UsersRouterView extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <Switch>
        <Route exact path="/settings/users" component={UsersList} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

const UsersRouter = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersRouterView);

export default UsersRouter;
