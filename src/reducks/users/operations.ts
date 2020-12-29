import { push } from 'connected-react-router'
import { Dispatch } from 'redux'
import { initialState } from '../store/types'
import { signInAction } from './actions'

export const signIn = () => {
  return async (dispatch: Dispatch, getState: () => initialState) => {
    const state = getState()
    const { isSignedIn } = state.users

    if (!isSignedIn) {
      const url = 'https://api.github.com/users/gin58'

      const res = await fetch(url)
        .then((res) => res.json())
        .catch(() => null)

      const username = res.login

      dispatch(
        signInAction({
          isSignedIn: true,
          uid: '0001',
          username,
        })
      )
      dispatch(push('/'))
    }
  }
}
