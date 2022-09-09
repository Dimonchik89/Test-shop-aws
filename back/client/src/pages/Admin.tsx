import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import AdminType from "../components/admin/AdminType";
import AdminCategory from "../components/admin/AdminCategory";
import AdminProduct from "../components/admin/AdminProduct";
import AdminOrder from "../components/admin/AdminOrder";
import AdminUser from "../components/admin/AdminUser";
import AdminNav from "../components/admin/AdminNav";

import AdminCreateUser from "../components/admin/AdminCreateUser";
import AdminUserList from "../components/admin/AdminUserList";
import AdminEditUser from "../components/admin/AdminEditUser";
import AdminTypeList from "../components/admin/AdminTypeList";
import AdminCreateType from "../components/admin/AdminCreateType";
import AdminEditType from "../components/admin/AdminEditType";
import AdminProductList from "../components/admin/AdminProductList";
import AdminProductCreate from "../components/admin/AdminProductCreate";
import AdminCategoryList from "../components/admin/AdminCategoryList";


import { fetchTypes } from "../store/types";
import { fetchCategory } from "../store/category";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { AppDispatch } from "../store/store";

import { Admin as AdminComponent, Resource, fetchUtils, useCreate } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import "../style/helper.scss";


const Admin: React.FC<AdminHeaderProps> = ({ fetchTypes, fetchCategory }) => {
    const servicesHost = 'http://localhost:5000/api';

    const fetchJson = (url: any, options: any = {}) => {
        if (!options.headers) {
            options.headers = new Headers({ Accept: 'application/json' });
        }
        options.headers.set('Authorization', `Bearer ${localStorage.getItem("token")}`)
        return fetchUtils.fetchJson(url, options);
    }
    const dataProvider = jsonServerProvider('http://localhost:5000/api', fetchJson);

    const myDataProfider = {
        ...dataProvider,
        create: async (resource: any, params: any) => {
            if (resource !== 'resource-with-file' || !params.data.file) {
                return dataProvider.create(resource, params);
            }
    
            let formData = new FormData();
            
            formData.append('name', params.data.name);
            formData.append('cost', params.data.cost);
            formData.append('categoryId', params.data.categoryId);
            formData.append('typeId', params.data.typeId);
            formData.append('img', params.data.file.rawFile);
            
    
            return fetchJson(`http://localhost:5000/api/${resource}`, {
                method: 'POST',
                body: formData,
            }).then(({ json }) => ({
                data: { ...params.data, id: json.id },
            }));
        }
    };

    useEffect(() => {
        fetchTypes("/api/type")
        fetchCategory("/api/category")
    }, [])

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
            <AdminComponent dataProvider={myDataProfider} basename="/admin">
                <Resource name="user" list={AdminUserList} edit={AdminEditUser} create={AdminCreateUser}/>
                <Resource name="type" list={AdminTypeList} create={AdminCreateType} edit={AdminEditType}/>
                <Resource name="category" list={AdminCategoryList} create={AdminCreateType} edit={AdminEditType}/>
                <Resource name="product" list={AdminProductList} create={AdminProductCreate}/>
            </AdminComponent>
        </Box>
            
        </>
    )
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchTypes: bindActionCreators(fetchTypes, dispatch),
    fetchCategory: bindActionCreators(fetchCategory, dispatch)
})

const connector = connect(null, mapDispatchToProps)

type AdminHeaderProps = ConnectedProps<typeof connector>

export default connector(Admin);