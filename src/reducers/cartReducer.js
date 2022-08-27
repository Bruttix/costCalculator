export const cartReducer = (state, action) => {
    switch(action.type){
        case "ADD_PRODUCTS":
            return {...state , products:action.payload};
        case "ADD_TO_CART":
            return {...state , cart:[{...action.payload}, ...state.cart ]};
        case "REMOVE_FROM_CART":
            // need to filter out the data from our cart
            return {...state , cart: state.cart.filter((c)=> c.id !== action.payload.id) };
        case "CHANGE_CART_QTY":
            // update qty
            return {...state , cart: state.cart.filter((c)=> c.id === action.payload.id ? c.qty = action.payload.qty:c.qty) };
        default:
            break;
    }
};