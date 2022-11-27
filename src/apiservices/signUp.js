import axios from "axios";
import { SERVER_URL } from "../env";

export const signUp = async (data) => {
  var config = {
    method: "post",
    url: `${SERVER_URL}/signup`,
    headers: {
      "content-type": "application/json",
      "access-control-allow-credentials": true,
      "access-control-allow-origin":"*"
    },
    data: JSON.stringify(data),
  };
  try {
    const res = await axios(config);
    return res;
  } catch (error) {
    console.error("error in signup " + error);
    return error.response
  }
};
