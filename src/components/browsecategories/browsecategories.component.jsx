import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./browsecategories.component.css"
import { useNavigate } from "react-router-dom";
// import image5 from "../../assets/images/testimonialsimage-1.jpg"
export function BrowseCategoriesComponent(props) {
let navigate=useNavigate()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              },
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                },
              },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 380,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
          ],
    }

function handleCategory(startIndex, endIndex){
    props.handleSliceIndex(startIndex, endIndex)
    navigate("/singlecategory")
}

    return (
        <>
        <div className="d-flex justify-content-center">

        
            <div className="slider_styles">
                <Slider {...settings}>
                    <div >
                        <div class="card text-white text-center category_cart bg_color1" onClick={()=>{handleCategory(3, 6)}}>
                            <span className="pt-3">
                                <i className="fa-solid fa-broom category-icon"></i>
                            </span>
                            <div class="card-body ms-0 ps-0">
                                <h5 class="card-title">Saloon&Spa</h5>
                                <p class="card-text">3+ Services</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card text-white text-center category_cart bg_color2" >
                            <span className="pt-3">
                                <i className="fa-solid fa-broom category-icon"></i>
                            </span>
                            <div class="card-body ">
                                <h5 class="card-title">Electronics</h5>
                                <p class="card-text">3+ Services</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card text-white text-center category_cart bg_color3" onClick={()=>{handleCategory(0, 3)}}>
                            <span className="pt-3">
                                <i className="fa-solid fa-broom category-icon"></i>
                            </span>
                            <div class="card-body ">
                                <h5 class="card-title">Education </h5>
                                <p class="card-text">3+ Services</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card text-white text-center category_cart bg_color4">
                            <span className="pt-3">
                                <i className="fa-solid fa-broom category-icon"></i>
                            </span>
                            <div class="card-body ms-0 ps-0">
                                <h5 class="card-title">RealEstate </h5>
                                <p class="card-text">3+ Services</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card text-white text-center category_cart bg_color5">
                            <span className="pt-3">
                                <i className="fa-solid fa-broom category-icon"></i>
                            </span>
                            <div class="card-body ">
                                <h5 class="card-title">Cleaning</h5>
                                <p class="card-text">3+ Services</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card text-white text-center category_cart bg_color6" onClick={()=>{handleCategory(6, 9)}}>
                            <span className="pt-3">
                                <i className="fa-solid fa-broom category-icon"></i>
                            </span>
                            <div class="card-body ">
                                <h5 class="card-title">Repair </h5>
                                <p class="card-text">3+ Services</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card text-white text-center category_cart bg_color7">
                            <span className="pt-3">
                                <i className="fa-solid fa-broom category-icon"></i>
                            </span>
                            <div class="card-body ">
                                <h5 class="card-title">Electric </h5>
                                <p class="card-text">3+ Services</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card text-white text-center category_cart bg_color8">
                            <span className="pt-3">
                                <i className="fa-solid fa-broom category-icon"></i>
                            </span>
                            <div class="card-body ms-0 ps-0">
                                <h5 class="card-title">Home&Move</h5>
                                <p class="card-text">3+ Services</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card text-white text-center category_cart bg_color9">
                            <span className="pt-3">
                                <i className="fa-solid fa-broom category-icon"></i>
                            </span>
                            <div class="card-body ">
                                <h5 class="card-title">Plumbers</h5>
                                <p class="card-text">3+ Services</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card text-white text-center category_cart bg_color10">
                            <span className="pt-3">
                                <i className="fa-solid fa-broom category-icon"></i>
                            </span>
                            <div class="card-body ">
                                <h5 class="card-title">Painting</h5>
                                <p class="card-text">3+ Services</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            </div>
        </>
    )
}