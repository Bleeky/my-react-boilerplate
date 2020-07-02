import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { statusCodes } from "common/constants";

class ErrorDetailsView extends Component {
  static propTypes = {
    setModal: PropTypes.func.isRequired,
    onOpen: PropTypes.func,
    copyErrorToast: PropTypes.func.isRequired,
    error: PropTypes.shape().isRequired,
  };

  static defaultProps = {
    onOpen: () => null,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.onOpen();
            this.props.setModal({
              visible: true,
              title: () => <h2 className="modal-title">Error report</h2>,
              content: () => (
                <Fragment>
                  <table className="u-mb-2">
                    <tbody>
                      <tr>
                        <th>Status</th>
                        <td>{this.props.error.status}</td>
                      </tr>
                      <tr>
                        <th />
                        <td>{statusCodes[this.props.error.status]}</td>
                      </tr>
                      {this.props.error.response && (
                        <Fragment>
                          <tr>
                            <th>Code</th>
                            <td>{this.props.error.response.code}</td>
                          </tr>
                          <tr>
                            <th>Message</th>
                            <td>{this.props.error.response.message}</td>
                          </tr>
                        </Fragment>
                      )}
                    </tbody>
                  </table>
                  <button
                    onClick={() => {
                      const el = document.createElement("textarea");
                      el.value = JSON.stringify(this.props.error);
                      el.setAttribute("readonly", "");
                      el.style.display = "hidden";
                      document.body.appendChild(el);
                      el.select();
                      document.execCommand("copy");
                      document.body.removeChild(el);
                      this.props.copyErrorToast();
                    }}
                    className="button button--small u-mb-2"
                  >
                    Copy error report
                  </button>
                </Fragment>
              ),
              closeName: () => "Close",
            });
          }}
          className="toast-button u-mt-1"
        >
          Details
        </button>
      </div>
    );
  }
}

export default ErrorDetailsView;
