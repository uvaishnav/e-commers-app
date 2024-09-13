import axios from "axios";

const getUsers = async()=>{
    const response = await axios.get("http://localhost:9000/users");
    return response.data;
}

const handleLogin = async (username, password) => {
    const userData = await getUsers();
    const curUser = userData.find(user => user.username === username && user.password === password);
    if(!curUser){
        console.log("Invalid credentials");
        return;
    }
    console.log(curUser);
}

handleLogin("vaishnav", "12345");
handleLogin("vais", "1234");