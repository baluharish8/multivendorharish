import "./home.component.css"
import fpimg1 from "../../assets/images/fpimg-1.png"
import banner from "../../assets/images/bannerMir.png"
import banner2 from "../../assets/images/banner2Mir.png"
import offerbanner1 from "../../assets/images/offbanner1.jpg"
import offerbanner2 from "../../assets/images/offbanner2.jpg"
import { BrowseCategoriesComponent } from "../browsecategories/browsecategories.component"
import { FeaturedServicesComponent } from "../featuredservices/featuredservices.component"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getServiceData } from "../../services/vendorservices.service"



export function HomeComponent(props) {
    let navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(() => {
        handleGetServiceData()
    }, [])

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
    const base64String = data[0] && data[0].serviceimages ? data.map((item) => btoa(String.fromCharCode(...new Uint8Array(item.serviceimages.data)))) : '';



    return (
        <>
            <div className="home ">
                <div className="container-fluid shadow ps-4">

                    <div className="row ">
                        <div className="col-12 col-md-12  col-lg-8 mt-4">
                            {/* <img className="img-fluid banner" src={banner} alt="Card  cap" /> */}
                            <div id="carouselExampleAutoplaying" className="carousel slide banner" data-bs-ride="carousel" data-bs-interval="1000">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={banner} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={banner2} className="d-block w-100" alt="..." />
                                    </div>
                                    {/* <div className="carousel-item">
                                        <img src={banner} className="d-block w-100" alt="..." />
                                    </div> */}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
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
                    {/* <div className="d-flex justify-content-center"> */}
                    <div className="text-center pt-4 pb-4 "> <span className="browse_text"> Browse </span> <span className="category_text">Categories </span> </div>

                    <BrowseCategoriesComponent handleSliceIndex={props.handleSliceIndex}></BrowseCategoriesComponent>

                </div>
                <div className="container-fluid p-4 mt-5">
                    <div className="text-center pt-4 pb-4 "> <span className="category_text">Featured </span><span className="browse_text"> Services </span>  </div>
                    <FeaturedServicesComponent handleSearchCardData={props.handleSearchCardData}></FeaturedServicesComponent>

                    <div>
         
                    </div>



                </div>


                <div className="container-fluid p-4 mt-5">
                    <div className="text-center pt-4 pb-4 "> <span className="category_text">Popular </span><span className="browse_text"> Services </span>  </div>


                </div>
                <div className="container p-4 pt-0">
                    <div className="row ">
                        {
                            data.slice(-8).map((item) => {
                                const base64String = btoa(String.fromCharCode(...new Uint8Array(item.serviceimages.data)))
                                return <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item._id}>
                                    <div className="card popular_card_style"  onClick={()=>{handleCardClick(item)}}>
                                        {/* <img className="card-img-top " src={hairservice} alt="Card  cap1" /> */}
                                        <img src={`data:image/jpeg;base64,${item.serviceimages}`} alt='imgnot' className="card-img-top"></img>

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
                                                <p className="card-title">{item.name}</p>
                                                <span className="popular_text">{item.description} </span>
                                                <div className="pt-2">Rating : <span className="popular_card_rating"> {item.rating}<i className="fa-solid fa-star fa-2xs ps-1"></i> </span> </div>
                                                <div className="d-flex justify-content-around align-items-center pt-4 pb-2">

                                                    <div>
                                                        <span className="popular_price text-center">{item.price}</span>
                                                    </div>
                                                    <div>
                                                        <button className="popular_btn ">Book Now</button>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }


                    </div>
                </div>
                <div className="container p-4 pt-0">

     

                </div>
                <div className="container p-4 pt-0">

                  
                    <div className="text-center mt-4">
                        <button className="explore_btn">Explore More</button>
                    </div>
                </div>
                <div className="container-fluid bg-ptag p-4 mt-5">
                    <div className="container pt-4">
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


            </div>
        </>
    )
}