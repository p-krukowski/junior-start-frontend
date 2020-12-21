import React, {Component} from "react";
import {Grid, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

const user = {
    id: 3,
    name: 'User'
}

class Message extends Component {

    isMessageOutcoming() {
        return this.props.message.senderId === user.id;
    }

    render() {
        const {message} = this.props;
        return (
            <Box mb={1}>
                <Grid
                    container
                    direction={this.isMessageOutcoming() ? 'row-reverse' : 'row'}
                >
                    <Grid item xs={9}>
                        <Paper elevation={0}>
                            <Box px={2} py={1}>
                                {message.content}
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} container alignItems="center" justify="center">
                        <Box>
                            <Typography variant="caption">
                                {message.timestamp}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default Message;