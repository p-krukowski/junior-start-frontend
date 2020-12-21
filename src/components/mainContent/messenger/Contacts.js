import React, {Component} from "react";
import Contact from "./Contact";
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import Box from "@material-ui/core/Box";
import {Grid, Typography} from "@material-ui/core";

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

class Contacts extends Component {

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
                    <Box m={1}>
                        <Grid container wrap="nowrap" alignItems="center">
                            <Grid item xs={3}>
                                <RecentActorsIcon fontSize="large"/>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h6" noWrap>
                                    Kontakty
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                {
                    contacts.length !== 0 && contacts.map(contact => (
                        <Grid key={contact.id} item xs={12}>
                            <Contact name={contact.name}/>
                        </Grid>
                    ))
                }
            </Grid>
        );
    }
}

export default Contacts;
