import axios from "axios";

const getProducts = async () => {
    try {
        const response = await axios.get("http://localhost:9000/products");
        return response.data;
    } catch (e) {
        throw new Error("Failed to fetch products");
    }
}

export default getProducts;