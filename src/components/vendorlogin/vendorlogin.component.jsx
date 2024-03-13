import { getImageData, getUserData, saveImageData, saveUserData, saveUserTokenData } from '../../services/user.service';
import './vendorlogin.component.css'
import React, { useState } from 'react'
import { removeLocalStorageItem, setLocalStorageItem } from '../../services/storages/local.storage';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { getServiceData, saveVendorLogin } from '../../services/vendorservices.service';
import store from '../../services/storages/redux.storage';
import googleLogo from '../../assets/images/googlelogo.png'
import axios from 'axios';

export function VendorLoginComponent(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [adminEmail, setAdminEmail] = useState('admin@email.com')

axios.defaults.withCredentials = true;
    let navigate = useNavigate()
    // useEffect(() => {

    //     store.dispatch({type:"userData", data:null})
    // }, [])

    useEffect(() => {
        // store.dispatch({type:"userData", data:null})

        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
            // Store the token in local storage
            setLocalStorageItem("vendortoken", token);
            store.dispatch({ type: "userData", data: token })
            navigate("/vendordashboard")

        }
    }, []);
    function handleUpload() {
        let fileInput = document.getElementById("serviceimages");
        let file = fileInput.files[0];

        if (file) {
            let formData = new FormData();
            formData.append("serviceimages", file);
            saveImageData(formData)
                .then((res) => {
                    console.log(res)
                    alert("success")
                })
                .catch((res) => {
                    alert(res + " \n" + "user not exist")
                })

        }

    }

    function getRegisteredUser() {
        if (email !== '' && password !== '') {
            let data = {
                email: email,
                password: password
            }

            // saveUserTokenData(data)
            saveVendorLogin(data)
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
                        setLocalStorageItem("vendorData", res.data)
                        removeLocalStorageItem("admintoken")
                        store.dispatch({ type: "vendorData", data: res.data.checked })

                        alert("success")
                        navigate("/vendordashboard")
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
    function handleDownload() {
        getServiceData()
            .then((res) => {
                // setImg(res.data)
                console.log(res.data[0].serviceimages.data)
                alert("success")
            })
            .catch((res) => {
                alert(res + " \n" + "user not exist")
            })
    }
    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    };
    // const base64String1= btoa( String.fromCharCode(...new Uint8Array(img[0].serviceimages.data)))
    // <img src={`data:image/jpeg;base64,${base64String1}`} alt='imgnot'></img> 

    function handleGoogleSignIn() {
        // googleAuth()
        // .then((res) => {
        //     alert("success")
        // })
        // .catch((res) => {
        //     alert(res )
        // })

        window.open("http://localhost:4006/vendordata/auth/google", "_self")
    }

// testingRefreshToken 
const refresh = async () => {
    const response = await axios.get('http://localhost:4006/refresh', {
        withCredentials: true
    });
    console.log("from tesing refresh token"+response.data)
}



    return (
        <div className='login d-flex justify-content-center'>


            <div className='login-form m-3 mt-5'>
                <h4 style={{ textAlign: "center" }}>Vendor Sign in</h4>
                <div className='pt-2'>
                    <button className='btn btn-primary' onClick={() => { navigate('/login')}}>User login</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='btn btn-secondary' onClick={() => {  }}>Vendor login</button>
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
           
                {/* <div className='d-flex  align-items-center justify-content-center google-logo-div  rounded-pill mt-2 mb-2 w-100'>
                  <div className='p-2'> 
                  <img src={googleLogo} className='google-logo'></img>
                    <button className='google-logo-button' onClick={() => { handleGoogleSignIn() }}> Sign in with Google </button>
                  </div>
                </div> */}
                {/* <button className='btn btn-primary' onClick={()=>{refresh()}}>refresh token</button> */}

            </div>

        </div>
    )


}