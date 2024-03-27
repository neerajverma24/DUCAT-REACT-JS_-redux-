import { AddToCart } from "../constants";

export const addToCart = (data) => {
    console.log("action data :", data)
    return {
        type: AddToCart,
        data: data
    }
}