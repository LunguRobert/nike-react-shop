const initialState = {
    products:[]
}

function favoritesReducer(state=initialState,action){

    switch(action.type){
        case 'ADD_TO_FAVORITES':
            const newState = {
                ...state,
                products: [
                    ...state.products,
                    action.payload.products
                ]
            }
        return newState;

        case 'REMOVE_FROM_FAVORITES':
            const favoritesAfterRemove = state.products.filter((elem)=>{
                if(elem.id !== action.payload.products.id){
                    return elem;
                }
            });
            const stateAfterRemove = {
                ...state,
                products: [...favoritesAfterRemove]
            }
            return stateAfterRemove;
            

        default:
            return state;
    }

}

export default favoritesReducer;