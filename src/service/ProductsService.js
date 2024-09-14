import axios from "axios";
import { json_server } from "../components/common/constants";

const getProducts = async () => {
    try {
        const response = await axios.get(`${json_server}/products`);
        return response.data;
    } catch (e) {
        throw new Error("Failed to fetch products");
    }
}

export default getProducts;