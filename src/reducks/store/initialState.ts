import { initialState as initialStateType } from './type'

const initialState: initialStateType = {
  users: {
    isSignedIn: false,
    uid: '',
    username: '',
  },
}

export default initialState
