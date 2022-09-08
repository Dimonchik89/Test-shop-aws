import React, { useEffect } from "react";
import RegisterForm from "../components/form/RegisterForm";
import { AppDispatch } from "../store/store";
import { fetchUser } from "../store/user/userSlice";
import { bindActionCreators } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { TUserData } from "../types/types";
import { composeValidators, required, email, minValue} from "../validate/validate";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { token } from "../store/user";
import { createStructuredSelector } from "reselect";

import "../style/helper.scss";

const Register: React.FC<HeaderProps> = ({fetchUser, token}) => {

    const onSubmit = (value: TUserData) => {
        console.log(value);
        
        fetchUser({
            url: "/api/user/register",
            email: value.email,
            password: value.password
        })
    };

    useEffect(() => {
        if(token) {
            localStorage.setItem("token", token)
        }
    }, [token])

    const formFields = [
        {
            name: "email",
            type: "text",
            label: "Email",
            validate: composeValidators(required, email),
        },
        {
            name: "password",
            type: "password",
            label: "Password",
            validate: composeValidators(required, minValue(3)),
        }
    ]

    return (
        <>
            <RegisterForm 
                onSubmit={onSubmit} 
                formFields={formFields} 
                title="Register"
            />
            <Box className="mt-64 align-center">
                <Link to="/login">
                    <Typography
                        variant="h5"
                        component="h4"
                    >
                        Login
                    </Typography>
                </Link>
            </Box>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    token
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchUser: bindActionCreators(fetchUser, dispatch)
})

const connector = connect(mapStateToProps, mapDispatchToProps);

type HeaderProps = ConnectedProps<typeof connector>

export default connector(Register);