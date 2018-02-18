import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Button from 'material-ui/Button';
import Save from 'material-ui-icons/Save';
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
    justifyContent: 'center',
    margin: 20
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
});

class ShelterRegistrationForm extends React.Component {
  state = {
    shelter_name: '',
    address: '',
    registration_id: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault()
    if (this.state.shelter_name.length > 0 &&
      this.state.address.length > 0 &&
      this.state.registration_id.length > 0
    ) {
      this.props.createShelter(
        this.state.shelter_name,
        this.state.address,
        this.state.registration_id,
        'metadata IPFS hash',
        '0xf17f52151EbEF6C7334FAD080c5704D77216b732'
      )
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
         <Paper className={classes.paper} elevation={4} style={{marginTop:0}}>
        Register Shelter
      </Paper>
      <div className={classes.container}>
        <Card className={classes.card}>

          <form onSubmit={this.handleFormSubmit}>
            <FormControl className={classes.formControl} aria-describedby="name-helper-text">
              <InputLabel htmlFor="name-helper">Name</InputLabel>
              <Input required name="shelter_name" value={this.state.name} onChange={this.handleChange} />
              <FormHelperText id="name-helper-text">Name of the shelter</FormHelperText>
            </FormControl>

            <FormControl className={classes.formControl} aria-describedby="name-helper-text">
              <InputLabel htmlFor="name-helper">Address</InputLabel>
              <Input required name="address" value={this.state.name} onChange={this.handleChange} />
              <FormHelperText id="name-helper-text">Physical address of shelter</FormHelperText>
            </FormControl>

            <FormControl className={classes.formControl} aria-describedby="name-helper-text">
              <InputLabel htmlFor="name-helper">Registration ID </InputLabel>
              <Input required name="registration_id" value={this.state.name} onChange={this.handleChange} />
              <FormHelperText id="name-helper-text">Registration ID Number</FormHelperText>
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

ShelterRegistrationForm.propTypes = {
  classes: PropTypes.object.isRequired,
  createShelter: PropTypes.func.isRequired,
};

export default withStyles(styles)(ShelterRegistrationForm);
