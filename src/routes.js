import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
// import DogList from './components/DogsList'
import AdopterLandingPage from './components/AdopterLandingPage'
import ShelterDashboard from './components/ShelterDashboard'
import PetListingForm from './components/PetListingForm'
import MyPets from './components/MyPets'
import ShelterRegistrationForm from './components/ShelterRegistrationForm'
import PetListing from './components/PetListing'

export const routes = (
  <Switch>
    <Route exact path='/'>
      <Redirect to='/home' />
    </Route>
    <Route exact path='/home' component={AdopterLandingPage} />
    <Route exact path='/shelter-dashboard' component={ShelterDashboard} />
    <Route exact path='/register-shelter' component={ShelterRegistrationForm} />
    <Route exact path='/add-pet' component={PetListingForm} />
    <Route exact path='/pet-listing' component={PetListing} />
    <Route exact path='/my-pets' component={MyPets} />
  </Switch>
)
