import React, { useState, useEffect } from "react";
import { Alert, Box, Collapse, IconButton } from "@mui/material";
import { Form } from 'react-final-form';
import DefaultField from "../formField/DefaultField";
import FormButton from "../formButton/FormButton";
import useHttp from "../../hooks/useHttp";
import { IGetName } from "../../types/types";
import CloseIcon from '@mui/icons-material/Close';
import { fetchTypes, deleteType } from "../../store/types";
import AdminAllItems from "./AdminAllItems";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { types, loading, error } from "../../store/types";
import { AppDispatch } from "../../store/store";

import "../../style/helper.scss";


const AdminType: React.FC<HeaderProps> = ({fetchTypes, deleteType, types, loading, error}) => {
    const { postData, deleteData } = useHttp();
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState("Sended")

    const onSubmit = async (values: IGetName) => {
        await postData({url: "/api/typ", ...values})
                .then(data => {
                    setOpen(true)
                    setSeverity("Sended")
                    fetchTypes("/api/type")
                })
                .catch(e => {
                    if(e) {
                        setOpen(true)
                        setSeverity("Error")
                        console.log(e);
                    }
                })
            
    }

    const deleteHandler = (id: number) => {
        deleteData({url: "/api/type", id})
            .then((data) => {
                setOpen(true)
                setSeverity("Delete")
                deleteType(id)
            })
            .catch(e => {
                setOpen(true)
                setSeverity("Error")
            })
    }

    useEffect(() => {
        fetchTypes("/api/type")
    }, [])

    return (
        <>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <DefaultField 
                        name="name" 
                        label="Type"
                    />
                    <Box className="d-flex justify-center mt-2">
                        <FormButton type="submit" title="Send"/>
                    </Box>
                </form>
                )}
            />
        
            <Collapse in={open}>
                <Alert
                    severity={severity ? "success" : "error"}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                sx={{ mb: 2 }}
                >
                    {severity ? "Sended" : "Error"}
                </Alert>
            </Collapse>

            <AdminAllItems 
                items={types} 
                loading={loading} 
                error={error} 
                title="Type"
                deleteHandler={deleteHandler}
            /> 
        </>

    )
}

const mapStateToProps = createStructuredSelector({
    types, 
    loading, 
    error
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchTypes: bindActionCreators(fetchTypes, dispatch), 
    deleteType: bindActionCreators(deleteType, dispatch)
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type HeaderProps = ConnectedProps<typeof connector>

export default connector(AdminType);

//refrigerator