import React from "react";
import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin";
import { IType } from "../../types/types";

const AdminCreateType: React.FC<IType> = (props) => {

    return (
        <Create {...props}>
            <SimpleForm>
                {/* <ReferenceInput source="userId" reference="users" /> */}
                <TextInput source="name" />
                {/* <TextInput multiline source="body" /> */}
            </SimpleForm>
        </Create>
    )
}
export default AdminCreateType;