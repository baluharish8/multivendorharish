import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./featuredservices.component.css"
// import image5 from "../../assets/images/testimonialsimage-1.jpg"
import card1 from "../../assets/images/serviceimages/ElectronicsRepair.jpg"
import card2 from "../../assets/images/serviceimages/ElectronicsRepair.jpg"
import card3 from "../../assets/images/serviceimages/ElectronicsRepair.jpg"
import card4 from "../../assets/images/serviceimages/ElectronicsRepair.jpg"
import card5 from "../../assets/images/serviceimages/ElectronicsRepair.jpg"
import { useEffect, useState } from "react";
import { getServiceData } from "../../services/vendorservices.service";
import { useNavigate } from "react-router-dom";




export function FeaturedServicesComponent(props) {
    let navigate = useNavigate()
    const [data, setData] = useState([])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
              {
                breakpoint: 820,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
          ],
    }

    function handleGetServiceData() {
        getServiceData()
            .then((res) => {
                setData(res.data)
                console.log(res.data)
                // alert("get success")
            })
            .catch((res) => {
                alert(res)
            })
    }
    function handleCardClick(item) {
        props.handleSearchCardData(item)
        localStorage.setItem('searchCardData', JSON.stringify(item));
        navigate('/searchcard')
    }


    useEffect(() => {
        handleGetServiceData()
    }, [])
    // const base64String = data[0] && data[0].serviceimages ? btoa(String.fromCharCode(...new Uint8Array(data[0].serviceimages.data))) : null;

    // const base64String = data[0].serviceimages.data ? btoa(String.fromCharCode(...new Uint8Array(data[0].serviceimages.data))) : null;
    // const base64String = btoa(String.fromCharCode(...new Uint8Array(data[0].serviceimages.data)))
    // const base64String = btoa(String.fromCharCode(...new Uint8Array(data.map((item)=>{item.serviceimages.data}))))
    const base64String = data[0] && data[0].serviceimages ? data.map((item) => btoa(String.fromCharCode(...new Uint8Array(item.serviceimages.data)))) : '';
    // console.log(base64String)

    // console.log(data[0].serviceimages.data)

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="featured_slider_styles ">
                    <Slider {...settings}>
                        <div >
                            <div className="card featured_card_style" style={{ width: "18rem" }} onClick={() => { handleCardClick(data[0]) }}>
                                {/* <img className="card-img-top " src={base64String} alt="Card  cap1" /> */}
                                <img src={`data:image/jpeg;base64,${data[0]?.serviceimages}`} alt='imgnot' className="card-img-top"></img>

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
                                        <p className="card-title"> {data[0]?.name}</p>
                                        <span className="featured_text"> {data[0]?.description} </span>
                                        <p className="featured_price text-center">{data[0]?.price}</p>
                                        <div className="text-center">
                                            <button className="featured_btn ">Book Appointment </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card featured_card_style" style={{ width: "18rem" }} onClick={() => { handleCardClick(data[1]) }}>
                                {/* <img className="card-img-top " src={base64String} alt="Card  cap1" /> */}
                                <img src={`data:image/jpeg;base64,${data[1]?.serviceimages}`} alt='imgnot' className="card-img-top"></img>

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
                                        <p className="card-title"> {data[1]?.name}</p>
                                        <span className="featured_text"> {data[1]?.description} </span>
                                        <p className="featured_price text-center">{data[1]?.price}</p>
                                        <div className="text-center">
                                            <button className="featured_btn ">Book Appointment </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card featured_card_style" style={{ width: "18rem" }} onClick={() => { handleCardClick(data[2]) }}>
                                {/* <img className="card-img-top " src={base64String} alt="Card  cap1" /> */}
                                <img src={`data:image/jpeg;base64,${data[2]?.serviceimages}`} alt='imgnot' className="card-img-top"></img>

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
                                        <p className="card-title"> {data[2]?.name}</p>
                                        <span className="featured_text"> {data[2]?.description} </span>
                                        <p className="featured_price text-center">{data[2]?.price}</p>
                                        <div className="text-center">
                                            <button className="featured_btn ">Book Appointment </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card featured_card_style" style={{ width: "18rem" }} onClick={() => { handleCardClick(data[3]) }}>
                                {/* <img className="card-img-top " src={base64String} alt="Card  cap1" /> */}
                                <img src={`data:image/jpeg;base64,${data[3]?.serviceimages}`} alt='imgnot' className="card-img-top"></img>

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
                                        <p className="card-title"> {data[3]?.name}</p>
                                        <span className="featured_text"> {data[3]?.description} </span>
                                        <p className="featured_price text-center">{data[3]?.price}</p>
                                        <div className="text-center">
                                            <button className="featured_btn ">Book Appointment </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card featured_card_style" style={{ width: "18rem" }} onClick={() => { handleCardClick(data[4]) }}>
                                {/* <img className="card-img-top " src={base64String} alt="Card  cap1" /> */}
                                <img src={`data:image/jpeg;base64,${data[4]?.serviceimages}`} alt='imgnot' className="card-img-top"></img>

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
                                        <p className="card-title"> {data[4]?.name}</p>
                                        <span className="featured_text"> {data[4]?.description} </span>
                                        <p className="featured_price text-center">{data[4]?.price}</p>
                                        <div className="text-center">
                                            <button className="featured_btn ">Book Appointment </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card featured_card_style" style={{ width: "18rem" }} onClick={() => { handleCardClick(data[5]) }}>
                                {/* <img className="card-img-top " src={base64String} alt="Card  cap1" /> */}
                                <img src={`data:image/jpeg;base64,${data[5]?.serviceimages}`} alt='imgnot' className="card-img-top"></img>

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
                                        <p className="card-title"> {data[5]?.name}</p>
                                        <span className="featured_text"> {data[5]?.description} </span>
                                        <p className="featured_price text-center">{data[5]?.price}</p>
                                        <div className="text-center">
                                            <button className="featured_btn ">Book Appointment </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </Slider>
                </div>
            </div>
        </>
    )
}