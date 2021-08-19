import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import rootReducer from './root-reducer'

const middlewares = []

 if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}


export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch