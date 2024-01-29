import "./footer.component.css"
import googleplay from "../../assets/images/128x128.png"
import visa from "../../assets/images/visa1.png"
import mastercard from "../../assets/images/mastercardre.png"
import payment from "../../assets/images/paymentre.png"


export function FooterComponent() {

    return (
        <>
            <div className="container-fluid p-4 footer">
                <div className="d-flex  align-items-center row ">
                    <div className="d-flex flex-wrap align-items-center  col-12 col-md-6 col-lg-5 ">
                        <div className="d-flex flex-wrap align-items-center row">
                            <div className="pt-3 col-12 col-sm-4 col-md-5">
                                <span className="footer_title ">Social Media</span>

                            </div>
                            <div className="d-flex col-12 col-sm-8 col-md-7 pt-3">
                                <div>  <i className="fa-brands fa-square-x-twitter  icon" ></i></div>
                                <div> <i className="fa-brands fa-facebook-f icon"></i></div>
                                <div> <i className="fa-brands fa-instagram icon"></i></div>
                                <div> <i className="fa-brands fa-skype icon"></i></div>
                                <div> <i className="fa-brands fa-linkedin icon"></i></div>
                            </div>
                        </div>

                    </div>
                    <div className=" col-12 col-md-6 col-lg-4 pt-4 pt-sm-3">
                        <span className="footer_title">Customer Support : </span><span> 045-2455666</span>

                    </div>
                    <div className=" col-12  col-lg-3 pt-3">
                        <span className="footer_title">Email : infohhvfhfdhfg@email.com</span>

                    </div>

                </div>
                <div className="d-flex flex-wrap pt-2 row">
                    <div className="col-12 col-sm-1 ">
                        <span className="footer_title  company">Company</span>
                    </div>
                    <div className="col-12 col-sm-11 ps-1 ps-sm-5 button_div ">
                        <button className="footer_btn ">About Us</button>
                        <button className="footer_btn">Return Policy</button>
                        <button className="footer_btn">Privacy Policy</button>
                        <button className="footer_btn">Terms & Conditions</button>
                        <button className="footer_btn">FAQ</button>
                        <button className="footer_btn">Blog</button>
                        <button className="footer_btn">Contact</button>

                    </div>
                </div>
                <div className="d-flex flex-wrap pt-2 row">
                    <div className="col-12 col-sm-1">
                        <span className="footer_title company">Information</span>
                    </div>
                    <div className="col-12 col-sm-11 ps-1 ps-sm-5 button_div ">
                        <button className="footer_btn">Career</button>
                        <button className="footer_btn">Sales Executive</button>
                        <button className="footer_btn">Track Order</button>
                        <button className="footer_btn">Become a Franchise</button>
                        <button className="footer_btn">Sell with Us</button>


                    </div>
                </div>
                <div className="d-flex  align-items-center row">
                    <div className="d-flex flex-wrap flex-md-nowrap pt-2 col-12 col-md-6">
                        <div className="">
                            <span className="footer_title company">Make Money With us</span>
                        </div>
                        <div className=" button_div ">
                            <button className="footer_btn">Store Login</button>
                            <button className="footer_btn">Distributor Login</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pt-4">
                        <div className="d-flex flex-wrap flex-md-nowrap align-items-center">
                            <div>
                                <span className="footer_title" >Download the App</span>
                            </div>
                            <div className=" ps-2 ps-sm-5 pt-2 pt-sm-0">
                                <img src={googleplay} className="img-fluid" alt="gp"></img>
                            </div>
                            <div className="ps-2 pt-2 pt-sm-0">
                                <img src={googleplay} className="img-fluid" alt="gp"></img>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="  d-flex  align-items-center row">
                    <div className="d-flex flex-wrap flex-md-nowrap pt-4 align-items-center col-12 col-md-10">
                        <div className="">
                            <span className="footer_title" >Payment Method</span>
                        </div>
                        <div className="d-flex flex-wrap flex-md-nowrap align-items-center ">
                            <div className=" ps-1 ps-sm-5 pt-2 pt-sm-0">
                                <img src={visa} className="img-fluid" alt="gp"></img>
                            </div>
                            <div className="ps-1 pt-2 pt-sm-0">
                                <img src={mastercard} className="img-fluid" alt="gp"></img>
                            </div>
                            <div className="ps-1 pt-2 pt-sm-0">
                                <img src={payment} className="img-fluid" alt="gp"></img>
                            </div>
                            <div className=" ps-1 pt-2 pt-sm-0">
                                <img src={visa} className="img-fluid" alt="gp"></img>
                            </div>
                            <div className="ps-1 pt-2 pt-sm-0">
                                <img src={mastercard} className="img-fluid" alt="gp"></img>
                            </div>
                            <div className="ps-1 pt-2 pt-sm-0">
                                <img src={payment} className="img-fluid" alt="gp"></img>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-2 pt-4">
                        <div className="d-flex justify-content-end">
                        <div className="text-center">
                            <div className="mb-3">
                                <span>
                                    Chat Now
                                </span>
                            </div>
                            <div>
                                <span>
                                    <i className="bi bi-chat-left-dots-fill chat_icon "></i>
                                </span>
                            </div>

                        </div>
                        </div>
                  

                    </div>
                </div>
                <div className="p-2 pt-5 ">
                <p className="text-center"> 2024 copyright Company Name. All Rights Reserved.</p>
                </div>
              
            </div>
        </>
    )
}