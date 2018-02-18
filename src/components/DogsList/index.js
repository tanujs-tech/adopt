import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import GridList, { GridListTile } from 'material-ui/GridList'
import DogCard from '../DogCard'
// import tileData from './tileData'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper

  },
  gridList: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between'

  },
  subheader: {
    width: '100%'
  }
})

const dogsList = [
  {
    name: 'Boone',
    image: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40934225/1/?bust=1518468865',
    age: '4',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    breed: 'none',
    criticality_of_adoption: 'none',
    medical_condition: 'none',
    minimum_sponsor_amount: '15'
  },
  {
    name: 'Daphne',
    image: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40915096/1/?bust=1518243825',
    age: '6',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    breed: 'none',
    criticality_of_adoption: 'none',
    medical_condition: 'none',
    minimum_sponsor_amount: '20'
  },
  {
    name: 'Thanos',
    image: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40817791/1/?bust=1517363395',
    age: '7',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    breed: 'none',
    criticality_of_adoption: 'none',
    medical_condition: 'none',
    minimum_sponsor_amount: '25'
  },
  {
    name: 'Keeva',
    image: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40817550/3/?bust=1517362019',
    age: '8',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    breed: 'none',
    criticality_of_adoption: 'none',
    medical_condition: 'none',
    minimum_sponsor_amount: '15'
  },
  {
    name: 'Daphne',
    image: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40915096/1/?bust=1518243825',
    age: '6',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    breed: 'none',
    criticality_of_adoption: 'none',
    medical_condition: 'none',
    minimum_sponsor_amount: '20'
  },
  {
    name: 'Flurry',
    image: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/40912796/2/?bust=1518225611',
    age: '7',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    breed: 'none',
    criticality_of_adoption: 'none',
    medical_condition: 'none',
    minimum_sponsor_amount: '25'
  }
]

function DogList (props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} >
        {
          dogsList.map((dog, index) => {
            return <DogCard key={index} name={dog.name} image={dog.image} description={dog.description} age={dog.age} minimum_sponsor_amount={dog.minimum_sponsor_amount} details={dog} />
          })
        }
      </GridList>
    </div>
  )
}

DogList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DogList)
