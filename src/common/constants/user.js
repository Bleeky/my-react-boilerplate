const ADMINISTRATOR = "Administrator";
const HOTELMANAGER = "Hotel manager";
const PARTNER = "Partner";

const usersTypes = [
  { value: 1, name: ADMINISTRATOR },
  { value: 2, name: HOTELMANAGER },
  { value: 3, name: PARTNER },
];

const usersTypesEnum = {
  1: ADMINISTRATOR,
  2: HOTELMANAGER,
  3: PARTNER,
};

export { usersTypes, usersTypesEnum };
