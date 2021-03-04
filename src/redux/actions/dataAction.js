
const user = (userId) => {
  // const responseJSON = await fetch(`https://api.ongstercare.com/get-care-giver-bio-data/${userId}`);
  // const response = await responseJSON.json();
  // return dispatch({
  //   type: "USER",
  //   payload: response.data
  // });
  return false
};

const login = (user) => {
  return {
    type: "LOGIN_USER",
    payload: user
  };
};

const logout = () => {
  // localStorage.removeItem("user");
  return {
    type: "LOGOUT_USER",
    payload: null
  };
};




export { user, login, logout };
