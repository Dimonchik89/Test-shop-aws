import React from "react";
import { Box, TextField } from "@mui/material";
import { Field } from 'react-final-form';
import { IFielProps } from "../../types/types";
import "../../style/helper.scss";

const DefaultField: React.FC<IFielProps>  = ({name, validate, type, label}) => {

    return (
        <Box className="mt-2">
            <Field 
                name={name} 
                validate={validate}
            >
                {({ input, meta }) => (
                <div>
                    <TextField 
                        {...input} 
                        type={type} 
                        label={meta.error && meta.touched ? meta.error : label} 
                        variant="outlined" 
                        error={meta.error && meta.touched}
                        fullWidth
                    />
                </div>
                )}
            </Field>
        </Box>

    )
}
export default DefaultField;
