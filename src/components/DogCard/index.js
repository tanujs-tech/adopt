import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper';
import Details from '../Details';

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin:10, 
  },
  media: {
    height: 200
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
})


function DogCard(props) {
  const { classes } = props
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.image}
        title='Contemplative Reptile'
      />
      <CardContent>
        <Typography variant='headline' component='h2'>
          {props.name}
        </Typography>
        <Typography variant='headline' component='p'>
          {props.age}
        </Typography>
        <Typography component='p'>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
        <Details details={props.details}/>
      </CardActions>
    </Card>
  )
}

DogCard.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.object.isRequired
}

export default withStyles(styles)(DogCard)
