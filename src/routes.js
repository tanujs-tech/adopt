import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
// import DogList from './components/DogsList'
import AdopterLandingPage from './components/AdopterLandingPage'

export const routes = (
  <Switch>
    <Route exact path='/'>
      <Redirect to='/home' />
    </Route>
    <Route exact path='/home' component={AdopterLandingPage} />
  </Switch>
)
