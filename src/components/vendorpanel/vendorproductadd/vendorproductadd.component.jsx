import { useEffect, useState } from "react";
import "./vendorproductadd.component.css"
import { useNavigate } from "react-router-dom";
import { saveServiceData } from "../../../services/vendorservices.service";
import { VendorPaymentsComponent, handlePayment, } from "../vendorpayments/vendorpayments.component";
import axios from "axios";
import pmtlogo from '../../../assets/images/mastercard.png'
import { orderPayment, verifyPayment } from "../../../services/razorpayservices";

export function VendorProductAddComponent(props) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [rating, setRating] = useState('')
    const [reviewcontent, setReviewContent] = useState('')
    const [errors, setErrors] = useState(false)
    const [paymentButtonsShow, setPaymentButtonsShow] = useState(false)
    const [isapproved, setIsApproved] = useState('false')


    let navigate = useNavigate()


    // const [book, setBook] = useState({
    // 	name: "The Harish n",
    // 	author: "harish author",
    // 	img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
    // 	price: 400,
    // });

    useEffect(() => {
        // console.log(props.productEditData)
    }, [])

    function handleAddProduct(approved) {
        setErrors(true)

        if (approved === 'true') {
            console.log(approved + "38 line")
            let fileInput = document.getElementById("serviceimages");
            let file = fileInput.files[0];

            if (file && name !== '' && description !== '' && price !== '' && location !== '') {
                let formData = new FormData();
                formData.append("serviceimages", file);
                formData.append("name", name);
                formData.append("description", description);
                formData.append("price", price);
                formData.append("location", location);
                formData.append("rating", rating);
                formData.append("reviewcontent", reviewcontent);
                formData.append("isapproved", "true");

                saveServiceData(formData)
                    .then((res) => {
                        console.log(res)
                        // if you select file then post will work, see if condition
                        alert("success")
                        setErrors(false)
                        clearForm()
                        props.onMenuItemClick('vendorproducts')

                    })
                    .catch((res) => {
                        alert(res)
                    })
            }

        } else {
            let fileInput = document.getElementById("serviceimages");
            let file = fileInput.files[0];

            if (file && name !== '' && description !== '' && price !== '' && location !== '') {
                let formData = new FormData();
                formData.append("serviceimages", file);
                formData.append("name", name);
                formData.append("description", description);
                formData.append("price", price);
                formData.append("location", location);
                formData.append("rating", rating);
                formData.append("reviewcontent", reviewcontent);
                formData.append("isapproved", isapproved);

                saveServiceData(formData)
                    .then((res) => {
                        console.log(res)
                        // if you select file then post will work, see if condition
                        alert("success")
                        setErrors(false)
                        clearForm()
                        props.onMenuItemClick('vendorproducts')

                    })
                    .catch((res) => {
                        alert(res)
                    })
            }
        }

    }

    function clearForm() {
        setName('')
        setDescription('')
        setPrice('')
        setLocation('')
        setRating('')
        setReviewContent('')
        setErrors(false)

    }

    function handlePaymentButtonsShow() {
        setErrors(true)
        let fileInput = document.getElementById("serviceimages");
        let file = fileInput.files[0];
        if (file && name !== '' && description !== '' && price !== '' && location !== '') {
            setPaymentButtonsShow(true)
        }

    }
    // function handleRazorPayment(){
    // payment function START here but image shoud taken from outside block 
    // const initPayment = (data) => {
    // 	const options = {
    // 		key: "rzp_test_9ADUZBqYOUl6Yp",
    // 		amount: data.amount,
    // 		currency: data.currency,
    // 		name: "Harish NN", // we can manipulate this line
    // 		description: "Test Transaction",
    // 		image: pmtlogo, // we can manipulate this line
    // 		order_id: data.id,

    //         handler: async (response) => {
    //                 verifyPayment(response)
    //                 .then((res) => {
    //                     console.log(res.data);
    //                 alert("peyment success")

    //                 })
    //                 .catch((res) => {
    //                     alert(res + "")
    //                 })
    //         },
    //         theme: {
    //             color: "#3399cc",
    //         },
    //         method: {
    //             netbanking: true,
    //             card: true,
    //             wallet: true,
    //             upi: true,
    //             paylater: true
    //           },
    //     };
    //     const rzp1 = new window.Razorpay(options);
    //     rzp1.open();
    // };

    // const handlePayment = async () => {
    //         orderPayment({ amount: 400 })
    //         .then((res) => {
    //             console.log(res.data.data.amount);
    //             initPayment(res.data.data);

    //         })
    //         .catch((res) => {
    //             alert(res + "")
    //         })
    // };
    // payment function END here 
    let navigateProducts = () => props.onMenuItemClick('vendorproducts')

    function handleMakePayment() {
        // setPaymentButtonsShow(false)
        handlePayment(navigateProducts, handleAddProduct)
    }
    function handleDoItLater() {
        handleAddProduct()
        setPaymentButtonsShow(false)
    }
    return (
        <>
            <div className="container-fluid">
                <div className="project_create_parent">

                    <div className="project_create_header row pb-3">
                        <div className=" col-auto col-sm-2">
                            <button className="btn-create" onClick={() => props.onMenuItemClick('vendorproducts')} >Back</button>
                        </div>
                        <div className=" col-auto col-sm-10 d-flex justify-content-end " >
                            <div className="row ">
                                <div className="col-auto col-sm-auto" >
                                    <button className="btn_home margin_minus " onClick={() => props.onMenuItemClick('dashboard')} ><i className="fa-solid fa-house "></i> Home</button>
                                </div>
                                {/* <div className="col-auto col-sm-auto ">
                                    <button className="btn_home margin_minus" onClick={() => props.childRef.current.navigateProjectAll()} > <i className="fa-solid fa-angle-right project_angle_right pe-1"></i> <i className="fas fa-project-diagram pe-1"></i> Project Manage</button>
                                </div> */}
                                <div className="col-auto col-sm-auto">
                                    <span className="arrowdown_icon_span ps-1 pe-4"> <i className="fa-solid fa-angle-right project_angle_right pe-1"></i> <i className="fas fa-caret-square-down pe-1"></i>Add</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project_create p-3">
                        <div>
                            <p className="create_title p-0 m-0">
                                Add Product
                            </p>
                            {/* <span className="create_sub_title p-0 m-0">
                                Edit Project Manage Information
                            </span> */}
                        </div>
                        <div className="row ps-4 ">
                            <div className="input_container col-12 col-sm-5">
                                <input
                                    className="input_name"
                                    type="text"
                                    id="myInput"
                                    placeholder=" "
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label htmlFor="myInput" className="label_name">Name<span className="text-danger">*</span></label>
                                {
                                    errors && name == "" && <span className="text-danger error_size ">Please Enter Value</span>
                                }
                            </div>

                            <div className="input_container col-12 col-sm-7">
                                <input
                                    className="input_name"
                                    type="text"
                                    id="myInput"
                                    placeholder=" "
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <label htmlFor="myInput" className="label_name">Description</label>
                                {
                                    errors && description == "" && <span className="text-danger error_size ">Please Enter Value</span>
                                }
                            </div>
                            <div className="input_container pt-5 ">
                                <input
                                    className="input_name"
                                    type="textarea"
                                    id="myInput"
                                    placeholder=" "
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <label htmlFor="myInput" className="label_name">Price</label>
                                {
                                    errors && price == "" && <span className="text-danger error_size ">Please Enter Value</span>
                                }
                            </div>
                            <div className="input_container pt-5 ">
                                <input
                                    className="input_name"
                                    type="textarea"
                                    id="myInput"
                                    placeholder=" "
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                                <label htmlFor="myInput" className="label_name">Location</label>
                                {
                                    errors && location == "" && <span className="text-danger error_size ">Please Enter Value</span>
                                }
                            </div>
                            <div>
                                <input type="file" id="serviceimages" className="form-control" /><br></br>

                            </div>
                        </div>
                        <div className="ps-4 pt-4 pb-4">
                            <button className="btn-create" onClick={() => (handlePaymentButtonsShow())} data-bs-toggle="modal" data-bs-target="#exampleModal" >Add Product</button>&nbsp;&nbsp;
                            <button onClick={() => { clearForm() }} className="btn-clear-form ">clear form</button>&nbsp;&nbsp;

                        </div>

                        {/* {
                            paymentButtonsShow && <div className='mt-2 form-group'>
                                <button onClick={() => (handleMakePayment())} className='btn btn-primary ' >Make payment</button> &nbsp;&nbsp;
                                <button onClick={() => (handleDoItLater())} className="btn btn-danger">I will do it later</button>&nbsp;&nbsp;

                            </div>
                        } */}

                        <div class="modal fade custom-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Payment</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        To place your product please complete payment
                                    </div>
                                    <div class="modal-footer">
                                        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                                        <div className="">
                                            <div>
                                            <button onClick={() => (handleMakePayment())} className='btn btn-primary ' data-bs-dismiss="modal" >Make payment</button> &nbsp;&nbsp;
                                            <button onClick={() => (handleDoItLater())} className="btn btn-danger" data-bs-dismiss="modal">I will do it later</button>&nbsp;&nbsp;
                                        
                                            </div>
                                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}