import React, { useEffect } from "react";
import { fetchAllUser, allUsers, loading, error } from "../../store/user";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { AppDispatch } from "../../store/store";
import Spiner from "../spiner/Spiner";
import ErrorPage from "../../pages/ErrorPage";
import useHttp from "../../hooks/useHttp";
import AdminUserList from "./AdminUserList";

import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';

const AdminUser: React.FC<HeaderProps> = ({ fetchAllUser, allUsers, loading, error }) => {

    useEffect(() => {
        fetchAllUser("/api/user")
    }, [])

    // useEffect(() => {
    //     console.log(allUsers);
    // }, [allUsers])

    const deleteHandler = (id: number) => {
        console.log(id);
        
    }

    if(loading) {
        return <Spiner/>
    }

    if(error) {
        return <ErrorPage/>
    }

    // const list = allUsers?.map((item, i) => <AdminUserList item={item} key={i}/>)

    return (
        <>
            <h1>User</h1>
        </>

    )
}

const mapStateToProps = createStructuredSelector({
    allUsers,
    loading,
    error
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchAllUser: bindActionCreators(fetchAllUser, dispatch)
})

const connector = connect(mapStateToProps, mapDispatchToProps);

type HeaderProps = ConnectedProps<typeof connector>

export default connector(AdminUser);