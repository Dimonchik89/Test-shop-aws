import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import { IType } from "../../types/types";

const AdminCreateType: React.FC<IType> = (props) => {

    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="name" />
            </SimpleForm>
        </Create>
    )
}
export default AdminCreateType;