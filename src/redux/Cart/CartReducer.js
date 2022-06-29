const initialState = {
    products:[]
}


function cartReducer(state=initialState, action){
    switch(action.type){
        case 'ADD_TO_CART':
            let productInCart = false;
            const updatedProducts = state.products.map(product => {
                if (product.id === action.payload.product.id) {
                    productInCart = true;
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product;
                }
            })

            if (!productInCart) {
                return Object.assign({}, state, {
                    products: [
                        ...state.products,
                        {
                            ...action.payload.product,
                            quantity: 1
                        }
                    ]
                })
            } else {
                return Object.assign({}, state, {
                    products: updatedProducts
                });
            };
            
        
        case 'REMOVE_FROM_CART':
            const productsAfterRemove = state.products.filter((elem,index)=>{
                if(index != action.payload.product.id){
                    return elem;
                }
            });
            const stateAfterRemove = {
                ...state,
                products: [...productsAfterRemove]
            }
            return stateAfterRemove;

        default:
            return state;
    }
}

export default cartReducer;