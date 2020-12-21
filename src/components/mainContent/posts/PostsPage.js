import React, {Component} from "react";
import {InputBaseLayout, StyledSearchPanel} from "../../../styles/mainContentStyles";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";


class PostsPage extends Component {
    render() {
        return (
            <StyledSearchPanel>
                <InputBaseLayout placeholder="Szukaj"/>
                <IconButton type="submit">
                    <SearchIcon/>
                </IconButton>
            </StyledSearchPanel>
        );
    }
}

export default PostsPage;
