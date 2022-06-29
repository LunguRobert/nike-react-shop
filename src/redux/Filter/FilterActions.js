export function addFilter(payload){
    return {
        type: 'ADD_FILTER',
        payload: payload,
    }
}

export function removeFilter(payload){
    return{
        type: 'REMOVE_FILTER',
        payload: payload,
    }
}

export function resetFilters(){
    return{
        type: 'RESET_FILTERS',
    }
}