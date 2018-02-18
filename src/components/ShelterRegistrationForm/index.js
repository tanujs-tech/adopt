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
    console.log(this.state, '>>>>>>>>>>>>>>>>')
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
};

export default withStyles(styles)(ShelterRegistrationForm);