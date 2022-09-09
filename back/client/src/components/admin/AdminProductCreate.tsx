import React from "react";
import { AutocompleteInput, Create, SimpleForm, TextInput, FileInput, ImageField, ImageInput, FormDataConsumer, SimpleFormIterator, useCreate, FileField, TextField, NumberField, EditButton } from "react-admin";
import { types } from "../../store/types";
import { category } from "../../store/category";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { IProduct } from "../../types/types";


const AdminProductCreate: React.FC<HeaderProps & IProduct> = (props) => {
    
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="cost" />
                <AutocompleteInput source="categoryId" choices={props.category}/>
                <AutocompleteInput source="typeId" choices={props.types}/>
                <FileInput source="file" label="Related pictures" accept="image/*">
                    <ImageField source="src" title="files"/>
                </FileInput>
                <EditButton />
            </SimpleForm>
        </Create>
    )
}

const mapStateToProps = createStructuredSelector({
    types,
    category
})

const connector = connect(mapStateToProps);

type HeaderProps = ConnectedProps<typeof connector>

export default connector(AdminProductCreate);