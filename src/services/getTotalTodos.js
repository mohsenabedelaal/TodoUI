import axios from "axios";
import { SERVER_URL } from "../env";

export const getTotalTodos = async () => {
  try {
    const res = await axios.get(`${SERVER_URL}/totallTodos`);
    return res.data;
  } catch (error) {
    console.error("error" + error);
  }
};
