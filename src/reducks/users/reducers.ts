import { handleActions, Action } from 'redux-actions'
import * as UserActions from './actions'
import { userState, Actions } from './types'

export type State = {
  readonly isSignedIn: boolean
  readonly uid: string
  readonly username: string
}

const initialState: State = {
  isSignedIn: false,
  uid: '',
  username: '',
}

export const usersReducer = handleActions<State, userState>(
  {
    [UserActions.Actions.SIGN_IN]: (
      state: State,
      action: Action<userState>
    ) => {
      return {
        ...state,
        ...action.payload,
      }
    },
    [Actions.SIGN_OUT]: (state: State) => {
      return {
        ...state,
        ...initialState,
      }
    },
  },
  initialState
)
