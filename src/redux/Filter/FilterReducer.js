const initialState = {
    filterIntervals:[],
    products:[]
}


function filterReducer(state=initialState,action){

    switch(action.type){

        case 'ADD_FILTER':
            
            const newState = {
                ...state,
                filterIntervals:[
                    ...state.filterIntervals,
                    ...action.payload.filterIntervals
                ],
            }
            return newState
        
        case 'REMOVE_FILTER':
            const itemToRemove = Object.values(action.payload.filterIntervals[0]);
            const remainFilters = state.filterIntervals.filter((interval)=>{
                if(interval.id !==itemToRemove[0] ){
                    return interval;
                }
            });

            const stateAfterRemove = {
                ...state,
                filterIntervals: [...remainFilters]
            }
            return stateAfterRemove;

            case 'RESET_FILTERS':
                const resetState = {
                    filterIntervals:[],
                    products:[]
                }
                return resetState;
        default: 
            return state;
    }
}

export default filterReducer;