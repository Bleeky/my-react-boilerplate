import React from "react";
import Icon from "components/Icon";

const toastsSettings = {
  light: {
    icon: <Icon icon="infoCircle--solid" className="toastr-info" />,
    timeOut: 8000,
  },
  error: {
    icon: <Icon icon="attention--solid" className="toastr-error" />,
    timeOut: 0,
  },
  success: {
    icon: <Icon icon="checkCircle--solid" className="toastr-success" />,
    timeOut: 8000,
  },
};

export default toastsSettings;
