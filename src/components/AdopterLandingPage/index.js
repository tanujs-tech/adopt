import React from 'react'
import { withStyles } from 'material-ui/styles'
import DogsList from '../DogsList'
import PetFilterBar from '../PetFilterBar'
import Paper from 'material-ui/Paper'

const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
})

function AdopterLandingPage (props) {
  const { classes } = props
  return (
    <div>
      <Paper className={classes.paper} elevation={4}>
        <PetFilterBar />
      </Paper>
      <Paper className={classes.paper} elevation={4}>
        <DogsList />
      </Paper>
    </div>
  )
}

export default withStyles(styles)(AdopterLandingPage)
