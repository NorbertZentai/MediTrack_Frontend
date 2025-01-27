import api from "./config";

export const login = async (credentials) => {
  try {
      const response = await api.post("/auth/login", credentials);
      return response.data;
  } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      throw error;
  }
};

export const register = async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
};

export const logout = async () => {
  const response = await api.post('/auth/logout');
  return response.data;
};

export const fetchCurrentUser = async () => {
  try {
      console.log("Fetching current user...");
      const response = await api.get("/auth/me");
      console.log("Current user fetched:", response.data);
      return response.data;
  } catch (error) {
      console.error("Error fetching current user:", error.response || error.message);
      throw error;
  }
};

