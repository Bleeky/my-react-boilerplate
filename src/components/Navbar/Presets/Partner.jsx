import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class Partner extends Component {
  static propTypes = {
    partner: PropTypes.shape().isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <NavLink
          exact
          to={`/partners/partner/${this.props.partner.id}`}
          isActive={(match, location) => {
            if (match) return true;
            if (location.pathname.startsWith('/partners/partner/edit')) return true;
            return false;
          }}
        >
          Infos
        </NavLink>
        <NavLink to={`/partners/partner/${this.props.partner.id}/services`}>Services</NavLink>
        <NavLink to={`/partners/partner/${this.props.partner.id}/rates`}>Rates</NavLink>
        <NavLink to={`/partners/partner/${this.props.partner.id}/requests`}>Requests</NavLink>
      </Fragment>
    );
  }
}

export default Partner;
