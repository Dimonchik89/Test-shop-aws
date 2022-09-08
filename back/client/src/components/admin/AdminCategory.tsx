import React, { useState, useEffect } from "react"
import { Alert, Box, Collapse, IconButton } from "@mui/material";
import { Form } from "react-final-form";
import FormButton from "../formButton/FormButton";
import DefaultField from "../formField/DefaultField";
import CloseIcon from '@mui/icons-material/Close';
import { IGetName } from "../../types/types";
import useHttp from "../../hooks/useHttp";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch } from "../../store/store";
import { bindActionCreators } from "redux";
import { fetchCategory, deleteCategory } from "../../store/category";
import { category, loading, error } from "../../store/category";
import { createStructuredSelector } from "reselect";
import AdminAllItems from "./AdminAllItems";

const AdminCategory: React.FC<HeaderProps> = ({ fetchCategory, deleteCategory, category, loading, error }) => {
    const { postData, deleteData } = useHttp();
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState("Sended")

    const onSubmit = async (values: IGetName) => {
        await postData({url: "/api/category", ...values})
                .then(data => {
                    setOpen(true)
                    setSeverity("Sended")
                    fetchCategory("/api/category")
                })
                .catch(e => {
                    if(e) {
                        setOpen(true)
                        setSeverity("Error")
                    }
                })
            
    }

    const deleteHandler = (id: number) => {
        deleteData({url: "/api/category", id})
            .then((data) => {
                setOpen(true)
                setSeverity("Delete")
                deleteCategory(id)
            })
            .catch(e => {
                setOpen(true)
                setSeverity("Error")
            })
    }

    useEffect(() => {
        fetchCategory("/api/category")
    }, [])

    return (
        <>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <DefaultField 
                        name="name" 
                        label="Category"
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
                    sx={{ mb: 2 }}
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
                
                >
                    {/* {severity ? "Sended" : "Error"} */}
                    {severity}
                </Alert>
            </Collapse>

            <AdminAllItems 
                items={category} 
                loading={loading} 
                error={error} 
                title="Category"
                deleteHandler={deleteHandler}
            />
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    category,
    loading,
    error
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchCategory: bindActionCreators(fetchCategory, dispatch),
    deleteCategory: bindActionCreators(deleteCategory, dispatch)
})

const connector = connect(mapStateToProps, mapDispatchToProps);

type HeaderProps = ConnectedProps<typeof connector>

export default connector(AdminCategory);