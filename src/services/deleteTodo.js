import axios from "axios";
import { SERVER_URL } from "../env";

export const deleteTodo = async (id) => {
  try {
    const res = await axios.delete(`${SERVER_URL}/deleteTodo/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res;
  } catch (error) {
    console.error("error" + error);
  }
};
