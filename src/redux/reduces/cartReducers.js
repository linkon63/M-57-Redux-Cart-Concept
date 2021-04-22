import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [ 
    {name: 'Lenevo', id: 1},
    {name: 'Apple', id: 2},
    {name: 'Asus', id: 3},
    {name: 'Acer', id: 4},
    {name: 'Dell', id: 5}]
}

const cartReducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            // console.log(action);
            // const newId = action.id;
            const newItem = {
                productId: action.id, 
                name: action.name, 
                cartId: state.cart.length + 1
            };
            const newCart = [...state.cart, newItem]; //newId Replaced to newItem
            // return {products: state.products, cart : newCart};
            return {...state, cart : newCart};
            // return {
            //     cart: [...state.cart, action.id]
            //     /* 
            //         const newId = action.id;
            //         const newCart = [..state.cart, newId];
            //         return {cart : newCart};
            //      */
            // }
        case REMOVE_FROM_CART:
            // console.log(action);
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id)
            // return {products: state.products ,cart : remainingCart}
            return {...state ,cart : remainingCart}
        default:
            return state;
    }
}

export default cartReducers;