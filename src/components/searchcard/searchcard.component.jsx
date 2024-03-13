import { useEffect, useState } from "react"
import "./searchcard.component.css"
import { StarRating } from "../ratingcomp/ratingcomponent"
import { Link, useNavigate } from "react-router-dom";
import { getServiceData, updateServiceData } from "../../services/vendorservices.service";

export function SearchCardComponent(props) {
    const [searchCardData, setSearchCardData] = useState(null);
    let navigate = useNavigate()
    const [name, setName] = useState('')
    const [description, setdescription] = useState('')
    const [price, setprice] = useState('')
    const [location, setlocation] = useState('')
    const [rating, setrating] = useState('')
    const [reviewcontent, setreviewcontent] = useState('')
    const [id, setid] = useState('')
    const [userRating, setUserRating] = useState('');
    const [serviceimages, setServiceimages] = useState('');

    // const [data, setData] = useState([])
    const handleRatingChange = (newRating) => {
        setUserRating(newRating);
    }
    // const [ratings, setRatings] = useState(rating);

    useEffect(() => {
        // Retrieve data from local storage when the component mounts or searchCardData changes
        const storedData = localStorage.getItem('searchCardData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setName(parsedData?.name);
            setdescription(parsedData?.description);
            setprice(parsedData?.price);
            setlocation(parsedData?.location);
            setrating(parsedData?.rating);
            setreviewcontent(parsedData?.reviewcontent);
            setid(parsedData?._id);
            setUserRating(parsedData?.rating);
            setServiceimages(parsedData?.serviceimages);
        }
    }, []);
    useEffect(() => {
        console.log(userRating)
    }, [userRating])

    function handleRatingSubmit() {
        // setRatings(userRating)
        let data = {
            id: id,
            name: name,
            description: description,
            price: price,
            location: location,
            rating: userRating,
            reviewcontent: reviewcontent
        }
        console.log(data)
        updateServiceData(data)
            .then((res) => {
                console.log(res.data)
                alert("update success")
                handleGetData()
            })
            .catch((res) => {
                alert(res)
            })
    }
    function handleGetData() {
        getServiceData()
            .then((res) => {
                const storedData = JSON.parse(localStorage.getItem('searchCardData'));
                if (storedData) {
                    let filteredData = res.data.filter((item) => item._id == storedData._id)
                    console.log(filteredData)
                    if (filteredData) {
                        localStorage.setItem('searchCardData', JSON.stringify(filteredData[0]));
                    }
                }


            })
            .catch((res) => {
                alert(res)
            })

        // setName(item.name)
        // setdescription(item.description)
        // setprice(item.price)
        // setlocation(item.location)
        // setrating(item.rating)
        // setreviewcontent(item.reviewcontent)
    }
    const base64String = serviceimages ? btoa(String.fromCharCode(...new Uint8Array(serviceimages.data))) : null;

    // const base64String = btoa(String.fromCharCode(...new Uint8Array(serviceimages.data)))

    return (
        <>
            <div className="container pt-5">
                <div className="w-25">
                    <button className="btn btn-primary " onClick={() => { navigate("/") }}>Home</button>
                </div>
                <div className="card p-3 pb-5" >
                    <div className="row no-gutters">
                        <div className="col-md-4">

                            {/* <img src={image} className="img-fluid" alt="online cou" /> */}
                            <img src={`data:image/jpeg;base64,${serviceimages}`} alt='imgnot' className="img-fluid"></img>


                        </div>
                        <div className="col-md-8">
                            <div className="card-body m-0 p-0">
                                <h5 className="card-title">{name}</h5>
                                <p className="search_pric">{description}</p>
                                <p className="search_pric"><span className="pe-2" >Price :</span>{price}</p>
                                <p className="search_pric  "><span className="pe-2">Rating :</span><span className="text-white mobile__div2__icon">{userRating}<i className="fa-solid fa-star fa-2xs ps-1"></i></span> <span> <StarRating initialRating={userRating} totalStars={5} onRatingChange={handleRatingChange} /> </span> </p>
                                <p className="search_pric"><span>Location <i className="fa-solid fa-location-dot pe-2"></i></span>{location}</p>
                                {/* <p className="search_pric"><span>Call :</span> +5451 4763 471</p> */}
                                <a href="tel:+5451 4763 471" className="anchor-phone  text-white"><span>  <i className="fa-solid fa-phone"></i> </span>+5451 4763 471</a>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="d-flex justify-content-start mt-4 mb-4 ps-3 ">
                    <div className="w-100">
                        <div>
                            <span className="fw-bold">  Reviews & Ratings</span><br></br>
                            <span className="text-white rating ">{userRating}<i className="fa-solid fa-star fa-2xs ps-1"></i></span>
                        </div>
                        <div>
                            <span className="fw-bold">  Start your Review</span>
                        </div>
                        <StarRating initialRating={userRating} totalStars={5} onRatingChange={handleRatingChange} />
                        <div className="">
                            <input type="text" className="review-input pt-2 mb-3" placeholder="Write your review" value={reviewcontent} onChange={(e) => { setreviewcontent(e.target.value) }} ></input>

                        </div>

                        <p>Your Rating: {userRating}</p>
                        <button className="btn_review" onClick={() => { handleRatingSubmit() }}>Post your review</button>
                    </div>


                </div>
            </div>

        </>
    )
}