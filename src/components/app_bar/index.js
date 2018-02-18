import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import { Link } from 'react-router-dom'
import paws from '../../../src/paws.png'
// import MenuIcon from 'material-ui-icons/Menu'
import Logo from './logo.png'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

function ButtonAppBar(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position='static' title={<img src={paws}/>}> 
        <Toolbar>
          <Typography variant='title' color='inherit' className={classes.flex}>
            Paws on the block
          </Typography>
          <Button component={Link} to="/add-pet">Add Pet</Button>
          <Button component={Link} to="/home">Home</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
