import { useNavigate } from "react-router-dom"
import "./singlecategory.component.css"
import { useEffect, useState } from "react"
import { getServiceData } from "../../services/vendorservices.service"

export function SingleCategoryComponent(props){
    let navigate = useNavigate()
    const [data, setData] = useState([])
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(3)



    useEffect(() => {
        handleGetServiceData()
        if(props.sliceIndex !==""){
setStartIndex(props.sliceIndex[0])
setEndIndex(props.sliceIndex[1])
        }
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


    return(
        <>
            <div className="container p-4 ">
                    <div className="row ">
                        {
                            data.slice(startIndex, endIndex).map((item) => {
                                const base64String = btoa(String.fromCharCode(...new Uint8Array(item.serviceimages.data)))
                                return <div className="col-12 col-sm-6 col-md-4 col-lg-3">
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
        </>
    )
}