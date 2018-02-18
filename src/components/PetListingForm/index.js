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

class PetListingForm extends React.Component {
  state = {
    name: '',
    age: '',
    risk: '',
    breed: '',
    city: '',
    profile: '',
    medical_condition: ''
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
            <Input required name="name" value={this.state.name} onChange={this.handleChange} />
            <FormHelperText id="name-helper-text">Name of the pet</FormHelperText>
          </FormControl>

          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
            <InputLabel htmlFor="name-helper">Age</InputLabel>
            <Input required name="age" value={this.state.age} onChange={this.handleChange} />
            <FormHelperText id="name-helper-text">Age of pet</FormHelperText>
          </FormControl>

          <FormControl className={classes.formControl} aria-describedby="name-helper-text">
            <InputLabel htmlFor="name-helper">Risk </InputLabel>
            <Input required name="risk" value={this.state.risk} onChange={this.handleChange} />
            <FormHelperText id="name-helper-text">Criticality of adoption</FormHelperText>
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

PetListingForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PetListingForm);
