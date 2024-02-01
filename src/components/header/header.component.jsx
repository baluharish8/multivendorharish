import { useState } from "react"
import "./header.component.css"
import { useNavigate } from "react-router-dom"

export function HeaderComponent() {
    const navigate=useNavigate()
    const [showNavMenu, setShowNavMenu] = useState(false)
    return (
        <>
            <div className="header_div">
                <div className="header">
                    <div className="container-fluid">
                        <div className="row ">
                            <div className=" col-12 col-md-6  d-flex justify-content-center justify-content-md-start order-2 order-md-0">
                                <div className="d-flex flex-wrap justify-content-around ">
                                    <div className="ps-3 pt-3">
                                        <span className="header_span">Language (English)</span>
                                    </div>
                                    <div className=" ps-3 pt-3 pb-3 ">
                                        <span className="header_span">Select Currency (USD)</span>
                                    </div>
                                </div>

                            </div>
                            {/* <div className="col-12 col-md-1">

                            </div> */}
                            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end  flex-md-nowrap order-1 order-md-0">
                                <div className=" ps-3 text-center button_div">
                                    <button className="header_btn">My Wishlist</button>
                                    <button className="header_btn">Login</button>
                                    <button className="header_btn">Register</button>
                                    <button className="header_btn">Locate Store</button>
                                    <button className="header_btn">Track Order</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="header1 p-2 ps-3 pe-3 ">
                    <div className="container-fluid">

                        <div className="d-flex   align-items-center row ps-2 pe-2">
                            <div className=" d-flex  align-items-center justify-content-center   col-md-3 " onClick={()=>{navigate("/home")}}>
                               
                                <span className="logo_image">
                                    <i className="fa-solid fa-image text-white"></i>
                                </span>
                                <span className="text-white logo_name ps-2 ">Find Dubai</span>
                            </div>
                            <div className="d-flex  align-items-center   bg-light rounded-pill col-md-6 col-lg-6 mt-2 mb-2">
                                <i className="fas fa-search ps-3 text-secondary" aria-hidden="true"></i>
                                <input className="form-control " type="text" placeholder="Search" />
                                <button className="btn_search mt-1 mb-1 "><i className="fas fa-search " aria-hidden="true"></i></button>
                            </div>
                            
                            <div className="d-flex flex-nowrap justify-content-around col-md-3 col-lg-3 ">
                                <div className="ps-3 pt-3">
                                    <span className="header_span fw-bold">Compare (0)</span>
                                </div>
                                <div className=" ps-3 pt-3 pb-3">
                                    <span className="header_span fw-bold">Cart (1)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header2 ">
                    <div className="  ">
                        <span className="menu_nav_icon " onClick={() => { setShowNavMenu(!showNavMenu) }}><i className="fa-solid fa-bars"></i></span>
                        <div className="">
                            <ul className={showNavMenu ? "header2_btn_div_show" : "header2_btn_div"} >
                                <li className="header2_btn">Electroics</li>
                                <li className="header2_btn">Women Fashion</li>
                                <li className="header2_btn">Men Fashion</li>
                                <li className="header2_btn">TVs & Appliances</li>
                                <li className="header2_btn">Home & Furniture</li>
                                <li className="header2_btn">Sports, Books&More</li>
                                <li className="header2_btn">Baby & Kids</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}