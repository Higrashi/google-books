import {AnyAction} from 'redux'

export type CurrentQueryState = {
    currentQuery: {
        query: string,
        category: string,
        sorting: string,
        startAt: number
    }
}

const initialState: CurrentQueryState = {
    currentQuery: {
        query: '',
        category: 'art&biography&computers&history&medical&poetry',
        sorting: 'relevance',
        startAt: 0
    }
}

const currentQueryReducer = (
    state = initialState,
    action: AnyAction) => {
       switch(action.type) {
           case 'SET_CURRENT_QUERY':
               return {
                   ...state,
                   currentQuery: action.payload
               }
            default: 
            return state   
        } 
}

export default currentQueryReducer