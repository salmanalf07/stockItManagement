import axios from "axios";

let isRefreshing = false;
let refreshPromise = null;

const authService = async () => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  if (!isRefreshing) {
    isRefreshing = true;

    try {
      refreshPromise = axios.post(
        "http://127.0.0.1:8000/api/auth/refresh",
        null,
        config
      );

      const response = await refreshPromise;

      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem("token", data.access_token);
        // console.log("Token refreshed:", data.access_token);
        isRefreshing = false;
        refreshPromise = null;
        return data.access_token;
      } else {
        // console.error("Failed to refresh token");
        throw new Error("Failed to refresh token");
      }
    } catch (error) {
      // console.error("Error refreshing token:", error);
      localStorage.removeItem("token");
      isRefreshing = false;
      refreshPromise = null;
      throw error;
    }
  } else {
    // If a refresh is already in progress, return the existing refresh promise
    return refreshPromise;
  }
};

export default authService;
