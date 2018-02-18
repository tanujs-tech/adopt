import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Button from 'material-ui/Button';
import Save from 'material-ui-icons/Save';
import { createPetAndAdoptionRequest } from '../../actions/pet'
import { isShelterOwner } from '../../actions/account'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Paper from 'material-ui/Paper'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  formControl: {
    margin: theme.spacing.unit,
    display: 'flex'
  },
  card: {
    width: '80%',
    maxWidth: 400,
    margin: 10,
  },
  submitButton: {
    display: 'flex',
    justifyContent:'center',
    margin: 20
  },
  media: {
    height: 80,
    width: 80,
    margin: 10,
    backgroundColor: 'lightBlue'
  },
  profilePic: {
    display: 'flex'
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
});

class PetListingForm extends React.Component {
  state = {
    name: '',
    age: '',
    risk: '',
    breed: '',
    city: '',
    profile: '',
    medical_condition: '',
    file: null,
    profileImage: '',
    description: '',
    criticality_of_adoption:'',
    minimumAmount: ''
  };

  handleChange = event => {
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFileChange = event => {
    this.setState({ file: event })
    console.log(event)

    var reader = new FileReader();

    var url = reader.readAsDataURL(event);

    reader.onloadend = function (e) {
        this.setState({
          profileImage: [reader.result]
        })
      }.bind(this)
  }

  handleFormSubmit = event => {
    event.preventDefault()

    if(this.props.isShelterOwner) {
      this.props.createPetAndAdoptionRequest(
        this.state.name,
        this.state.age,
        this.state.risk,
        this.state.breed,
        this.state.medical_condition,
        this.state.description,
        this.state.file,
        this.props.shelterId,
        this.state.minimumAmount
      );
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
         <Paper className={classes.paper} elevation={4} style={{marginTop:0}}>
        Add Pet
      </Paper>
      <div className={classes.container}>
        <Card className={classes.card}>
          <form onSubmit={this.handleFormSubmit}>
          <div className={classes.profilePic}>
          <CardMedia
            className={classes.media}
            image={this.state.profileImage}
            title='Contemplative Reptile'
          >
          <img src="images/nature-600-337.jpg" alt="" />
          </CardMedia>
          <Button
                 // <-- Just add me!
                label='My Label'>
                <input type="file" name="myImage" accept="image/*" onChange={ (e) => this.handleFileChange(e.target.files[0]) }/>
              </Button>
              </div>
            <FormControl className={classes.formControl} aria-describedby="name-helper-text">
              <InputLabel htmlFor="name-helper">Name</InputLabel>
              <Input required name="name" value={this.state.name} onChange={this.handleChange} />
              <FormHelperText id="name-helper-text">Name of the pet</FormHelperText>
            </FormControl>

            <FormControl className={classes.formControl} aria-describedby="name-helper-text">
              <InputLabel htmlFor="name-helper">Age</InputLabel>
              <Input required name="age" value={this.state.age} onChange={this.handleChange} />
              <FormHelperText id="name-helper-text">Age of pet</FormHelperText>
            </FormControl>

            <FormControl className={classes.formControl} aria-describedby="name-helper-text">
              <InputLabel htmlFor="name-helper">Description</InputLabel>
              <Input required name="description" value={this.state.description} onChange={this.handleChange} />
              <FormHelperText id="name-helper-text">Description of pet</FormHelperText>
            </FormControl>

            <FormControl className={classes.formControl} aria-describedby="name-helper-text">
              <InputLabel htmlFor="name-helper">Breed</InputLabel>
              <Input required name="breed" value={this.state.breed} onChange={this.handleChange} />
              <FormHelperText id="name-helper-text">Breed of pet</FormHelperText>
            </FormControl>

            <FormControl className={classes.formControl} aria-describedby="name-helper-text">
              <InputLabel htmlFor="name-helper">Risk </InputLabel>
              <Input required name="risk" value={this.state.risk} onChange={this.handleChange} />
              <FormHelperText id="name-helper-text">Criticality of adoption</FormHelperText>
            </FormControl>

            <FormControl className={classes.formControl} aria-describedby="name-helper-text">
              <InputLabel htmlFor="name-helper">Medical Condition</InputLabel>
              <Input required name="medical_condition" value={this.state.medical_condition} onChange={this.handleChange} />
              <FormHelperText id="name-helper-text">Medical Condition of pet</FormHelperText>
            </FormControl>

            <FormControl className={classes.formControl} aria-describedby="name-helper-text">
              <InputLabel htmlFor="name-helper">Minimum Sponsor Amount</InputLabel>
              <Input required name="minimumAmount" value={this.state.minimumAmount} onChange={this.handleChange} />
              <FormHelperText id="name-helper-text">Minimum Sponsor Amount</FormHelperText>
            </FormControl>

            <div className={classes.submitButton}>
              <Button type='submit' className={classes.button} variant="raised" size="small">
                <Save className={classes.leftIcon} />
                Save
            </Button>

            </div>
          </form>
        </Card>
      </div>
      </div>
    );
  }
}

PetListingForm.propTypes = {
  classes: PropTypes.object.isRequired,
  createPetRequest: PropTypes.func.isRequired,
  isShelterOwner: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  isShelterOwner: state.account.isShelterOwner,
  shelterId: state.account.shelterId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createPetAndAdoptionRequest: (name, age, risk, breed, medical_condition, description, file, shelterId, amountRequired) => (
    dispatch(createPetAndAdoptionRequest(name, age, risk, breed, medical_condition, description, file, shelterId, amountRequired))
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PetListingForm))
