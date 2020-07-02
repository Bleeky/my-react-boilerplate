import React, { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    closeOnOuterClick: PropTypes.bool,
    closeOnEscape: PropTypes.bool,
    validateOnEnter: PropTypes.bool,
    onValidate: PropTypes.func,
    onClose: PropTypes.func.isRequired,
    customFooter: PropTypes.func,
    children: PropTypes.node.isRequired,
    modalTitle: PropTypes.string,
    modalClass: PropTypes.string,
    wrapperClass: PropTypes.string,
    disableValidate: PropTypes.bool,
    validateName: PropTypes.string,
    closeName: PropTypes.string,
    validateClassName: PropTypes.string,
  };

  static defaultProps = {
    validateName: "Validate",
    closeName: "Close",
    disableValidate: false,
    closeOnOuterClick: false,
    closeOnEscape: true,
    validateOnEnter: true,
    modalTitle: null,
    customFooter: null,
    wrapperClass: "",
    modalClass: "",
    validateClassName: "",
    onValidate: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
      opacity: 0,
      display: "block",
      visibility: "hidden",
    };
  }

  componentDidMount() {
    if (this.props.closeOnEscape) {
      this.closeOnEscape = (e) => {
        if (this.props.onClose && this.props.show && e.keyCode === 27) {
          this.props.onClose(e);
        }
      };
      document.body.addEventListener("keydown", this.closeOnEscape, false);
    }
    if (this.props.validateOnEnter) {
      this.onValidateEnter = (e) => {
        if (this.props.onValidate && this.props.show && e.keyCode === 13) {
          e.preventDefault();
          e.stopPropagation();
          this.props.onValidate(e);
        }
      };
      document.body.addEventListener("keydown", this.onValidateEnter, false);
    }
    if (this.props.show === true) {
      this.fadeIn();
    } else {
      this.fadeOut();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.show !== prevProps.show) {
      if (this.props.show === true) {
        this.fadeIn();
      } else {
        this.fadeOut();
      }
    }
    if (
      this.props.closeOnEscape !== prevProps.closeOnEscape &&
      !this.props.closeOnEscape
    ) {
      this.closeOnEscape = (e) => {
        if (this.props.onClose && this.props.show && e.keyCode === 27) {
          this.props.onClose(e);
        }
      };
      document.body.addEventListener("keydown", this.closeOnEscape, false);
    } else if (
      this.props.closeOnEscape !== prevProps.closeOnEscape &&
      this.props.closeOnEscape
    ) {
      document.body.removeEventListener("keydown", this.closeOnEscape, false);
    }
    if (
      this.props.validateOnEnter !== prevProps.validateOnEnter &&
      !this.props.validateOnEnter
    ) {
      this.onValidateEnter = (e) => {
        if (this.props.onValidate && this.props.show && e.keyCode === 13) {
          e.preventDefault();
          e.stopPropagation();
          this.props.onValidate(e);
        }
      };
      document.body.addEventListener("keydown", this.onValidateEnter, false);
    } else if (
      this.props.validateOnEnter !== prevProps.validateOnEnter &&
      this.props.validateOnEnter
    ) {
      document.body.removeEventListener("keydown", this.onValidateEnter, false);
    }
  }

  componentWillUnmount() {
    this.unmount = true;
    if (this.closeOnEscape) {
      document.body.removeEventListener("keydown", this.closeOnEscape, false);
    }
    if (this.onValidateEnter) {
      document.body.removeEventListener("keydown", this.onValidateEnter, false);
    }
  }

  fadeIn = () => {
    this.setState(
      {
        display: "block",
        visibility: "visible",
        show: true,
      },
      () => {
        setTimeout(() => {
          if (!this.unmount) {
            this.setState({ opacity: 1, show: true });
          }
        }, 10);
      }
    );
  };

  fadeOut = () => {
    this.setState({ opacity: 0 }, () => {
      setTimeout(() => {
        if (!this.unmount) {
          this.setState({ show: false });
        }
      }, 10);
    });
  };

  hideOnOuterClick = (e) => {
    if (this.props.closeOnOuterClick) {
      this.props.onClose(e);
    }
  };

  renderModalControls() {
    return (
      <div className="ui-modal-footer">
        {this.props.customFooter && this.props.customFooter()}
        {this.props.onValidate && (
          <button
            disabled={this.props.disableValidate}
            className={`zs-button zs-button--primary${
              this.props.validateClassName
                ? ` ${this.props.validateClassName}`
                : ""
            }${this.props.disableValidate ? " is-disabled" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              this.props.onValidate(e);
            }}
          >
            {this.props.validateName}
          </button>
        )}
        <button
          className="zs-button zs-button--link"
          onClick={(e) => {
            this.props.onClose(e);
          }}
        >
          {this.props.closeName}
        </button>
      </div>
    );
  }

  render() {
    if (!this.state.show) return null;
    return (
      <div
        style={{ ...this.state }}
        className={`ui-modalWrapper ${this.props.wrapperClass}`}
        onClick={this.hideOnOuterClick}
        data-modal="true"
      >
        <div
          className={`ui-modal ${this.props.modalClass}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {this.props.modalTitle && (
            <div className="ui-modal-title">{this.props.modalTitle}</div>
          )}
          {this.props.children}
          {this.renderModalControls()}
        </div>
      </div>
    );
  }
}

export default Modal;
