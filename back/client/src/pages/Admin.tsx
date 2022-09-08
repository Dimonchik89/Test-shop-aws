import { Box, Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import AdminType from "../components/admin/AdminType";
import AdminCategory from "../components/admin/AdminCategory";
import AdminProduct from "../components/admin/AdminProduct";
import AdminOrder from "../components/admin/AdminOrder";
import AdminUser from "../components/admin/AdminUser";
import AdminNav from "../components/admin/AdminNav";
import AdminUserList from "../components/admin/AdminUserList";
import AdminTypeList from "../components/admin/AdminTypeList";
import AdminCreateType from "../components/admin/AdminCreateType";
import AdminCategoryList from "../components/admin/AdminCategoryList";

import { Admin as AdminComponent, Resource, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import "../style/helper.scss";

const Admin = () => {

    const fetchJson = (url: any, options: any = {}) => {
        if (!options.headers) {
            options.headers = new Headers({ Accept: 'application/json' });
        }
        options.headers.set('Access-Control-Expose-Headers', 'X-Total-Count');
        options.headers.authorization = `Bearer ${localStorage.getItem("token")}`
        console.log("admin", options.headers.authorization);
        console.log("admin", options.body);
        
        return fetchUtils.fetchJson(url, options);
    }

    const dataProvider = jsonServerProvider('http://localhost:5000/api', fetchJson);

    return (
        <>
        <Box className="mt-64">
            {/* <Typography
                variant="h2"
                component="h2"
                align="center"
            >
                Admin
            </Typography>
            <AdminNav/> */}
            {/* <Box> */}
                {/* <Routes>
                    <Route path="type" element={<AdminType/>}/>
                    <Route path="category" element={<AdminCategory/>}/>
                    <Route path="product" element={<AdminProduct/>}/>
                    <Route path="order" element={<AdminOrder/>}/>
                    <Route path="user" element={<AdminUser/>}/>
                </Routes> */}
                
            {/* </Box> */}
            <AdminComponent dataProvider={dataProvider} basename="/admin">
                <Resource name="user" list={AdminUserList}/>
                <Resource name="type" list={AdminTypeList} create={AdminCreateType}/>
                <Resource name="category" list={AdminCategoryList}/>
            </AdminComponent>
        </Box>
            
        </>
    )
}
export default Admin;