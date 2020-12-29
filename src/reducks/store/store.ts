import { createStore as reduxCreateStore, combineReducers } from 'redux'

import UsersReducer from '../users/reducers'
import { initialState } from './type'

const createStore = () => {
  return reduxCreateStore(
    combineReducers<initialState>({
      users: UsersReducer,
    })
  )
}

export default createStore
