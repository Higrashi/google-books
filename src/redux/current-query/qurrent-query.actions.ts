import {CurrentQueryState} from './current-query.reducer'

export const setCurrentQuery = (query:CurrentQueryState) => ({
     type: 'SET_CURRENT_QUERY',
     payload: query 
 })