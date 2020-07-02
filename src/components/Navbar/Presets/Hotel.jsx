import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class Hotel extends Component {
  static propTypes = {
    hotel: PropTypes.shape().isRequired,
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
          to={`/hotels/hotel/${this.props.hotel.id}`}
          isActive={(match, location) => {
            if (match) return true;
            if (location.pathname.startsWith('/hotels/hotel/edit')) return true;
            return false;
          }}
        >
          Infos
        </NavLink>
        <NavLink to={`/hotels/hotel/${this.props.hotel.id}/rooms`}>Rooms</NavLink>
        <NavLink to={`/hotels/hotel/${this.props.hotel.id}/rates`}>Rates</NavLink>
        <NavLink to={`/hotels/hotel/${this.props.hotel.id}/bookings`}>Bookings</NavLink>
        <NavLink to={`/hotels/hotel/${this.props.hotel.id}/services`}>Services</NavLink>
        {/* <NavLink to={`/hotels/hotel/${this.props.hotel.id}/external-partners`}>Partners</NavLink> */}
      </Fragment>
    );
  }
}

export default Hotel;
