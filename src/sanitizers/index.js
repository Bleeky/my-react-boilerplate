import { user, userForm } from "./user";

const sanitize = (item, data = {}) => {
  switch (item) {
    case "user":
      return user(data);
    case "userForm":
      return userForm(data);
    default:
      return null;
  }
};

export default sanitize;
