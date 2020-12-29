import { createAction } from 'redux-actions'
import { userState } from './type'

export const Actions = {
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
}

export const signInAction = createAction<userState>(Actions.SIGN_IN)
export const signOutAction = createAction<userState>(Actions.SIGN_OUT)
