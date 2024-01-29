import "./home.component.css"
import card1 from "../../assets/images/cartimg-1.png"
import fpimg1 from "../../assets/images/fpimg-1.png"
import banner from "../../assets/images/bannerMirror.png"
import offerbanner1 from "../../assets/images/offbanner1.jpg"
import offerbanner2 from "../../assets/images/offbanner2.jpg"


export function HomeComponent() {

    return (
        <>
            <div className="home ">
                <div className="container-fluid shadow ps-4">
                    <div className="row ">
                        <div className="col-12 col-md-12  col-lg-8 mt-4">
                            <img className="img-fluid banner" src={banner} alt="Card  cap" />
                        </div>
                        <div className="col-12   col-lg-4 mt-4">

                            <img className="img-fluid offer_banner mt-0" src={offerbanner2} alt="Card  cap" />
                            <img className="img-fluid offer_banner" src={offerbanner1} alt="Card  cap" />
                            <img className="img-fluid offer_banner" src={offerbanner2} alt="Card  cap" />
                            <img className="img-fluid offer_banner" src={offerbanner1} alt="Card  cap" />


                        </div>
                    </div>
                    <div className=" row  pe-4 pb-4">
                        <div className="col-12  col-md-6 col-lg-4 pt-4 text-center">
                            <button className="banner_below_btn ">Free Shipping and Returns </button>

                        </div>
                        <div className="col-12  col-md-6 col-lg-4 pt-4 text-center">
                            <button className="banner_below_btn banner_below_btn2 ">Loyality Program </button>

                        </div>
                        <div className="col-12  col-md-6 col-lg-4 pt-4 text-center">
                            <button className="banner_below_btn">100% Guaranteed Products</button>

                        </div>

                    </div>
                </div>

                <div className="container-fluid p-4">
                    <div className="row">
                        <div className="col-auto col-sm-6 col-md-10">
                            <h6 className="deals_title ">Deals of the Day</h6>

                        </div>
                            <div className="col-auto col-sm-6 col-md-2  text-end">
                                <h6 className="deals_title ">View More <span> <i className="fa-solid fa-angle-right"></i> </span><span> <i className="fa-solid fa-angle-right"></i> </span></h6>
                            </div>
                    </div>



                    <div className="row ">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card"  >
                                <img className="card-img-top " src={card1} alt="Card  cap1" />
                                <div className="card_icons">
                                    <div className="d-flex justify-content-end">
                                        <span>
                                            <i className="fa fa-plus-circle  overlay_icons"></i>
                                        </span>
                                        <span className="">
                                            <i className="fa-solid fa-heart  overlay_icons"></i>
                                        </span>
                                    </div>

                                </div>
                                <div className="card-body ">
                                    <div className="text-center">
                                        <p className="card-title">Default Product Name</p>
                                        <p className="card-text">$250</p>
                                        <button className="card_btn">Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card"  >
                                <img className="card-img-top " src={card1} alt="Card  cap2" />
                                <div className="card_icons">
                                    <div className="d-flex justify-content-end">
                                        <span>
                                            <i className="fa fa-plus-circle text-danger overlay_icons"></i>
                                        </span>
                                        <span className="">
                                            <i className="fa-solid fa-heart text-danger overlay_icons"></i>
                                        </span>
                                    </div>

                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <p className="card-title">Default Product Name</p>
                                        <p className="card-text">$250</p>
                                        <button className="card_btn">Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card"  >
                                <img className="card-img-top " src={card1} alt="Card cap3" />
                                <div className="card_icons">
                                    <div className="d-flex justify-content-end">
                                        <span>
                                            <i className="fa fa-plus-circle text-danger overlay_icons"></i>
                                        </span>
                                        <span className="">
                                            <i className="fa-solid fa-heart text-danger overlay_icons"></i>
                                        </span>
                                    </div>

                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <p className="card-title">Default Product Name</p>
                                        <p className="card-text">$250</p>
                                        <button className="card_btn">Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card"  >
                                <img className="card-img-top " src={card1} alt="Card cap4" />
                                <div className="card_icons">
                                    <div className="d-flex justify-content-end">
                                        <span>
                                            <i className="fa fa-plus-circle text-danger overlay_icons"></i>
                                        </span>
                                        <span className="">
                                            <i className="fa-solid fa-heart text-danger overlay_icons"></i>
                                        </span>
                                    </div>

                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <p className="card-title">Default Product Name</p>
                                        <p className="card-text">$250</p>
                                        <button className="card_btn">Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container-fluid p-4">
                    <div className="row">
                        <div className="col-auto col-sm-6 col-md-10">
                        <h6 className="deals_title ">Featured Products</h6>
                        </div>
                            <div className="col-auto col-sm-6 col-md-2  text-end">
                                <h6 className="deals_title ">View More <span> <i className="fa-solid fa-angle-right"></i> </span><span> <i className="fa-solid fa-angle-right"></i> </span></h6>
                            </div>
                    </div>

                    <div className="row ">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card"  >
                                <img className="card-img-top " src={fpimg1} alt="Card  cap1" />
                                <div className="card_icons">
                                    <div className="d-flex justify-content-end">
                                        <span>
                                            <i className="fa fa-plus-circle text-danger overlay_icons"></i>
                                        </span>
                                        <span className="">
                                            <i className="fa-solid fa-heart text-danger overlay_icons"></i>
                                        </span>
                                    </div>

                                </div>
                                <div className="card-body ">
                                    <div className="text-center">
                                        <p className="card-title">Default Product Name</p>
                                        <p className="card-text">$250</p>
                                        <button className="card_btn">Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card"  >
                                <img className="card-img-top " src={fpimg1} alt="Card  cap2" />
                                <div className="card_icons">
                                    <div className="d-flex justify-content-end">
                                        <span>
                                            <i className="fa fa-plus-circle text-danger overlay_icons"></i>
                                        </span>
                                        <span className="">
                                            <i className="fa-solid fa-heart text-danger overlay_icons"></i>
                                        </span>
                                    </div>

                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <p className="card-title">Default Product Name</p>
                                        <p className="card-text">$250</p>
                                        <button className="card_btn">Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card"  >
                                <img className="card-img-top " src={fpimg1} alt="Card cap3" />
                                <div className="card_icons">
                                    <div className="d-flex justify-content-end">
                                        <span>
                                            <i className="fa fa-plus-circle text-danger overlay_icons"></i>
                                        </span>
                                        <span className="">
                                            <i className="fa-solid fa-heart text-danger overlay_icons"></i>
                                        </span>
                                    </div>

                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <p className="card-title">Default Product Name</p>
                                        <p className="card-text">$250</p>
                                        <button className="card_btn">Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card"  >
                                <img className="card-img-top " src={fpimg1} alt="Card cap4" />
                                <div className="card_icons">
                                    <div className="d-flex justify-content-end">
                                        <span>
                                            <i className="fa fa-plus-circle text-danger overlay_icons"></i>
                                        </span>
                                        <span className="">
                                            <i className="fa-solid fa-heart text-danger overlay_icons"></i>
                                        </span>
                                    </div>

                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <p className="card-title">Default Product Name</p>
                                        <p className="card-text">$250</p>
                                        <button className="card_btn">Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container-fluid bg-ptag p-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


                    </p>

                </div>


            </div>
        </>
    )
}