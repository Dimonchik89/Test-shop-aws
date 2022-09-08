import React from "react";
import { Box, Button } from "@mui/material";
import { IButtonProps } from "../../types/types";
import "../../style/helper.scss";

// interface IButtonProps {
//     type: "submit" | "button";
//     title: string;
//     submitting?: boolean;
//     onClick?: (arg: any) => void;
// }

const FormButton: React.FC<IButtonProps> = ({type, title, submitting, ...tailProps}) => {
    
    return (
        <div className="mx-1">
            <Button 
                variant="outlined"
                type={type}
                disabled={submitting}
                {...tailProps}
            >
                {title}
            </Button>
        </div>
    )
}
export default FormButton;