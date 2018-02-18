import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  state = {
    age_range: 'all',
    friend_type: 'all',
    breed: 'all',
    city: 'all',
    name: 'hai',
    risk: 'all',
    medical_condition: 'no'
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="friend_type">Friend Type</InputLabel>
          <Select
            value={this.state.friend_type}
            onChange={this.handleChange}
            inputProps={{
              name: 'friend_type',
              id: 'friend_type',
            }}
          >
            <MenuItem value={this.state.friend_type}>
              <em>all</em>
            </MenuItem>
            <MenuItem value='dog'>Dog</MenuItem>
            <MenuItem value='cat'>Cat</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age_range">Age Range</InputLabel>
          <Select
            value={this.state.age_range}
            onChange={this.handleChange}
            inputProps={{
              name: 'age_range',
              id: 'age_range',
            }}
          >
            <MenuItem value={this.state.age_range}>
              <em>All</em>
            </MenuItem>
            <MenuItem value='1-2-years'>1-2 Years</MenuItem>
            <MenuItem value='2-7-years'>2-7 Years</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="breed">Breed</InputLabel>
          <Select
            value={this.state.breed}
            onChange={this.handleChange}
            inputProps={{
              name: 'breed',
              id: 'breed',
            }}
          >
            <MenuItem value={this.state.breed}>
              <em>all</em>
            </MenuItem>
            <MenuItem value='AIREDALE TERRIER'>AIREDALE TERRIER</MenuItem>
            <MenuItem value='AMERICAN ESKIMO DOG'>AMERICAN ESKIMO DOG</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="risk">Risk</InputLabel>
          <Select
            value={this.state.risk}
            onChange={this.handleChange}
            inputProps={{
              name: 'risk',
              id: 'risk',
            }}
          >
            <MenuItem value={this.state.risk}>
              <em>all</em>
            </MenuItem>
            <MenuItem value='minor'>minor</MenuItem>
            <MenuItem value='major'>major</MenuItem>
            <MenuItem value='critical'>critical</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="medical_condition">Medical Condition</InputLabel>
          <Select
            value={this.state.medical_condition}
            onChange={this.handleChange}
            inputProps={{
              name: 'medical_condition',
              id: 'medical_condition',
            }}
          >
            <MenuItem value={this.state.medical_condition}>
              <em>no</em>
            </MenuItem>
            <MenuItem value='yes'>Yes</MenuItem>
          </Select>
        </FormControl>

      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);