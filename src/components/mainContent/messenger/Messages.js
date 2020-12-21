import React, {Component} from "react";
import Message from "./Massage";
import {FullHeightGrid} from "../../../styles/gridStyles";

class Messages extends Component {

    render() {
        const {messages} = this.props;
        return (
            <FullHeightGrid container direction="column" justify="flex-end">
                {
                    messages.length !== 0 && messages.map(message => (
                        <Message key={message.id} message={message}/>
                    ))
                }
            </FullHeightGrid>
        );
    }
}

export default Messages;
