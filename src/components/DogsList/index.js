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
    backgroundColor: theme.palette.background.paper,

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
    name: 'LLLLLLLLLL',
    image: 'http://www.hdwallpapersfreedownload.com/uploads/large/animals/dog-image.jpg',
    age: 'aaaaa',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
  },
  {
    name: 'rrrrrrrr',
    image: 'http://www.hdwallpapersfreedownload.com/uploads/large/animals/dog-image.jpg',
    age: 'aaaaa',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
  },
  {
    name: 'ffffffffffffff',
    image: 'http://www.hdwallpapersfreedownload.com/uploads/large/animals/dog-image.jpg',
    age: 'aaaaa',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
  }
]

function DogList (props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} >
        {
        dogsList.map((dog, index) => {
          return <DogCard key={index} name={dog.name} image={dog.image} description={dog.description} age={dog.age} details={dog} />
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
