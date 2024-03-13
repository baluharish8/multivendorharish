import { getLocalStorageItem } from "./storages/local.storage";
import { Navigate } from "react-router-dom";
export function AuthRoute(props) {

    // let uservalid = false;
    // uservalid = getLocalStorageItem("user")
    // if (uservalid) {
    //     return props.children
    // }
    // else {
    //     return <Navigate to="/login"></Navigate>
    // }

    let uservalid = false;
    uservalid = getLocalStorageItem("userData")
    if (uservalid) {
        return props.children
    }
    else {
        return <Navigate to="/login"></Navigate>
    }
}