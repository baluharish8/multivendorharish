import { getImageData, getUserData, saveImageData, saveUserData, saveUserTokenData } from '../../services/user.service';
import './login.component.css'
import React, { useState } from 'react'
import { getLocalStorageItem, removeLocalStorage, removeLocalStorageItem, setLocalStorageItem } from '../../services/storages/local.storage';
// import store from '../../services/storages/redux.storage';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { getServiceData, getVendorProfileData } from '../../services/vendorservices.service';
import { googleAuth } from '../../services/google.service';
import store from '../../services/storages/redux.storage';
import googleLogo from '../../assets/images/googlelogo.png'
import axios from 'axios';
import { useGetVendorServiceDataAi } from '../../services/vendorservices.serviceAi';

export function LoginComponent(props) {
    const { getVendorProfileDataAi } = useGetVendorServiceDataAi()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [adminEmail, setAdminEmail] = useState('admin@email.com')

    axios.defaults.withCredentials = true;
    let navigate = useNavigate()


    useEffect(() => {
        // store.dispatch({type:"userData", data:null})
        // removeLocalStorage()

        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const existedUser = urlParams.get('existedUser');


        if (token) {
            let headers = {
                "Authorization": `Bearer ${token}`
            };

            // Store the token in local storage
            setLocalStorageItem("token", token);
            // console.log('from params existeduser',existedUser.firstName)
            store.dispatch({ type: "userData", data: existedUser })
            // getVendorProfileDataAi()
            getVendorProfileData({ headers })
                .then((res) => {
                    store.dispatch({ type: "userData", data: res.data })
                    navigate("/")
                    console.log('from login user profile', res.data)
                })
                .catch((error) => {
                    alert(error)
                    if (error.response && error.response.status === 400) {
                        console.error(error.response.data);
                        alert(error.response.data + "msg from BE")
                    } else {
                        console.error('An error occurred:', error.message);
                    }
                    if (error.response && error.response.status === 500) {
                        console.error(error.response.data);
                        alert(error.response.data + "msg from")
                        removeLocalStorageItem("vendortoken")
                        navigate('/login')
                    } else {
                        console.error('An error occurred:', error.message + "at else");
                    }
                })

            // navigate("/")

        }
    }, []);


    function getRegisteredUser() {
        if (email !== '' && password !== '') {
            let data = {
                email: email,
                password: password
            }

            saveUserTokenData(data)
                .then((res) => {
                    console.log(res.data.token)
                    console.log(res.data)
                    setLocalStorageItem("user", res.data)
                    if (email === adminEmail) {
                        console.log("admiemail auteuthentication checking")
                        setLocalStorageItem("admintoken", res.data.token)
                        removeLocalStorageItem("vendortoken")
                        alert("success")
                        navigate("/admindashboard")
                    } else {
                        setLocalStorageItem("token", res.data.token)
                        setLocalStorageItem("userData", res.data)
                        removeLocalStorageItem("admintoken")

                        alert("success")
                        store.dispatch({ type: "userData", data: res.data.checked })
                        navigate("/")

                    }



                })
                .catch((error) => {
                    if (error.response && error.response.status === 400) {
                        // Backend returned a 400 status code
                        console.error(error.response.data); // This will log 'User already exists'
                        alert(error.response.data)
                    } else {
                        // Other types of errors
                        console.error('An error occurred:', error.message);
                    }
                    // alert(res + " \n" + "user not exist")
                })
        } else {
            alert("please enter email and password")
        }

    }

    // const base64String1= btoa( String.fromCharCode(...new Uint8Array(img[0].serviceimages.data)))
    // <img src={`data:image/jpeg;base64,${base64String1}`} alt='imgnot'></img> 

    function handleGoogleSignIn() {
   
        window.open("http://localhost:4006/userdata/auth/google", "_self")
    }

    // testingRefreshToken 
    const refresh = async () => {
        const response = await axios.get('http://localhost:4006/refresh', {
            withCredentials: true
        });
        console.log("from tesing refresh token" + response.data)
    }



    return (
        <div className='login d-flex justify-content-center'>


            <div className='login-form m-3 mt-5'>
                <h4 style={{ textAlign: "center" }}>User Sign in</h4>
                <div className='pt-2'>
                    <button className='btn btn-secondary' onClick={() => { }}>User login</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='btn btn-primary' onClick={() => { navigate('/vendorlogin') }}>Vendor login</button>
                </div>
                <div className='form-group mt-3'>
                    <input type='email' className='input-tags' placeholder='Email address' id='email' value={email} onChange={(e) => { setEmail(e.target.value) }} ></input>
                </div>
                <div className='form-group mt-3'>
                    <input type='password' className='input-tags' placeholder='password' id='password' value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                </div>
                <div className='mt-4'>
                    <input type="radio" value="true" id="radio-sign" className='me-2' />
                    <label htmlFor="radio-sign"> Keep me signed in</label>
                </div>
                <div className='mt-3 signin_btn'>
                    <button className=' btn btn-primary' onClick={() => { getRegisteredUser() }}>Signin</button> &nbsp;&nbsp;
                    {/* <button className='btn btn-secondary'>Cancel</button> */}

                </div>

                <div className='d-flex  align-items-center justify-content-center google-logo-div  rounded-pill mt-2 mb-2 w-100'>
                    <div className='p-2'>
                        <img src={googleLogo} className='google-logo'></img>
                        <button className='google-logo-button' onClick={() => { handleGoogleSignIn() }}> Sign in with Google </button>
                    </div>
                </div>

             {/* <button className='btn btn-primary' onClick={() => { refresh() }}>refresh token</button> */}

            </div>

        </div>
    )


}