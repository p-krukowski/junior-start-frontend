import React, {useEffect} from 'react';
import Layout from "./styles/Layout";
import Navbar from "./components/navbar/Navbar";
import MainContent from "./components/mainContent/MainContent";
import RightMenu from "./components/rightMenu/RightMenu";
import Footer from "./components/footer/Footer";
import Divider from "@material-ui/core/Divider";
import {history} from "./utils";
import {useDispatch, useSelector} from "react-redux";
import {alertActions, userActions} from "./actions";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import OAuth2RedirectHandler from "./components/oauth2/OAuth2RedirectHandler";
import {loggedInSelector} from "./selectors";
import MessengerPage from "./components/mainContent/messenger/MessengerPage";
import AccountSettingsPage from "./components/mainContent/accountPage/AccountSettingsPage";
import Grid from "@material-ui/core/Grid";
import {Hidden} from "@material-ui/core";
import {FullHeightGrid} from "./styles/gridStyles";
import ContactsMobile from "./components/mainContent/messenger/ContactsMobile";
import Box from "@material-ui/core/Box";

function App() {
    const loggedIn = useSelector(loggedInSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getCurrentUser());
        history.listen(function (location, action) {
            dispatch(alertActions.clear());
        });
    }, [dispatch, loggedIn]);

    return (
        <Router>
            <Layout>
                <Navbar/>
                <FullHeightGrid container>
                    <Grid item xs>
                        <Box p={{xs: 1, sm: 2}} px={{md: 4, lg: 10}} height="100%">
                            <Switch>
                                <Route path="/profile" component={() => <div>Profile</div>} exact/>
                                <Route exact component={MainContent} path="/"/>
                                <Route exact component={MessengerPage} path="/wiadomosci"/>
                                <Route exact component={ContactsMobile} path='/wiadomosci/kontakty'/>
                                <Route exact component={AccountSettingsPage} path="/moje-konto/ustawienia"/>
                                <Route
                                    path="/oauth2/redirect"
                                    component={OAuth2RedirectHandler}
                                />
                            </Switch>
                        </Box>
                    </Grid>
                    <Hidden only="xs">
                        <Divider orientation="vertical" flexItem/>
                        <Grid item xs={3} sm={4} md={3} xl={2}>
                            <RightMenu/>
                        </Grid>
                    </Hidden>
                </FullHeightGrid>
                <Divider/>
                <Footer/>
            </Layout>
        </Router>
    );
}

export default App;

App.propTypes = {
    alert: PropTypes.object,
    loggedIn: PropTypes.bool,
};
