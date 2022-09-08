import React, { useEffect } from "react";
// import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { IUserDecod } from "../../types/types";
import DeleteIcon from '@mui/icons-material/Delete';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
export const PostIcon = BookIcon;

// interface IAdminUserProps {
//     items: IUserDecod[];
//     deleteHandler: (id: string) => void;
// }

const AdminUserList = () => {

    // const listInner = items?.map((item, i) => <ListItem disablePadding key={i}>
    //                                                 <ListItemButton>
    //                                                     <ListItemText primary={item.name} />
    //                                                     <DeleteIcon onClick={() => deleteHandler(item.id)}/>
    //                                                 </ListItemButton>
    //                                             </ListItem>)

    return (
        <>
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="email" />
                <TextField source="role" />
                <DateField source="createdAt" />
                <DateField source="updatedAt" />
                <EditButton />
            </Datagrid>
        </List>
        </>
    )
}
export default AdminUserList;