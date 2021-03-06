import React from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../reducks/users/operations'

const Login: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <h2>ログイン</h2>
      <button
        type="button"
        onClick={() => {
          dispatch(signIn())
        }}
      >
        ログインする
      </button>
    </div>
  )
}

export default Login
