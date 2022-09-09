import React from "react";
import { AutocompleteInput, Datagrid, EditButton, List, NumberField, TextField, ImageField, ImageInput, ArrayField } from "react-admin";


const AdminProductList= () => {

    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <NumberField source="cost" />
                <TextField source="categoryId"/>
                <TextField source="typeId"/>
                <TextField source="img"/>
                <EditButton />
            </Datagrid>
        </List>
    )
}


export default AdminProductList;