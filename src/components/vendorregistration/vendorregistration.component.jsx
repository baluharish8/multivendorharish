import { useForm } from "react-hook-form"
import { gettingData, saveUserData, storedData } from "../../services/user.service"
import "./vendorregistration.component.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { saveVendorData } from "../../services/vendorservices.service"

export function VendorRegistrationComponent() {

    //  variable for useform
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    let navigate = useNavigate()
    function sendData(event) {

        let data = {
            email: document.getElementById("email").value,
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            password: document.getElementById("password").value,
        }
        // saveUserData(data)
        saveVendorData(data)
            .then((res) => {
                alert("Saved successfully")
                clearForm()
                navigate("/vendorlogin")
            }
            )
            .catch((error) => {
                // console.log(res.data)
                if (error.response && error.response.status === 400) {
                    // Backend returned a 400 status code
                    console.error(error.response.data.message); // This will log 'User already exists'
                    alert(error.response.data.message)
                    navigate("/vendorlogin")
                    clearForm()

                } else {
                    // Other types of errors
                    console.error('An error occurred:', error.message);
                }
            }
            )


        function clearForm() {
            document.getElementById("email").value = ""
            document.getElementById("firstName").value = ""
            document.getElementById("lastName").value = ""
            document.getElementById("password").value = ""
            document.getElementById("password2").value = ""

        }
        
    }
    return (
        <>
            <div className="d-flex justify-content-center registration h-100">

                <form className="registration_form  m-3 mt-5" onSubmit={handleSubmit((event) => { sendData(event) })} >
                    <button className="btn btn-primary mb-2" onClick={() => { navigate("/") }}>Home</button>
                    <h4>Create an Vendor account</h4>
                    <div className='pt-2'>
                        <button className='btn btn-primary' onClick={() => { navigate('/registration') }}>User Registration</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className='btn btn-secondary' onClick={() => { }}>Vendor Registration</button>
                    </div>
                    <div className="">
                        <input type="text" {...register("email", {
                            required: true,
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email',
                            }
                        })} className="input-registration  " placeholder="Email" id="email"></input>
                        {
                            errors.email && errors.email.type === "required" ? <span className="text-danger">Please enter Email</span> :

                                errors.email && errors.email.type === "pattern" ? <span className="text-danger">{errors.email.message}</span> : ""
                        }
                    </div>
                    <div className="">
                        <input type="text" {...register("firstName", { required: true, minLength: 3, maxLength: 15 })} className="input-registration" placeholder="FirstName" id="firstName"></input>
                        {
                            errors.firstName && errors.firstName.type === "required" ? <span className="text-danger">Please enter firstname</span> :
                                errors.firstName && errors.firstName.type === "minLength" ? <span className="text-danger">Please enter atleast 3 char</span> :
                                    errors.firstName && errors.firstName.type === "maxLength" ? <span className="text-danger">Please enter max 15 char</span> : ""

                        }
                    </div>
                    <div className="">
                        <input type="text" {...register("lastName", { required: true, minLength: 3, maxLength: 15 })} className="input-registration" placeholder="LastName" id="lastName"></input>
                        {
                            errors.lastName && errors.lastName.type === "required" ? <span className="text-danger">Please enter lastname</span> :
                                errors.lastName && errors.lastName.type === "minLength" ? <span className="text-danger">Please enter atleast 3 char</span> :
                                    errors.lastName && errors.lastName.type === "maxLength" ? <span className="text-danger">Please enter max 15 char</span> : ""

                        }
                    </div>

                    <div className="">
                        <input type="password" {...register("passcode", {
                            required: true,
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[a-zA-Z\d@#$%^&+=]{8,}$/,  //This password contains at least one uppercase letter, one lowercase letter, one digit, and one special character, and it's 8 characters long
                                message: 'contains at least one uppercase letter, one lowercase letter, one digit, one special character and 8 characters',
                            }
                        })} className="input-registration" placeholder="Password" id="password"  ></input>
                        {
                            errors.passcode && errors.passcode.type === "required" ? <span className="text-danger">Please enter password</span> :

                                errors.passcode && errors.passcode.type === "pattern" ? <span className="text-danger">{errors.passcode.message}</span> : ""
                        }
                    </div>

                    <div className="">
                        <input type="password" {...register("passcode2", {
                            required: true,
                            validate: (val) => {
                                if (watch('passcode') != val) {
                                    return "Your passwords do no match";
                                }
                            },
                        })} className="input-registration  " placeholder="Confirm password" id="password2"  ></input>
                        {
                            errors.passcode2 && errors.passcode2.type === "required" ? <span className="text-danger">Please enter Confirm password</span> :
                                // errors.passcode2 && errors.passcode2.type === "pattern" ? <span className="text-danger">{errors.passcode2.message}</span> : 
                                errors.passcode2 && errors.passcode2.type === "validate" ? <span className="text-danger">{"Confirm Password Not Matched"}</span> : ""
                        }

                    </div>
                    <div>
                        <p className="tac mt-5">
                            By creating an account, I agree to the Justdial Terms and Conditions and
                            Privacy Statement.
                        </p>
                    </div>
                    <div className=" button">
                        <div className="">
                            <input type="submit" value="Signup" className="btn btn-primary" ></input>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}