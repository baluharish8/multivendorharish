import "./saloonspa.component.css"
import card1 from "../../assets/images/serviceimages/hairservice.jpg"
import card2 from "../../assets/images/serviceimages/hairservice.jpg"
import card3 from "../../assets/images/serviceimages/hairservice.jpg"
import { useNavigate } from "react-router-dom"

export function SaloonSpaComponent() {
let navigate=useNavigate()
    return (
        <>
            <div className="container mt-4">
                <div className="w-25">
                    <button className="btn btn-primary " onClick={()=>{navigate("/")}}>Home</button>
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
                                <div className="">
                                    <p className="card-title"> Massage Therapy</p>
                                    <span className="popular_text"> Massage Therapy Descrption </span>
                                    <div className="pt-2">Rating :</div>
                                    <div className="d-flex justify-content-around align-items-center pt-4 pb-2">

                                        <div>
                                            <span className="popular_price text-center">$250</span>
                                        </div>
                                        <div>
                                            <button className="popular_btn ">Book Now</button>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card"  >
                            <img className="card-img-top " src={card2} alt="Card  cap1" />
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
                                <div className="">
                                    <p className="card-title">Hair Service</p>
                                    <span className="popular_text">Hair Service Descrption </span>
                                    <div className="pt-2">Rating :</div>
                                    <div className="d-flex justify-content-around align-items-center pt-4 pb-2">

                                        <div>
                                            <span className="popular_price text-center">$250</span>
                                        </div>
                                        <div>
                                            <button className="popular_btn ">Book Now</button>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card"  >
                            <img className="card-img-top " src={card3} alt="Card  cap1" />
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
                                <div className="">
                                    <p className="card-title">Skincare</p>
                                    <span className="popular_text">Skincare Description </span>
                                    <div className="pt-2">Rating :</div>
                                    <div className="d-flex justify-content-around align-items-center pt-4 pb-2">

                                        <div>
                                            <span className="popular_price text-center">$250</span>
                                        </div>
                                        <div>
                                            <button className="popular_btn ">Book Now</button>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card"  >
                            <img className="card-img-top " src={card4} alt="Card  cap1" />
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
                                <div className="">
                                    <p className="card-title">Default Product Name</p>
                                    <span className="popular_text">Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export </span>
                                    <div className="pt-2">Rating</div>
                                    <div className="d-flex justify-content-around align-items-center pt-4 pb-2">

                                        <div>
                                            <span className="popular_price text-center">$250</span>
                                        </div>
                                        <div>
                                            <button className="popular_btn ">Book Now</button>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}