import ApiClient from "@/common/services/api";
const api = new ApiClient();

const signup = async (userData) => {
    const response = await api.post("/register", userData);
    if (response.data.status) {
        return response.data
    }
    return response;
};

const login = async (userData) => {
    const response = await api.post("/login", userData);
    if (response.data.status) {
        // localStorage.setItem("user", JSON.stringify(response.data));
        return response.data.data
    }
    return response;
};

const loginWithOAuthGoogle = async (access_token) => {
    const response = await api.post("/oauth/google/callback", { access_token });
    if (response.data.status) {
        return response.data.data
    }
    return response;
};

const signupWithOAuthGoogle = async (access_token) => {
    const response = await api.post("/oauth/google/callback", { access_token });
    if (response.data.status) {
        return response.data.data
    }
    return response;
};

const authService = {
    login,
    signup,
    loginWithOAuthGoogle,
    signupWithOAuthGoogle
};

export default authService;