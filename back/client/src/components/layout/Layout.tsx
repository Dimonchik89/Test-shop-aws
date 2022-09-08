import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Container, Box } from '@mui/material';
import { Outlet } from "react-router-dom";

import "../../style/wrapper.scss"

const Layout: React.FC = () => {

    return (
        <Box className="wrapper">
            <Box>
                <Header/>
                <Container>
                    <Outlet/>
                </Container>
            </Box>
            <Footer/>
        </Box>
    )
}
export default Layout;