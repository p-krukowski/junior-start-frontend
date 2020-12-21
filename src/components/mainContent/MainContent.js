import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import {InputBaseLayout, StyledSearchPanel,} from "../../styles/mainContentStyles";
import Grid from "@material-ui/core/Grid";

const MainContent = () => (
    <Grid container direction="column">
        <Grid item>
            <StyledSearchPanel>
                <InputBaseLayout placeholder="Szukaj"/>
                <IconButton type="submit">
                    <SearchIcon/>
                </IconButton>
            </StyledSearchPanel>
        </Grid>
    </Grid>
);

export default MainContent;
