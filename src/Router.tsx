import React from 'react'
import { Route, Switch } from 'react-router'
import { Home, Login } from './templates/index'

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="(/)?" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  )
}

export default Router
