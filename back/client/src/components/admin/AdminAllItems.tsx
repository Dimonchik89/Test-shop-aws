import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { useEffect } from "react";
import { IType, ICategory } from "../../types/types";
import DeleteIcon from '@mui/icons-material/Delete';
import Spiner from "../spiner/Spiner";
import ErrorPage from "../../pages/ErrorPage"

interface IAdminLiat {
    items: IType[] | ICategory[];
    loading: boolean;
    error: boolean;
    title: string;
    deleteHandler: (id: number) => void
}

const AdminAllItems: React.FC<IAdminLiat> = ({items, loading, error, title, deleteHandler}) => {

    useEffect(() => {
        console.log(title, items);
        
    }, [items])

    if(loading) {
        return <Spiner/>
    }

    if(error) {
        return <ErrorPage/>
    }

    const listInner = items?.map((item, i) => <ListItem disablePadding key={i}>
                                                    <ListItemButton>
                                                        <ListItemText primary={item.name} />
                                                        <DeleteIcon onClick={() => deleteHandler(item.id)}/>
                                                    </ListItemButton>
                                                </ListItem>)

    return (
        <List>
            {listInner}
        </List>
    )
}
export default AdminAllItems;