import { useEffect } from "react";
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import { navItems } from "../header/Header";

interface Props {
    window?: () => Window;
    mobileOpen: boolean;
    handleDrawerToggle: () => void;
}

const SlideMenu = (props: Props) => {
    const { window, mobileOpen, handleDrawerToggle } = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box component="nav">
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "240" },
            }}
            >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ my: 2 }}>
                    MUI
                    </Typography>
                    <Divider />
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item.link} disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}
export default SlideMenu;