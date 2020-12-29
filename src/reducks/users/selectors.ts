import { createSelector } from 'reselect'
import { RootState } from '../store/store'
import { userState } from './types'

export const getUserId = createSelector(
  (state: RootState) => state.users,
  (users: userState) => users.uid
)

export const getUsername = createSelector(
  (state: RootState) => state.users,
  (users: userState) => users.username
)
