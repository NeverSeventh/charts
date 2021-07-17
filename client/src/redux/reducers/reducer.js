import { CALCULATE, SAVE, SHOW_STATS } from "../types";







const reducer = (state=[],action) => {
    
    switch (action.type) {

        case SAVE: 
            return state

        case CALCULATE:
            return {
                ...state,
                users:action.payload
            }
        case SHOW_STATS:
            return {
                ...state,
                stats:action.payload
            }

        default:
            return state;
    }
}


export default reducer;