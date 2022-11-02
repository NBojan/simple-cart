const reducer = (state, action) => {
    if(action.type === "CLEAR"){
        return {...state, cart: []};
    }
    if(action.type === "REMOVE_ONE"){
        return {...state, cart: state.cart.filter(item => item.id !== action.payload)};
    }
    if(action.type === "TOGGLE_AMOUNT"){
        const tmpCart = state.cart.map(item => {
            if(item.id === action.payload.id){
                if(action.payload.math === "add"){
                    return {...item, amount: item.amount + 1};
                }
                else if(action.payload.math === "substract"){
                    return {...item, amount: item.amount - 1};
                }
            }
            return item;
        }).filter(item => item.amount !== 0);
        return {...state, cart: tmpCart};
    }
    if(action.type === "GET_VALUES"){
        let { amount, total } = state.cart.reduce((accum, item) => {
            accum.amount += item.amount;
            accum.total += item.amount * item.price;
            return accum;
        }, {amount: 0, total: 0});

        total = parseFloat(total.toFixed(2));
        return {...state, amount, total};
    }
    if(action.type === "GET_DATA"){
        return {...state, cart: action.payload}
    }
    throw new Error("something went wrong");
}

export default reducer;