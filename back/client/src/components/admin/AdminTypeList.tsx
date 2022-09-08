import React, { useEffect } from "react";
import { IUserDecod } from "../../types/types";
import DeleteIcon from '@mui/icons-material/Delete';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
export const PostIcon = BookIcon;

const AdminTypeList = () => {

    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <DateField source="createdAt" />
                <DateField source="updatedAt" />
                <EditButton />
            </Datagrid>
        </List>
    )
}
export default AdminTypeList;