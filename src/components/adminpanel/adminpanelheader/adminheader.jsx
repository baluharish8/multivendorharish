import { useState } from "react";
import "./adminheader.css"
import { useNavigate } from "react-router-dom";
import { removeLocalStorage } from "../../../services/storages/local.storage";

export function AdminHeaderComponent(props){
    const navigate = useNavigate()
    const [showLogout, setShowLogout] = useState(false);


    const handleIconClick = () => {
        setShowLogout(!showLogout);
    };
    const handleProfile = () => {
        props.onMenuItemClick('profile')
        props.childRef.current.profileComponentSidebarMenuItemsHide()
        setShowLogout(false);
    };

    const handleLogout = () => {
        removeLocalStorage()
        setShowLogout(false);
        navigate('/')
    };


    return(<>
     <div className="dashboard_header">
                <div className="mt-3">
                    <div className="row d-flex  text-white  ">
                        <div className="col-10 d-flex align-items-center ps-4 h5 ">
                            <span onClick={() => {props.showSidebar()}} className="bars_icon ps-3 pe-3"> {props.sidebar ? <i className="fa-solid fa-arrow-left"></i> : <i className="fa-solid fa-bars"></i>} </span>
                            <h5 className="mt-1 ms-2 dashboard_header_title" onClick={() => navigate('/') }>Admin Dashboard </h5>
                        </div>

                        <div className="col-2 " style={{ position: 'relative' }}>
                            <div className="text-end pe-4 ">
                                <span onClick={() => handleIconClick()} ><i className="fas fa-ellipsis-v  ms-1"></i> </span><br></br>
                                {showLogout && (
                                    <div className="logout  text-start">
                                        <ul className="pb-0 mb-0">
                                            <li className="bottom_borde" onClick={() => { handleProfile() }}> <span> <i className="fa-solid fa-user pe-2"></i></span> <span>Profile</span></li>
                                            <li className="bottom_border p-0 m-0"></li>
                                            <li className="" onClick={() => { handleLogout() }}><span><i className="fas fa-sign-out-alt  pe-2" aria-hidden="true"></i> </span> <span>Sign Out</span></li>
                                        </ul>
                                    </div>
                                )}
                          
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    </>)
}