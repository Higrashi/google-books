import {combineReducers} from 'redux'
import currentBooksReducer from './current-books/current-books.reducer'
import currentQueryReducer from './current-query/current-query.reducer'

const rootReducer = combineReducers({
    books: currentBooksReducer,
    query: currentQueryReducer
})



export default rootReducer