import React from 'react'
import { withStyles } from 'material-ui/styles'
import DogsList from '../DogsList'
import Paper from 'material-ui/Paper'
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import { CircularProgress } from 'material-ui/Progress';

const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  progress: {
    margin: theme.spacing.unit * 2,
  },
})

function Loader(props) {
  const { classes } = props
  return (
    <Dialog
      open={props.isShow}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <CircularProgress className={classes.progress} />
    </Dialog>
  )
}

export default withStyles(styles)(Loader)
