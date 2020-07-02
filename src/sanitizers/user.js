// User in display
const emptyUser = {
  id: undefined,
  created_at: undefined,
  updated_at: undefined,
  email: undefined,
  first_name: undefined,
  last_name: undefined,
  company: undefined,
  type: undefined,
};

const user = (data) => {
  if (Object.keys(data).length === 0) {
    return emptyUser;
  }

  return {
    ...emptyUser,
    id: data.id || undefined,
    email: data.email || undefined,
    first_name: data.first_name || undefined,
    last_name: data.last_name || undefined,
    company: data.company || undefined,
    type: data.type || undefined,
  };
};

// User in form
const emptyUserForm = {
  email: undefined,
  first_name: undefined,
  last_name: undefined,
  company: undefined,
  type: undefined,
};

const userForm = (data) => {
  if (Object.keys(data).length === 0) {
    return emptyUserForm;
  }

  return {
    ...emptyUserForm,
    email: data.email || undefined,
    first_name: data.first_name || undefined,
    last_name: data.last_name || undefined,
    company: data.company || undefined,
    type: data.type || undefined,
  };
};

export { user, userForm };
