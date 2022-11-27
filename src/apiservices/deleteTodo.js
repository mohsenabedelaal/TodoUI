import axios from "axios";
import { SERVER_URL } from "../env";
import { getToken } from "../utils";

export const deleteTodo = async (id) => {
  try {
    const res = await axios.delete(`${SERVER_URL}/deleteTodo/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return res;
  } catch (error) {
    console.error("error" + error);
  }
};
