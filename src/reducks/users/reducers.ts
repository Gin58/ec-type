import * as UserActions from './actions'
import initialState from '../store/initialState'
import { userState, Actions } from './type'

type ActionType =
  | ReturnType<typeof UserActions.signInAction>
  | ReturnType<typeof UserActions.signOutAction>

const UsersReducer = (
  state: userState = initialState.users,
  action: ActionType
) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default UsersReducer
