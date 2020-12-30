import React, { useCallback, useState } from 'react'
import { TextInput, PrimaryButton } from '../components/UIkit'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const inputUsername = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value)
    },
    [setUsername]
  )

  const inputEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
    },
    [setEmail]
  )
  const inputPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value)
    },
    [setPassword]
  )
  const inputConfirmPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(e.target.value)
    },
    [setConfirmPassword]
  )

  const testest = () => {
    console.log('clicked!')
  }

  return (
    <div className="c-section-container">
      <h2 className="u-text__headline u-text-center">アカウント登録</h2>
      <div className="module-spacer--medium" />
      <TextInput
        fullWidth
        label="ユーザー名"
        multiline={false}
        required
        rows={1}
        value={username}
        type="text"
        onChange={inputUsername}
      />
      <TextInput
        fullWidth
        label="メールアドレス"
        multiline={false}
        required
        rows={1}
        value={email}
        type="email"
        onChange={inputEmail}
      />
      <TextInput
        fullWidth
        label="パスワード"
        multiline={false}
        required
        rows={1}
        value={password}
        type="password"
        onChange={inputPassword}
      />
      <TextInput
        fullWidth
        label="パスワード（再確認）"
        multiline={false}
        required
        rows={1}
        value={confirmPassword}
        type="password"
        onChange={inputConfirmPassword}
      />
      <div className="module-spacer--medium" />
      <div className="center">
        <PrimaryButton label="アカウントを登録する" onClick={testest} />
      </div>
    </div>
  )
}

export default SignUp
