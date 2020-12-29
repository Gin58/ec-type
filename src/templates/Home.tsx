import React from 'react'
import { useSelector } from 'react-redux'
import { getUserId, getUsername } from '../reducks/users/selectors'

const Home: React.FC = () => {
  const uid: string = useSelector(getUserId)
  const username: string = useSelector(getUsername)
  return (
    <div>
      <h2>Home</h2>
      <p>ユーザーID: {uid}</p>
      <p>ユーザーネーム:{username}</p>
    </div>
  )
}

export default Home
