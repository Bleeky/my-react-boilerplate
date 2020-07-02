import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "./ModalComponent";

class ModalView extends Component {
  static propTypes = {
    modal: PropTypes.shape().isRequired,
    setModal: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.modal.onOpen &&
      ((!this.props.modal.visible &&
        nextProps.modal.visible &&
        nextProps.modal.onOpen !== undefined) ||
        (this.props.modal.onOpen === undefined &&
          nextProps.modal.onOpen !== undefined) ||
        (!this.props.modal.retain && nextProps.modal.retain))
    ) {
      nextProps.modal.onOpen();
    }
  }

  render() {
    const modal = { ...this.props.modal };
    return (
      <Modal
        show={modal.visible}
        closeOnEscape={modal.closeOnEscape}
        customFooter={modal.customFooter}
        closeOnOuterClick={modal.closeOnOuterClick}
        closeName={modal.closeName()}
        validateName={modal.validateName()}
        validateClassName={modal.validateClassName}
        disableValidate={modal.disableValidate}
        onClose={(e) => {
          this.props.setModal({ visible: false });
          e.preventDefault();
          modal.onClose();
        }}
        onValidate={modal.onValidate}
      >
        {modal.title && (
          <div className="modal-header">
            {modal.title({ modalID: modal.modalID, ...modal.props })}
          </div>
        )}
        {modal.content && (
          <div className="modal-body">
            {modal.content({ modalID: modal.modalID, ...modal.props })}
          </div>
        )}
      </Modal>
    );
  }
}

export default ModalView;
