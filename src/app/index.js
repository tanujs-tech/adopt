import React, { Component } from 'react'
import { connect } from 'react-redux'
import {routes as scenes} from '../routes'
import AppBar from '../components/app_bar'
import { startup } from '../actions/startup'

class App extends Component {

  componentWillMount() {
    this.props.startup()
  }

  render () {
    return (
      <div className='app'>
        <AppBar />
        <main id='outer-container'>
          {scenes}
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  startup: () => dispatch(startup())
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
