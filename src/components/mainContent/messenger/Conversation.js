import React, {Component} from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import {IconButton, Typography} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Messages from "./Messages";
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import {Link} from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import {FullHeightGrid} from "../../../styles/gridStyles";
import Box from "@material-ui/core/Box";

const messagesDb = [
    {
        id: 1,
        senderId: 3,
        senderName: "User",
        recipientId: 2,
        recipientName: "Jan Kowalski",
        timestamp: '11:05',
        content: 'Wiadomość wychodzącaLorem ipsum lorem ipsum'
    },
    {
        id: 2,
        senderId: 2,
        senderName: "Jan Kowalski",
        recipientId: 3,
        recipientName: "User",
        timestamp: '10:59',
        content: 'Wiadomość przychodząca Lorem ipsum lorem ipsum'
    }
];

class Conversation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isComponentReady: false
        }
    }


    //to be deleted after implementing server functionality
    fetchMessages(userId, contactId) {
        return new Promise((resolve, reject) => {
            resolve(messagesDb);
            reject(new Error("Nie udało się pobrać wiadomości"))
        })
    }

    getMessages = (userId, contactId) => {
        this.fetchMessages(userId, contactId)
            .then(response => {
                this.setState({
                    messages: response,
                    isComponentReady: true
                });
            })
            .catch(error => {
                alert(error);
            })
    }

    componentDidMount() {
        this.getMessages(1, 2);
    }

    render() {
        const {contact} = this.props;
        const {isComponentReady, messages} = this.state;
        return (
            isComponentReady &&
            <FullHeightGrid container direction="column" justify="space-between">
                <Grid item>
                    <Box p={1}>
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item>
                                <Typography variant="h6">{contact.name}</Typography>
                            </Grid>
                            <Hidden smUp>
                                <Grid item>
                                    <IconButton size='small' component={Link} to='/wiadomosci/kontakty'>
                                        <RecentActorsIcon fontSize='large'/>
                                    </IconButton>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Box>
                    <Divider/>
                </Grid>
                <Grid item xs container direction="column" justify="flex-end">
                    <Box p={1}>
                        <Grid item>
                            <Messages messages={messages}/>
                        </Grid>
                        <Grid item>
                            <Paper>
                                <InputBase multiline fullWidth/>
                                <IconButton size='small'>
                                    <SendIcon fontSize='small' color='primary'/>
                                </IconButton>
                            </Paper>
                        </Grid>
                    </Box>
                </Grid>
            </FullHeightGrid>
        );
    }
}

export default Conversation;