import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

class Details extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Details</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Detail"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <table>
                <tr>
                  <td><b>Name</b></td>
                  <td>{this.props.details.name}</td>
                </tr>
                <tr>
                  <td><b>Age</b></td>
                  <td>{this.props.details.age}</td>
                </tr>
                <tr>
                  <td><b>Description</b></td>
                  <td>{this.props.details.description}</td>
                </tr>
                <tr>
                  <td><b>Breed</b></td>
                  <td></td>
                </tr>
                <tr>
                  <td><b>Criticality Of Adoption</b></td>
                  <td></td>
                </tr>
                <tr>
                  <td><b>Medical Condition</b></td>
                  <td></td>
                </tr>
                <tr>
                  <td><b>Minimum Sponsor Amount</b></td>
                  <td></td>
                </tr>
                <tr>
                  <td><b>Profile Picture</b></td>
                  <td></td>
                </tr>
              </table>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Details;