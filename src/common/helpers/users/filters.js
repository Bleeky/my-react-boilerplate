const filterUsersByName = (users, filter) =>
  users.filter((user) => {
    const re = new RegExp(`${filter ? filter.split(' ').join('|') : ''}`, 'ig');
    if (re.test(`${user.first_name}${user.last_name}`)) {
      return true;
    }
    return false;
  });

export { filterUsersByName };
