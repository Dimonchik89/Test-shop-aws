import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const AdminNav = () => {

    const adminLinks = [
        {
            title: "Create type",
            link: "type"
        },
        {
            title: "Create category",
            link: "category"
        },
        {
            title: "Create product",
            link: "product"
        },
        {
            title: "Order",
            link: "order"
        },
        {
            title: "User",
            link: "user"
        }
    ]

    const links = adminLinks.map((item, i) => <Link key={i} to={item.link}>
                                                {item.title}
                                              </Link>)

    return (
        <Box className="d-flex space-between">
            {links}
        </Box>
    )
}
export default AdminNav;