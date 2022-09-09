import React from "react";
import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin";
import { IUserDecod } from "../../types/types";

const AdminCreateUser: React.FC<IUserDecod> = (props) => {

    return (
        <Create {...props} >
            <SimpleForm>
                {/* <ReferenceInput source="id" reference="users" /> */}
                <TextInput source="email" />
                <TextInput source="password" />
                <TextInput source="role" />
            </SimpleForm>
        </Create>
    )
}
export default AdminCreateUser