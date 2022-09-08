import { useState } from "react";

const useShowModal = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
        // console.log(mobileOpen);
        
    };

    return {
        handleDrawerToggle,
        mobileOpen
    }
}

export default useShowModal;