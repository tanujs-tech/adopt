import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import './details.css';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

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
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleClickOpen}>Details</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Card style={{ marginBottom: '10px'}}>
                <CardContent>
                  <Typography className="details-heading">{this.props.details.name}</Typography>
                  <Typography component="p" className="details-body">
                    Name
                </Typography>
                </CardContent>
              </Card>
              <Card style={{ marginBottom: '10px'}}>
                <CardContent>
                  <Typography className="details-heading">{this.props.details.age}</Typography>
                  <Typography component="p" className="details-body">
                    Age
                </Typography>
                </CardContent>
              </Card>
              <Card style={{ marginBottom: '10px'}}>
                <CardContent>
                  <Typography className="details-heading">{this.props.details.description}</Typography>
                  <Typography component="p" className="details-body">
                    Description
                </Typography>
                </CardContent>
              </Card>
              <Card style={{ marginBottom: '10px'}}>
                <CardContent>
                  <Typography className="details-heading">breed</Typography>
                  <Typography component="p" className="details-body">
                    Breed
                </Typography>
                </CardContent>
              </Card>
              <Card style={{ marginBottom: '10px'}}>
                <CardContent>
                  <Typography className="details-heading">breed</Typography>
                  <Typography component="p" className="details-body">
                    Criticality Of Adoption
                </Typography>
                </CardContent>
              </Card>
              <Card style={{ marginBottom: '10px'}}>
                <CardContent>
                  <Typography className="details-heading">breed</Typography>
                  <Typography component="p" className="details-body">
                    Medical Condition
                </Typography>
                </CardContent>
              </Card>
              <Card style={{ marginBottom: '10px'}}>
                <CardContent>
                  <Typography className="details-heading">breed</Typography>
                  <Typography component="p" className="details-body">
                    Minimum Sponsor Amount
                </Typography>
                </CardContent>
              </Card>
              <Card style={{ marginBottom: '10px'}}>
                <CardContent>
                  <Typography className="details-heading">breed</Typography>
                  <Typography component="p" className="details-body">
                    Profile Picture
                </Typography>
                </CardContent>
              </Card>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Details;