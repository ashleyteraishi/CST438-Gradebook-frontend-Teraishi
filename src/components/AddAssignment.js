import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


// properties addAssignment is required, function called when Add clicked.
class AddAssignment extends Component {
      constructor(props) {
      super(props);
      this.state = {open: false, assignment: [],};
    };
    
    handleClickOpen = () => {
      this.setState( {open:true} );
    };

    handleClose = () => {
      this.setState( {open:false} );
    };

    // set state when user enters data in dialog content
    handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
    }

    // Save assignment and close modal form
    handleAdd = () => {
      const assignment = {
        courseId: this.state.courseId,
        assignmentName: this.state.assignmentName,
        dueDate: this.state.dueDate
      };
      this.props.addAssignment(assignment);
      this.handleClose();
    }

    render()  { 
      return (
          <div>
            <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
              Add Assignment
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Add Assignment</DialogTitle>
                <DialogContent  style={{paddingTop: 20}} >
                  <TextField autoFocus fullWidth label="Assignment Name" name="assignmentName" onChange={this.handleChange} style={{marginTop: 20}} /> 
                  <TextField fullWidth label="Course Id" name="courseId" onChange={this.handleChange} style={{marginTop: 20}}/> 
                  <TextField fullWidth label="Due Date" name="dueDate" onChange={this.handleChange} style={{marginTop: 20}} /> 
                </DialogContent>
                <DialogActions>
                  <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                  <Button color="primary" onClick={this.handleAdd}>Add</Button>
                </DialogActions>
              </Dialog>      
          </div>
      ); 
    }
}

// required property:  addCourse is a function to call to perform the Add action
AddAssignment.propTypes = {
  addAssignment : PropTypes.func.isRequired
}

export default AddAssignment;
