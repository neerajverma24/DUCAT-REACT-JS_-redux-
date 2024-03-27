import { AddToCart } from "../constants";


const initialStore = {
    cartData: []
}

export default function cartItem(state = [], action) {
    switch (action.type) {
        case AddToCart:
            console.log("reducer data :", action.data);
            return [
                ...state,
                { cartData: action.data }
            ]
            break;
        default:
            return state;

    }
}