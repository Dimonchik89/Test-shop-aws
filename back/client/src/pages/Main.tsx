import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useAppDispatch } from "../store/store";
import { AppDispatch } from "../store/store";
import { fetchUser, checkActualUser } from "../store/user/userSlice";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import Filter from "../components/filter/Filter";
import { category } from "../store/category";
import { types } from "../store/types";
import { fetchTypes } from "../store/types";
import { fetchCategory } from "../store/category";
import useFilter from "../hooks/useFilter"

import "../style/helper.scss"

const Main: React.FC<HeaderProps> = ({fetchTypes, fetchCategory, category, types}) => {
    const [ queryParams, setQueryParams ] = useState({});


    // сделать общий поиск в queryParams с обоих критериев 
    const concatQueryParams = (obj) => {
        setQueryParams(queryParams => {
            
        })
    }

    useEffect(() => {
        fetchTypes("/api/type")
        fetchCategory("/api/category")
    }, [])

    return (
        <Box className="mt-64">
            <h1>Main</h1>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Filter items={types} name="type"/>
                    <Filter items={category} name="category"/>
                    <button
                        onClick={() => {
                        }}
                    >
                        Push
                    </button>
                </Grid>
                <Grid item xs={9}>

                </Grid>
            </Grid>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    category,
    types
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchTypes: bindActionCreators(fetchTypes, dispatch),
    fetchCategory: bindActionCreators(fetchCategory, dispatch)

})

const connector = connect(mapStateToProps, mapDispatchToProps);

type HeaderProps = ConnectedProps<typeof connector>

export default connector(Main);