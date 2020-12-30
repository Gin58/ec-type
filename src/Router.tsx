import React from 'react'
import { Route, Switch } from 'react-router'
import { Home, Login, SignUp } from './templates/index'

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="(/)?" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  )
}

export default Router
