import React from "react";
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import useShowModal from "../../hooks/useShowModal";
import MenuIcon from '@mui/icons-material/Menu';
import SlideMenu from "../slideMenu/SlideMenu";
import HeaderNav from "./HeaderNav";

import "../../style/helper.scss";

interface Props {
    window?: () => Window;
}

export interface INavItem {
    title: string;
    link: string;
}

export const navItems = [
    {
        title: "Login",
        link: "/login"
    }
];


const Header = (props: Props) => {
    const { handleDrawerToggle, mobileOpen } = useShowModal();

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar className="space-between">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to="/">
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            MUI
                        </Typography>
                    </Link>
                    <HeaderNav navItems={navItems}/>
                </Toolbar>
            </AppBar>
            <SlideMenu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
        </Box>
    )
}
export default Header;