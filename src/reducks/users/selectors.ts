import { createSelector } from 'reselect'
import { RootState } from '../store/store'
import { userState } from './types'

export const getUserId = createSelector(
  (state: RootState) => state.users,
  (users: userState) => users.uid
)
