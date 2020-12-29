import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { initialState } from './reducks/store/type'
import logo from './logo.svg'
import { signInAction } from './reducks/users/actions'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state: initialState) => state)

  console.log(selector)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          type="button"
          onClick={() =>
            dispatch(
              signInAction({
                isSignedIn: false,
                uid: '0001',
                username: 'warota',
              })
            )
          }
        >
          SignIn
        </button>
      </header>
    </div>
  )
}

export default App
