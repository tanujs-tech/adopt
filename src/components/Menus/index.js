import React from 'react';
import Button from 'material-ui/Button';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu, { MenuItem } from 'material-ui/Menu';
import { Link } from 'react-router-dom'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  title: {
    color: 'white'
  }
});

class Menus extends React.Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          style={{color:'white'}}
        >
          Admin
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose} component={Link} to="/add-pet">Add Pet</MenuItem>
          <MenuItem onClick={this.handleClose} component={Link} to="/register-shelter">Register Shelter</MenuItem>
          <MenuItem onClick={this.handleClose} component={Link} to="/pet-listing">Pet Listing</MenuItem>
        </Menu>
      </div>
    );
  }

}

export default Menus
