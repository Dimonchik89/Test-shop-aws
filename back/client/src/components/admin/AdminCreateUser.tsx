import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import { IUserDecod } from "../../types/types";

const AdminCreateUser: React.FC<IUserDecod> = (props) => {

    return (
        <Create {...props} resource="user/register" redirect="/admin/user">
            <SimpleForm>
                <TextInput source="email" />
                <TextInput source="password" />
                <TextInput source="role" />
            </SimpleForm>
        </Create>
    )
}
export default AdminCreateUser