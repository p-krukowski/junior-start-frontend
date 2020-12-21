import React, {Component} from 'react';
import Contacts from "./Contacts";
import Conversation from "./Conversation";
import {Divider} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import {FullHeightGrid} from "../../../styles/gridStyles";
import Box from "@material-ui/core/Box";


class MessengerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            demoContact: {
                name: 'Jan Kowalski',
                id: '1'
            },
            isComponentReady: true
        }
    }

    render() {
        const {demoContact, isComponentReady} = this.state;
        return (
            isComponentReady &&
            <Box m={{xs: -1, sm: -2}} mx={{md: -4, lg: -10}} height="100%">
                <FullHeightGrid container>
                    <Hidden xsDown>
                        <Grid item xs={4}>
                            <Contacts/>
                        </Grid>
                        <Divider orientation="vertical" flexItem/>
                    </Hidden>
                    <Grid item xs>
                        <Conversation contact={demoContact}/>
                    </Grid>
                </FullHeightGrid>
            </Box>
        );
    }
}

export default MessengerPage;