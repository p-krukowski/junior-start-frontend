import React from "react";
import Button from "@material-ui/core/Button";
import {Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const RightMenu = () => (
    <Box p={2}>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Button variant="outlined" color="primary" fullWidth>
                    Stwórz projekt
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" color="primary" fullWidth>
                    Dodaj kod
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" color="primary" fullWidth>
                    Szukaj pracy
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" color="primary" fullWidth>
                    Dodaj post na forum
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" color="primary" fullWidth>
                    Nabór do projektu
                </Button>
            </Grid>
        </Grid>
    </Box>
);

export default RightMenu;
