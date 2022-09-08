import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { INavItem } from "./Header";
import { email, role } from "../../store/user";
import { createStructuredSelector } from "reselect";
import { connect, ConnectedProps } from "react-redux";

import "../../style/helper.scss";

interface IHeaderNAvProps extends HeaderType {
    navItems: INavItem[]
}

const HeaderNav: React.FC<IHeaderNAvProps> = ({navItems, email, role}) => { 

    const adminButtom = role === "ADMIN" ? 
        <Link to="/admin">
            <Typography
                sx={{ color: '#fff' }}
            >
                Admin
            </Typography>
        </Link> : null;
    
    return (
        <Box className="d-flex" sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map((item) => (
                <Link 
                    to={item.link} 
                    key={item.link}
                    className="mx-1"
                >
                    <Typography
                        sx={{ color: '#fff' }}
                    >
                        {item.title == "Login" && email ? email : item.title}
                    </Typography>
                </Link>
            ))}
            {adminButtom}
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    email,
    role
})

const connector = connect(mapStateToProps)

type HeaderType = ConnectedProps<typeof connector>

export default connector(HeaderNav);