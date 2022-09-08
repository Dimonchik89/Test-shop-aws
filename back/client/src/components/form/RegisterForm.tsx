import React from "react";
import { Box, Typography } from "@mui/material";
import { Form } from 'react-final-form';
import DefaultField from "../formField/DefaultField";
import FormButton from "../formButton/FormButton";
import { IFormProps } from "../../types/types";

import "../../style/helper.scss";

const RegisterForm: React.FC<IFormProps> = ({title, onSubmit, formFields}) => {

    return (
        <Box className="mt-64">
            <Typography
                variant="h2"
                component="h1"
                align='center'
            >
                {title}
            </Typography>
            <Box>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            {
                                formFields.map((item, i) => <DefaultField key={i} name={item.name} validate={item.validate} type={item.type} label={item.label}/>)
                            }
                            <div className="buttons mt-2 d-flex justify-center">
                                <FormButton 
                                    type="submit"
                                    title="Submit"
                                    submitting={submitting}
                                />
                                <FormButton 
                                    type="button"
                                    title="Reset"
                                    submitting={submitting || pristine}
                                    onClick={form.reset}
                                />
                            </div>
                        </form>
                    )}
                />
            </Box>
        </Box>
    )
}
export default RegisterForm;