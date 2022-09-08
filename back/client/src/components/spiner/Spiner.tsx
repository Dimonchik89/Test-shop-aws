import { Box, CircularProgress } from "@mui/material"

import "../../style/helper.scss";

const Spiner = () => {

    return (
        <Box className="d-flex justify-center">
            <CircularProgress />
        </Box>
    )
};
export default Spiner