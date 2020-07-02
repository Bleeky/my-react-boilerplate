import { v4 as uuidv4 } from "uuid";

const defaultModal = {
  visible: false,
  retain: false,
  customFooter: null,
  onClose: () => {},
  onValidate: null,
  onOpen: undefined,
  title: null,
  content: null,
  props: null,
  validateClassName: "",
  validateName: "Validate",
  closeName: "Close",
  closeOnOuterClick: false,
  disableValidate: false,
  closeOnEscape: true,
  validateOnEnter: true,
};

export default function modalReducer(state = defaultModal, action) {
  switch (action.type) {
    case "SET_MODAL": {
      let oldModal = state;
      const modalID = uuidv4();
      if (!action.payload.retain) {
        oldModal = { ...defaultModal, modalID };
      }
      return {
        ...oldModal,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
