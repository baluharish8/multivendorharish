import { useNavigate } from "react-router-dom"
import "./vendordashboard.component.css"
import { useEffect, useState } from "react"
import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from "../../../services/storages/local.storage"
import { getVendorServiceData } from "../../../services/vendorservices.service"
import store from "../../../services/storages/redux.storage"
import axios from "axios"
import { GetVendorServiceDataAi, getVendorServiceDataAi, useGetVendorServiceDataAi } from "../../../services/vendorservices.serviceAi"
import useAxiosPrivate from "../../../services/refreshToken.service"

export function VendorDashboardComponent(props) {
    const axiosPrivate = useAxiosPrivate();

    const  {getVendorServiceDataAi}  = useGetVendorServiceDataAi();

    let navigate = useNavigate()
    const [projectGridBodyData, setProjectGridBodyData] = useState([])


    const refresh = async () => {
        const response = await axios.get('http://localhost:4006/refresh', {
            withCredentials: true
        });
        console.log("from tesing refresh token" + response.data)
    }
     function handleGetProjectData() {
        // getServiceData()
        let token = getLocalStorageItem("vendortoken")
        // console.log(token)
        let headers = {
            "vendor-token": token
        }
         getVendorServiceDataAi()
            // axiosPrivate.get('http://localhost:4006/getvendorservice')
            .then((res) => { setProjectGridBodyData(res.data); console.log(res.data) })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    console.error(error.response.data);
                    alert(error.response.data + "msg from BE")
                } else {
                    console.error('An error occurred:', error.message);
                }
                if (error.response && error.response.status === 403) {
                    console.error(error.response.data);
                    alert(error.response.data + "msg from")
                    removeLocalStorageItem("vendortoken")
                    navigate('/login')
                } else {
                    console.error('An error occurred:', error.message + "at else");
                }
            })
    }

    useEffect(() => {
        handleGetProjectData()
    }, [])
    return (
        <>
            <div className="dashboard  ">
                <div className="container-fluid">
                    <div>
                        <h2>Dashboard</h2>

                    </div>
                    <div className="row  mt-3 ">
                        <div className=" col-12 col-sm-12 col-md-4 col-lg-3 mb-4">
                            <div className="project_box d-flex ms-1 me-1 ">
                                <div className=" icon_div "> <i className="fas fa-shopping-basket dashboard_icon_size"></i></div>
                                <div className=" ps-2 pt-3 project_content">
                                    <div><h4>Orders</h4></div>
                                    <div><h5>65</h5></div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-12 col-sm-12 col-md-4 col-lg-3 mb-4 ">
                            <div className="ledgertype_box d-flex ms-1 me-1 ">
                                <div className=" icon_div p-3"> <i className="fas fa-file-invoice-dollar dashboard_icon_size"></i></div>
                                <div className=" pt-3 ps-2 ledgertype_content">
                                    <div><h4>Payments</h4></div>
                                    <div><h5>22</h5></div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-12 col-sm-12 col-md-4 col-lg-3 mb-4 ">
                            <div className="ledgergroup_box d-flex ms-1 me-1 ">
                                <div className=" icon_div p-3"> <i className="fas fa-shopping-bag dashboard_icon_size" ></i></div>
                                <div className=" ps-2 pt-3 ledgergroup_content">
                                    <div><h4>Services</h4></div>
                                    <div><h5>{projectGridBodyData.length}</h5></div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-12 col-sm-12 col-md-4 col-lg-3 mb-4">
                            <div className="ledger_box d-flex ms-1 me-1 ">
                                <div className=" icon_div p-3"> <i className="fas fa-file-invoice-dollar dashboard_icon_size"></i></div>
                                <div className=" pt-3 ps-2 ledger_content">
                                    <div><h4>Total Earnings</h4></div>
                                    <div><h5>61</h5></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>




            </div>
        </>
    )
}