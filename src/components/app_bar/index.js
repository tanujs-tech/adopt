import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import { Link } from 'react-router-dom'
// import MenuIcon from 'material-ui-icons/Menu'
import Logo from './logo.png'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'

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
  },
  media: {
    height:40,
    width: 40,
    marginRight:20
  },
  header: {
    backgroundColor:'darkred'
  },
  headerButton: {
    color: 'white'
  }
}

function ButtonAppBar(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position='static' title={<img src="https://unsplash.it/40/40" />}>
        <Toolbar>
          <CardMedia
            className={classes.media}
            image={Logo}
            title='Contemplative Reptile'
          />
          <Typography variant='title' color='inherit' className={classes.flex}>
            Paws on the block
          </Typography>
          <Button className={classes.headerButton} component={Link} to="/add-pet">Add Pet</Button>
          <Button className={classes.headerButton} component={Link} to="/home">Home</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
