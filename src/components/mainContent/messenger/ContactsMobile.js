import React, {Component} from "react";
import Contact from "./Contact";
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";

const contacts = [
    {
        name: "Jan Kowalski",
        id: 1
    },
    {
        name: "Piotr Nowak",
        id: 2
    }
]

class ContactsMobile extends Component {

    contacts = [];

    fetchContacts() {
        return new Promise(((resolve, reject) => {
            resolve(contacts);
            reject(new Error("Nie udało się pobrać kontaktów"))
        }))
    }

    getContacts = () => {
        this.fetchContacts()
            .then(response => {
                this.contacts = response;
            })
            .catch(error => alert(error));
    }

    componentDidMount() {
        this.getContacts();
    }

    render() {
        return (
            <Grid container direction="column">
                <Grid item>
                    <Box m={1} width="100%">
                        <Grid container alignItems="center">
                            <Grid item>
                                <Box m={1}>
                                    <RecentActorsIcon fontSize="large"/>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" noWrap>
                                    Kontakty
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                {
                    contacts.length !== 0 && contacts.map(contact => (
                        <Grid key={contact.id} item>
                            <Contact name={contact.name}/>
                        </Grid>
                    ))
                }
            </Grid>
        );
    }
}

export default ContactsMobile;
