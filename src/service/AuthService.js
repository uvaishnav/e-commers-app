import axios from "axios";

// Function to fetch users from the server
const getUsers = async () => {
    try {
        const response = await axios.get("http://localhost:9000/users");
        return response.data;
    } catch (e) {
        throw new Error("Failed to fetch users");
    }
};

// Function to handle login
export const handleLogin = async (username, password) => {
    let user = null;
    let error = null;

    try {
        const userData = await getUsers();
        const curUser = userData.find(
            (user) => user.username === username && user.password === password
        );

        if (!curUser) {
            error = "Invalid credentials";
            return { user, error };
        }

        user = curUser;
        return { user, error };
    } catch (e) {
        // Handle any errors occurred during login
        error = "Failed to login";
        return { user, error };
    }
};