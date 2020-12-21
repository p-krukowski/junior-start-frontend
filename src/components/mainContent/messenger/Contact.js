import React, {Component} from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Typography} from "@material-ui/core";

class Contact extends Component {
    render() {
        return (
            <ListItem button component={Link} to='/wiadomosci'>
                <ListItemIcon>
                    <AccountCircleIcon/>
                </ListItemIcon>
                <ListItemText
                    primary={<Typography noWrap>{this.props.name}</Typography>}
                />
            </ListItem>
        );
    }
}

export default Contact;
