import { Box } from "@mui/material";
import errorImage from "../static/error.gif";

import "../style/helper.scss";

const ErrorPage = () => {

    return (
        <Box className="d-flex justify-center">
            <img src={errorImage} alt="error" />
        </Box>
    )
}
export default ErrorPage;