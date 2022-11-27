import axios from "axios";
import { SERVER_URL } from "../env";

export const signIn = async (email,password) => {
  var config = {
    method: "post",
    url: `${SERVER_URL}/signin`,
    headers: {
      "content-type": "application/json",
      "access-control-allow-credentials": true,
      "access-control-allow-origin":"*"
    },
    data: JSON.stringify({"email":email,"password":password}),
  };
  try {
    const res = await axios(config);
    return res;
  } catch (error) {
    console.error("error in signin " + error);
    return error.response
  }
};
