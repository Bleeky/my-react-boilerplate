import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

const validate = (values) => {
  const errors = {};

  return errors;
};

class LoginFormView extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="login">
        Login form is here
        <form onSubmit={this.props.handleSubmit}></form>
      </div>
    );
  }
}

const LoginForm = reduxForm({
  form: "loginForm",
  validate,
})(LoginFormView);

export default LoginForm;
