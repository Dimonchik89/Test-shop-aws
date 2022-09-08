import React, { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import { AppDispatch } from "../store/store";
import { fetchUser, checkActualUser } from "../store/user/userSlice";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";

const Main: React.FC<HeaderProps> = ({checkActualUser}) => {

    return (
        <>
            <h1>Main</h1>
        </>
    )
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    checkActualUser: bindActionCreators(checkActualUser, dispatch)
})

const connector = connect(null, mapDispatchToProps);

type HeaderProps = ConnectedProps<typeof connector>

export default connector(Main);