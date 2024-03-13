import { useState } from "react"
import "./header.component.css"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import education1 from "../../assets/images/serviceimages/ElectronicsRepair.jpg"
import education2 from "../../assets/images/serviceimages/ElectronicsRepair.jpg"
import education3 from "../../assets/images/serviceimages/ElectronicsRepair.jpg"
import SaloonSpa1 from "../../assets/images/serviceimages/ElectronicsRepair.jpg"
import SaloonSpa2 from "../../assets/images/serviceimages/ElectronicsRepair.jpg"
import SaloonSpa3 from "../../assets/images/serviceimages/ElectronicsRepair.jpg"
import { removeLocalStorageItem, setLocalStorageItem } from "../../services/storages/local.storage"
import { getServiceData } from "../../services/vendorservices.service"
import store from "../../services/storages/redux.storage"
import { useGetVendorServiceDataAi } from "../../services/vendorservices.serviceAi"

export function HeaderComponent(props) {
    const { getVendorProfileDataAi } = useGetVendorServiceDataAi()

    const navigate = useNavigate()
    const [showNavMenu, setShowNavMenu] = useState(false)
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [vendorLoggedIn, setVendorLoggedIn] = useState(false)

    const [isScrolled, setIsScrolled] = useState(false);
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])
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
    let loginData
    useEffect(() => {
        // getVendorProfileDataAi()
        // .then((res) => {
        //     store.dispatch({ type: "userData", data: res.data })
                

        //     console.log('from header user profile',res.data)
        // })
        // .catch((error) => {
        //     // alert(error)
        //     if (error.response && error.response.status === 400) {
        //         console.error(error.response.data);
        //         alert(error.response.data + "msg from BE")
        //     } else {
        //         console.error('An error occurred:', error.message);
        //     }
        //     if (error.response && error.response.status === 500) {
        //         console.error(error.response.data);
        //         alert(error.response.data + "msg from")
        //         removeLocalStorageItem("vendortoken")
        //         navigate('/login')
        //     } else {
        //         console.error('An error occurred:', error.message + "at else");
        //     }
        // })

        //after login profile show execute(user)
        const userData = store?.getState()?.userData;
        let isUserLoggedIn = userData ? true : false;
        setUserLoggedIn(isUserLoggedIn)

        //after logout subscribe function executes(user)
        store.subscribe(() => {
            const userData = store.getState().userData;
            console.log("from logout testing UserData:", userData);
            let isUserLoggedIn = userData ? true : false;
            console.log("from logout testing UserData:", isUserLoggedIn);
            setUserLoggedIn(isUserLoggedIn)
          });

        //after login profile show execute(vendor)
        const vendorData = store?.getState()?.vendorData;
        let isVendorLoggedIn = vendorData ? true : false;
        setVendorLoggedIn(isVendorLoggedIn)

        //after logout subscribe function executes(vendor)
        store.subscribe(() => {
            const vendorData = store.getState().vendorData;
            console.log("from logout testing UserData:", vendorData);
            let isVendorLoggedIn = vendorData ? true : false;
            console.log("from logout testing UserData:", isVendorLoggedIn);
            setVendorLoggedIn(isVendorLoggedIn)
          });


        handleGetServiceData()
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
       
    }, []);

    function handleSearchCard(item) {
        props.handleSearchCardData(item)
        localStorage.setItem('searchCardData', JSON.stringify(item));
        navigate("/searchcard")

        const desData = {
            id: item.id,
            image: item.image,
            name: item.name,
            description: item.description,
            price: item.price,
            location: item.location,
            rating: item.rating
            // Include other properties as needed
        };
        setLocalStorageItem("search", item)
        console.log(item)
    }
    function userLogOut() {
        store.dispatch({ type: "userData", data: null })
        store.dispatch({ type: "vendorData", data: null })

        // let loginData1 = store.getState().userData;
        // console.log('from log out button ' , loginData1)
        // const userData = store.getState().userData;
        // console.log("UserData:", userData);
      
    }
  

    return (
        <>
            <div className="header_div">
                {/* <div className="header main"> */}
                <div className={isScrolled ? "d-none" : " d-block header main"}>
                    <div className="container-fluid contain">
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
                                    {/* <Link to="/login" className="header_btn">Login</Link>
                                    <Link to="/registration" className="header_btn">Register</Link> */}
                                    {
                                        !userLoggedIn && !vendorLoggedIn && <> <Link to="/login" className="header_btn">Login</Link>
                                            <Link to="/registration" className="header_btn">Register</Link> </>
                                    }
                                    {
                                        userLoggedIn && <>
                                            <Link to="/userprofile" className="header_btn">Profile</Link>
                                            <button className="header_btn" onClick={() => { userLogOut() }}>Logout</button>
                                            {/* <Link to="#" className="header_btn">Logout</Link>  */}
                                        </>
                                    }
                                         {
                                        vendorLoggedIn && <>
                                            <Link to="/vendordashboard" className="header_btn">Dashboard</Link>
                                            <button className="header_btn" onClick={() => { userLogOut() }}>Logout</button>
                                            {/* <Link to="#" className="header_btn">Logout</Link>  */}
                                        </>
                                    }
                                            {/* <button className="header_btn" onClick={() => { userLogOut() }}>Testing</button> */}

                                    {/* <button className="header_btn">Login</button>
                                    <button className="header_btn">Register</button> */}
                                    <button className="header_btn">Locate Store</button>
                                    <button className="header_btn">Track Order</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="header1 position_div p-2 ps-3 pe-3 ">
                    <div className="container-fluid">

                        <div className="d-flex   align-items-center row ps-2 pe-2">
                            <div className=" d-flex  align-items-center justify-content-center   col-md-3 " onClick={() => { navigate("/home") }}>

                                <span className="logo_image">
                                    <i className="fa-solid fa-image text-white"></i>
                                </span>
                                <span className="text-white logo_name ps-2 ">Find Dubai</span>
                            </div>
                            <div className=" d-flex  align-items-center   bg-light rounded-pill col-md-6 col-lg-6 mt-2 mb-2 search_div">
                                <i className="fas fa-search ps-3 text-secondary" aria-hidden="true"></i>
                                <input className="form-control " type="text" placeholder="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
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
                        <div className="search_data ">
                            {
                                data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) && search !== "" && item.isapproved === 'true').map((item) => {
                                    // const base64String = btoa(String.fromCharCode(...new Uint8Array(item.serviceimages))) // this is working for sql database
                                    return <>
                                        {/* <li> {item.name}</li>
                                        <li><img src={item.image} alt="online cou"></img> </li> */}
                                        <div className="card" key={item.id} onClick={() => { handleSearchCard(item) }}>
                                            <div className="row no-gutters">
                                                <div className="col-md-4">
                                                    <img src={`data:image/jpeg;base64,${item.serviceimages}`} alt='imgnot' className="img-fluid"></img>

                                                </div>
                                                <div className="col-md-8 ">
                                                    <div className="card-body m-0 pt-2">
                                                        <h5 className="card-title">{item.name}</h5>
                                                        <p className="search_price">{item.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* <div className="header2 "> */}
                <div className={isScrolled ? "d-none" : " d-block header2"}>

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