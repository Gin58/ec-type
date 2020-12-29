import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import {
  connectRouter,
  routerMiddleware as createRouterMiddleware,
  RouterState,
} from 'connected-react-router'
import * as History from 'history'
import { usersReducer, State as UserState } from '../users/reducers'

export interface RootState {
  router: RouterState
  usersReducer: UserState
}

export const history: any = History.createBrowserHistory()
export const routerMiddleware = createRouterMiddleware(history)

export const rootReducer = combineReducers<RootState>({
  router: connectRouter(history),
  usersReducer,
})

export function configureStore(initialState?: RootState) {
  const middlewares = [routerMiddleware]
  const enhancer = compose(applyMiddleware(...middlewares))
  return createStore(rootReducer, initialState!, enhancer)
}
