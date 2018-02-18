import React from 'react'
import { withStyles } from 'material-ui/styles'
import DogsList from '../DogsList'
import PetFilterBar from '../PetFilterBar'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'
import { getAdoptionRequest } from '../../actions/adoptionRequest'

const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
})

class AdopterLandingPage extends React.Component {

  componentDidMount() {
    this.props.getAdoptionRequest()
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Paper className={classes.paper} elevation={4} style={{marginTop:0}}>
          Home
        </Paper>
        <Paper className={classes.paper} elevation={4}>
          <PetFilterBar />
        </Paper>
        <Paper className={classes.paper} elevation={4}>
          <DogsList />
        </Paper>
      </div>
    )
  }
}
// =======
// class AdopterLandingPage extends React.Component {

//   componentDidMount() {
//     this.props.getAdoptionRequest()
//   }

//   render() {
//     const { classes } = this.props
//     return (
//       <div>
//         <Paper className={classes.paper} elevation={4}>
//           <PetFilterBar />
//         </Paper>
//         <Paper className={classes.paper} elevation={4}>
//           <DogsList />
//         </Paper>
//       </div>
//     )
//   }
// >>>>>>> WIP
// }


const mapStateToProps = (state, ownProps) => ({
  adoptionRequest: state.adoptionRequest.pendingRequests
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAdoptionRequest: () => dispatch(getAdoptionRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AdopterLandingPage))

// export default withStyles(styles)(AdopterLandingPage)
