import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const AdminEditUser = () => {

    return (
        <Edit>
            <SimpleForm>
                <TextInput source="email" />
                <TextInput source="password" />
                <TextInput source="role" />
            </SimpleForm>
        </Edit>
    )
}
export default AdminEditUser;