import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
// import DogList from './components/DogsList'
import AdopterLandingPage from './components/AdopterLandingPage'
import ShelterDashboard from './components/ShelterDashboard'
import PetListingForm from './components/PetListingForm'
import MyPets from './components/MyPets'

export const routes = (
  <Switch>
    <Route exact path='/'>
      <Redirect to='/home' />
    </Route>
    <Route exact path='/home' component={AdopterLandingPage} />
    <Route exact path='/shelter-dashboard' component={ShelterDashboard} />
    {/* <Route exact path='/register-shelter' component={ShelterDashboard} /> */}
    <Route exact path='/add-pet' component={PetListingForm} />
    <Route exact path='/my-pets' component={MyPets} />
  </Switch>
)
