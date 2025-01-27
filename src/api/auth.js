import api from "./config";

export const login = async (credentials) => {
  try {
      const response = await api.post("/auth/login", credentials);
      return response.data;
  } catch (error) {
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
      const response = await api.get("/auth/me");
      return response.data;
  } catch (error) {
      throw error;
  }
};

