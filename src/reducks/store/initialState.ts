import { initialState as initialStateType } from './types'

const initialState: initialStateType = {
  users: {
    isSignedIn: false,
    uid: '',
    username: '',
  },
}

export default initialState
