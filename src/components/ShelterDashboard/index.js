import React from 'react'
import { withStyles } from 'material-ui/styles'
import ShelterRegistrationForm from '../ShelterRegistrationForm'
import Paper from 'material-ui/Paper'

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
      <ShelterRegistrationForm />
    </Paper>
  )
}

export default withStyles(styles)(ShelterDashboard)
