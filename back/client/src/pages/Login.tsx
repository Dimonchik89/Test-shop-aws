import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { bindActionCreators } from "redux";
import { AppDispatch } from "../store/store";
import { connect, ConnectedProps } from "react-redux";
import { fetchUser } from "../store/user/userSlice";
import { TUserData } from "../types/types";
import RegisterForm from "../components/form/RegisterForm";
import { composeValidators, required, email, minValue} from "../validate/validate";
import { Link } from "react-router-dom";
import { token } from "../store/user"
import { createStructuredSelector } from "reselect";
 
import "../style/helper.scss";


const Login: React.FC<HeaderProps> = ({fetchUser, token}) => {

    const onSubmit = (value: TUserData) => {
        fetchUser({
            url: "/api/user/login",
            email: value.email,
            password: value.password
        })
    }

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
                title="Login" 
                onSubmit={onSubmit} 
                formFields={formFields}
            />
            <Box className="mt-64 align-center">
                <Link to="/register">
                    <Typography
                        variant="h5"
                        component="h4"
                    >
                        Register
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


export default connector(Login);