import React from 'react'
import { withStyles } from 'material-ui/styles'
import DogsList from '../DogsList'
import Paper from 'material-ui/Paper'

const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
})

function MyPets (props) {
  const { classes } = props
  return (
    <div>
      <Paper className={classes.paper} elevation={4} style={{marginTop:0}}>
        My Pets
      </Paper>
      <Paper className={classes.paper} elevation={4}>
        <DogsList />
      </Paper>
    </div>
  )
}

export default withStyles(styles)(MyPets)
