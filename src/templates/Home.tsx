import React from 'react'
import { useSelector } from 'react-redux'
import { getUserId } from '../reducks/users/selectors'

const Home: React.FC = () => {
  const uid: string = useSelector(getUserId)
  return (
    <div>
      <h2>Home</h2>
      <p>{uid}</p>
    </div>
  )
}

export default Home
