import React from "react"
import { Edit, SimpleForm, TextInput } from "react-admin";

const AdminEditType = () => {

    return (
        <Edit>
            <SimpleForm>
                <TextInput source="name" />
            </SimpleForm>
        </Edit>
    )
}
export default AdminEditType;