import decodeJwt from "jwt-decode";

export const setToken = (token) =>{
    localStorage.setItem("token",token)
}



export const getToken = () => {
  const token = localStorage.getItem("token");
  return !token ? null : token;
};

export const getUser = () => {
  const token = getToken();
  if (!token) return null;
  try {
    return decodeJwt(token);
  } catch (error) {
    console.error("error when decoding the jwt ",error);
  }
};

export const logOut = ()=>{
  localStorage.clear()
  window.location.reload(false);
}