import React from "react";
import {Formik} from "formik";
import Button from "@material-ui/core/Button";
import {CustomCheckboxWithLabel, TextInput} from "../common";
import {registerValidationSchema} from "../../utils/validation";
import {useDispatch} from "react-redux";
import {authenticationActions} from "../../actions";
import Grid from "@material-ui/core/Grid";
import {Divider, Typography} from "@material-ui/core";
import ReCAPTCHA from "react-google-recaptcha";
import OAuth2Signin from "../oauth2/OAuth2Signin";

const SignUpForm = () => {
    const dispatch = useDispatch();

    function signUp(username, email, password) {
        dispatch(authenticationActions.signUp({username, email, password}));
    }

    return (
        <Grid container direction='column' spacing={2}>
            <Grid item>
                <Typography variant={"h6"}>Zarejestruj się</Typography>
            </Grid>
            <Grid item>
                <Divider/>
            </Grid>
            <Grid item>
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                        passwordConfirm: "",
                        email: "",
                        acceptedTerms: false,
                        recaptcha: ""
                    }}
                    validationSchema={registerValidationSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        signUp(values.username, values.email, values.password);
                        setSubmitting(false);
                    }}
                >
                    {({setFieldValue, errors, touched}) => (
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item container direction={"column"}>
                                <TextInput
                                    label="Nazwa użytkownika"
                                    variant="outlined"
                                    name="username"
                                    type="text"
                                />
                            </Grid>
                            <Grid item container direction={"column"}>
                                <TextInput
                                    label="E-mail"
                                    variant="outlined"
                                    name="email"
                                    type="email"
                                />
                            </Grid>
                            <Grid item container direction={"column"}>
                                <TextInput
                                    label="Hasło"
                                    variant="outlined"
                                    name="password"
                                    type="password"
                                />
                            </Grid>
                            <Grid item container direction={"column"}>
                                <TextInput
                                    label="Potwierdź hasło"
                                    variant="outlined"
                                    name="passwordConfirm"
                                    type="password"
                                />
                            </Grid>
                            <CustomCheckboxWithLabel
                                name="acceptedTerms"
                                color="primary"
                                label="Akceptuję regulamin"
                            />
                            <Grid item container direction={"column"}>
                                <ReCAPTCHA
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                    onChange={(response) => setFieldValue("recaptcha", response)}
                                    theme="dark"
                                />
                                {errors.recaptcha && touched.recaptcha && (
                                    <p
                                        style={{
                                            color: "red",
                                        }}
                                    >
                                        {errors.recaptcha}
                                    </p>
                                )}
                            </Grid>
                            <Grid item container direction={"column"}>
                                <Button type="submit" variant="contained" color="primary">
                                    Zarejestruj
                                </Button>
                            </Grid>
                            <Grid item container justify={"center"}>
                                lub
                            </Grid>
                            <Grid item container justify={"center"}>
                                <OAuth2Signin/>
                            </Grid>
                        </Grid>
                    )}
                </Formik>
            </Grid>
        </Grid>
    );
};

export default SignUpForm;
