import React, { Component } from "react";
import PropTypes from "prop-types";
import { Prompt, useHistory } from "react-router-dom";

class PagePromptView extends Component {
  static propTypes = {
    shouldPrompt: PropTypes.bool.isRequired,
    setModal: PropTypes.func.isRequired,
    promptContent: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Prompt
        when={this.props.shouldPrompt && !this.state.canLeave}
        message={(location) => {
          this.props.setModal({
            visible: true,
            content: this.props.promptContent,
            onValidate: () => {
              this.setState({ canLeave: true }, () => {
                this.props.setModal({
                  visible: false,
                });
                useHistory().push(location.pathname);
              });
            },
            validateName: "Ok",
          });
          return false;
        }}
      />
    );
  }
}

export default PagePromptView;
