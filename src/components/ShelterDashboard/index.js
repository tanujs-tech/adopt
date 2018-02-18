import React from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'
import ShelterRegistrationForm from '../ShelterRegistrationForm'
import { createShelter } from '../../actions/shelter'

const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
})

function ShelterDashboard (props) {
  const { classes } = props
  return (
    <Paper>
      <ShelterRegistrationForm createShelter={props.createShelter} />
    </Paper>
  )
}

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createShelter: (name, physicalAddress, registrationId, metadata, walletAddress) => (
    dispatch(createShelter(name, physicalAddress, registrationId, metadata, walletAddress))
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ShelterDashboard))
