import {AnyAction} from 'redux'

type CurrentBooksState = {
    currentBooks: []
}

const initialState: CurrentBooksState = {
    currentBooks: []
}

const currentBooksReducer = (
    state = initialState,
    action: AnyAction) => {
       switch(action.type) {
           case 'SET_CURRENT_BOOKS':
               return {
                   ...state,
                   currentBooks: action.payload
               }
            default: 
            return state   
        } 
}

export default currentBooksReducer