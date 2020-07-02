const setNavbar = payload => ({ type: 'SET_NAVBAR_REQUEST', payload });
const setNavbarFulfilled = payload => ({ type: 'SET_NAVBAR_FULFILLED', payload });

export { setNavbar, setNavbarFulfilled };
