import React, { PureComponent, Fragment } from "react";
import { NavLink } from "react-router-dom";

class Settings extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <Fragment>
        <NavLink
          exact
          to="/settings/users"
          isActive={(match, location) => {
            if (match) return true;
            if (location.pathname.startsWith("/settings/users")) return true;
            return false;
          }}
        >
          Users
        </NavLink>
        {/* <NavLink to="/settings/misc">Misc</NavLink> */}
      </Fragment>
    );
  }
}

export default Settings;
