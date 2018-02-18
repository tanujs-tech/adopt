import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Button from 'material-ui/Button';
import Save from 'material-ui-icons/Save';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
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
        '0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef'
      )
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
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

          <Button type='submit' className={classes.button} variant="raised" size="small">
            <Save className={classes.leftIcon} />
            Save
          </Button>
        </form>
      </div>
    );
  }
}

ShelterRegistrationForm.propTypes = {
  classes: PropTypes.object.isRequired,
  createShelter: PropTypes.func.isRequired,
};

export default withStyles(styles)(ShelterRegistrationForm);
