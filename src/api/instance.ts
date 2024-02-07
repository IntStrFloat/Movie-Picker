import { SERVER_URL } from "@/constants/server";
import axios from "axios";

export const api = axios.create({
  baseURL: SERVER_URL,
});
