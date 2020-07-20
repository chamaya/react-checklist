import React, {Component} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

class Customer extends Component {
    render(){
        const {firstName, lastName, onDeleteCustomer, isDeleting, classes} = this.props;
        return (
            <div /*style={{display : "flex", flexDirection : "row", justifyContent :"left", flexWrap : "nowrap", borderBottom: "1px dotted #777", margin: "auto", width: "30%"}}*/>
                { firstName }&nbsp;{lastName }
                <IconButton aria-label="delete" className={classes.demo} >
                    <DeleteIcon onClick={ onDeleteCustomer }/>
                </IconButton>
            { isDeleting ? "PROCESSING": "" }
            </div>
        );
    }
}

const useStyles = (theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    // title: {
    //   margin: theme.spacing(4, 0, 2),
    // },
  });


export default withStyles(useStyles)(Customer);
