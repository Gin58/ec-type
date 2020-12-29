import { userState, Actions } from './type'

export const signInAction = (userState: userState) => {
  return {
    type: Actions.SIGN_IN,
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username,
    },
  }
}

export const signOutAction = () => {
  return {
    type: Actions.SIGN_OUT,
    payload: {
      isSignedIn: false,
      uid: '',
      username: '',
    },
  }
}
