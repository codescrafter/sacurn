import { BASE_URL } from "@/constant";
import { ApiClient } from "./ApiClient";

const apiClient = new ApiClient({
  BASE: BASE_URL,
  WITH_CREDENTIALS: true,
});

export default apiClient;