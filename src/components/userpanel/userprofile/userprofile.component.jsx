import "./userprofile.component.css"
import profilePicture from "../../../assets/images/mastercard.png"
import { useEffect, useRef, useState } from "react"
// import { getProfileData, updateProfileData, updateProfilePasswordData } from "../../../services/profile.service"
import { getUserData } from "../../../services/user.service"
import { getServiceData, getVendorProfileData, getVendorServiceData } from "../../../services/vendorservices.service"
import { getLocalStorageItem, removeLocalStorage, removeLocalStorageItem } from "../../../services/storages/local.storage"
import { useNavigate } from "react-router-dom"
import store from "../../../services/storages/redux.storage"
import { useGetVendorServiceDataAi } from "../../../services/vendorservices.serviceAi"
export function UserProfileComponent(props) {
    const { getVendorProfileDataAi } = useGetVendorServiceDataAi()
    //useRef showing errors while navigate changhe password conditional rendering 
    // let firstName = useRef(null)
    // let lastName = useRef(null)
    const [profileId, setProfileId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [designation, setDesignation] = useState('')
    const [nid, setNid] = useState('')
    const [education, setEducation] = useState('')
    const [permanentAddress, setPermanentAddress] = useState('')
    const [presentAddress, setPresentAddress] = useState('')
    const [description, setDescription] = useState('')
    const [profileImg, setProfileImg] = useState('')


    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState(false)
    const [confirmPasswordNotMatched, setConfirmPasswordNotMatched] = useState(false)
    const [oldPasswordNotMatched, setOldPasswordNotMatched] = useState(false)
    let navigate = useNavigate()






    const [showProfileSettings, setShowProfileSetting] = useState(true)
    //langusge selection
    const [showSelectActionItems, setShowSelectActionItems] = useState(false)
    const [selectAction, setSelectAction] = useState('Select Language')
    //gender selection
    const [showGenderSelectionItems, setShowGenderSelectionItems] = useState(false)
    const [selectGender, setSelectGender] = useState('Gender')

    //service data for tesing
    // function handleGetServiceData() {
    //     getServiceData()
    //         .then((res) => {
    //             // setProfileImg(res.data[1]?.serviceimages)
    //             // console.log(res.data[1]?.serviceimages)
    //             // alert("get success")
    //         })
    //         .catch((res) => {
    //             alert(res)
    //         })
    // }




    function handleGetProfileData() {
        // getServiceData()
        let token = getLocalStorageItem("vendortoken")
        console.log(token)
        let headers = {
            "vendor-token": token
        }
        // getVendorProfileData({ headers })
        getVendorProfileDataAi()

            .then((res) => {
                
                // handleProfileData(res.data)

                console.log(res.data)
            })
            .catch((error) => {
                // alert(error)
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
    }
    useEffect(() => {
        // handleGetProfileData()
        // handleGetServiceData()

        const userData = store?.getState()?.userData;
        console.log('from user profile useeffect',userData.firstName)
        handleProfileData(userData)

    }, [])
    function handleProfileData(data) {
        setProfileId(data._id)
        setFirstName(data.firstName);
        setLastName(data.lastName)
        setPhoneNumber(data.phoneNumber)
        setDesignation(data.designation)
        setSelectGender(data.gender)
        setNid(data.nid)
        setEducation(data.education)
        setPermanentAddress(data.permanentAddress)
        setPresentAddress(data.presentAddress)
        setDescription(data.description)
        setSelectAction(data.language)
        setProfileImg(data.image)
    }

    //language selection
    function handleSelectAction(value) {
        setSelectAction(value)
        setShowSelectActionItems(false)

    }
    //gender selection
    function handleGenderSelection(value) {
        setSelectGender(value)
        setShowGenderSelectionItems(false)
    }

    function handleProfileSettings() {
        setShowProfileSetting(!showProfileSettings)

    }

    function updateProfile() {
        let data = {
            id: profileId,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            designation: designation,
            gender: selectGender,
            nid: nid,
            education: education,
            permanentAddress: permanentAddress,
            presentAddress: presentAddress,
            description: description,
            language: selectAction
        }
        // store.dispatch({ type: "vendorUserData", data: res.data })

        // updateProfileData(data)
        //     .then((res) => {
        //         alert("update success")
        //         props.handleAlertMessage('edit')
        //     })
    }

    function handleChangePasswordSubmit() {
        setErrors(true)
        if (newPassword == confirmPassword && newPassword !== '' && confirmPassword !== '') {
            // getProfileData()
            //     .then((res) => {
            //         let filteredData = res.data.filter((item) => (item.password == oldPassword))
            //         if (filteredData.length > 0) {
            //             //api call for update
            //         let item=filteredData[0]
            //         let data={
            //             id:item.id,
            //             password:newPassword
            //         }
            // updateProfilePasswordData(data)
            // .then((res) => {
            //     alert("update success")
            //     props.handleAlertMessage('edit')
            //     clearPasswordForm()
            // })
            // .catch((res) => {
            //     alert(res)
            // })
        } else {
            setOldPasswordNotMatched(true)
        }
        //         })
        // } else if (newPassword !== '' && confirmPassword !== '') {
        //     setConfirmPasswordNotMatched(true)

        // }


    }
    function clearPasswordForm() {
        setErrors(false)
        setOldPassword('')
        setNewPassword('')
        setConfirmPassword('')
    }


    // function handleProfileData(data) {
    //     if (firstName.current) {
    //         firstName.current.value = data.firstName;
    //     }
    //     if (lastName.current) {
    //         lastName.current.value = data.lastName;
    //     }
    //     console.log(data.id, data.firstName, data.lastName);
    // }

    const handleLogout = () => {
        removeLocalStorage()
        store.dispatch({ type: "userData", data: null })
        store.dispatch({ type: "vendorData", data: null })
        navigate('/')

    };
    return (
        <>
            <div className="container">
<div className="d-flex justify-content-between mt-5"> 
    <div>
        <button className="btn btn-primary" onClick={()=>{navigate('/')}}>Home</button>
    </div>
    <div>
        <button className="btn btn-warning" onClick={()=>{handleLogout()}}>Logout</button>
    </div>
</div>
                <div className="row mt-5">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 pb-4">
                        <div className="profile_layout ">
                            <div class="card" style={{}}>
                                <div className="image_div ">
                                    {
                                        /https/.test(profileImg) ?
                                            <img src={profileImg} className="img-fluid rounded-circle image" alt="no source found" /> :
                                            <img src={`data:image/jpeg;base64,${profileImg}`} alt='imgnot' className="img-fluid rounded-circle image"></img>

                                    }
                                    {/* <img src={profileImg} class="img-fluid rounded-circle image" alt="no source found" /> */}
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">{firstName + " " + lastName}</h5>
                                    {/* <p class="card-text mb-0">Vendor</p> */}
                                    <button className="admin_button">Vendor</button>
                                </div>
                            </div>
                        </div>
                        <div className="profile_info mt-4">
                            <div className="border_bottom p-4 pb-3">
                                <h5> ABOUT ME </h5>
                            </div>
                            {/* <div className="p-2 ps-4 pe-4">
                            <div className="border_bottom" >
                                <div className="profile_title">
                                    <span className="icon_size pe-2"> <i className="fa-solid fa-graduation-cap"></i></span><span >Education</span>
                                </div>
                                <p className="profile_text">{education}</p>
                            </div>
                            <div className="border_bottom pt-2">
                                <div className="profile_title">
                                    <span className="icon_size pe-2"> <i className="fa-solid fa-location-dot"></i></span><span >Location</span>
                                </div>
                                <p className="profile_text">{presentAddress}</p>
                            </div>
                            <div className="pt-2 pb-2" >
                                <div className="profile_title">
                                    <span className="icon_size pe-2"> <i className="fa fa-align-left"></i></span><span >Description</span>
                                </div>
                                <p className="profile_text">{description}</p>

                            </div>
                        </div> */}
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-9 ">
                        <div className=" p-3  profile_content">
                            <div className="row p-0 m-0  mb-4 profile_content_buttons">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-2  p-0 m-0 ">
                                    <button onClick={() => { setShowProfileSetting(!showProfileSettings) }} className={showProfileSettings ? "profile_setting_button_on pb-2" : "profile_setting_button pb-2"}>Profile Settings</button>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-10 p-0 m-0">
                                    <button onClick={() => { setShowProfileSetting(!showProfileSettings) }} className={!showProfileSettings ? "profile_setting_button_on pb-2" : "profile_setting_button pb-2"}>Change Password</button>
                                </div>
                            </div>
                            {
                                showProfileSettings && <>
                                    <div className=" mb-4 pb-1 row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-2  d-flex justify-content-start justify-content-md-end">
                                            <label className="label_styles ">First Name</label>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-10 ">
                                            <input className="input_styles " type="text" value={firstName} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="mb-4 pb-1 row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-2 d-flex justify-content-start justify-content-md-end">
                                            <label className="label_styles " >Last Name</label>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-10 ">
                                            <input className="input_styles" type="text" value={lastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="mb-4 pb-1 row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-2 d-flex justify-content-start justify-content-md-end">
                                            <label className="label_styles " >Phone Number</label>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-10 ">
                                            <input className="input_styles" type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} />
                                        </div>
                                    </div>
                                    {/* <div className="mb-4 pb-1 row">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-2 d-flex justify-content-start justify-content-md-end">
                                        <label className="label_styles " >Designation</label>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-10 ">
                                        <input className="input_styles" type="text" placeholder="Designation" value={designation} onChange={(e) => { setDesignation(e.target.value) }} />
                                    </div>
                                </div> */}
                                    {/* <div className="mb-4 pb-1 row">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-2 d-flex justify-content-start justify-content-md-end">
                                        <label className="label_styles " >Gender</label>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-10 ">
                                        <div className="w-100" style={{ position: 'relative' }}>
                                            <div className="select_action_gender w-100 p-2 d-flex justify-content-between" onClick={() => { setShowGenderSelectionItems(true) }} >
                                                <span>{selectGender}</span><span><i className="fa-solid fa-caret-down text-end ps-1 pe-1"></i></span>
                                            </div>
                                            {showGenderSelectionItems && (
                                                <ul className="select_action_items_gender w-100 text-start pb-0 mb-0 ">
                                                    <li className="" onClick={() => { handleGenderSelection('Gender') }}>  <span>Gender</span></li>
                                                    <li className="" onClick={() => { handleGenderSelection('Male') }}> <span>Male</span></li>
                                                    <li className="" onClick={() => { handleGenderSelection('Female') }}> <span>Female</span></li>

                                                </ul>
                                            )}
                                        </div>

                                    </div>
                                </div> */}
                                    {/* <div className="mb-4 pb-1 row">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-2 d-flex justify-content-start justify-content-md-end">
                                        <label className="label_styles " >NID</label>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-10 ">
                                        <input className="input_styles" type="text" placeholder="NID" value={nid} onChange={(e) => { setNid(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="mb-4 pb-1 row">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-2 d-flex justify-content-start justify-content-md-end">
                                        <label className="label_styles " >Education</label>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-10 ">
                                        <input className="input_styles" type="text" placeholder="Education" value={education} onChange={(e) => { setEducation(e.target.value) }} />
                                    </div>
                                </div> */}
                                    <div className="mb-4 pb-1 row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-2 d-flex justify-content-start justify-content-md-end">
                                            <label className="label_styles " >Permanent <br></br>Address</label>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-10 ">
                                            <input className="input_styles" type="text" placeholder="Permanent Address" value={permanentAddress} onChange={(e) => { setPermanentAddress(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="mb-4 pb-1 row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-2 d-flex justify-content-start justify-content-md-end">
                                            <label className="label_styles " >Present<br></br> Address</label>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-10 ">
                                            <input className="input_styles" type="text" placeholder="Present Address" value={presentAddress} onChange={(e) => { setPresentAddress(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="mb-4 pb-1 row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-2 d-flex justify-content-start justify-content-md-end">
                                            <label className="label_styles " >Description</label>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-10 ">
                                            <input className="input_styles" type="text" placeholder="Description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="mb-4 pb-1 row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-2 d-flex justify-content-start justify-content-md-end">
                                            <label className="label_styles " >Profile Picture</label>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-10 ">
                                            <input className="input_styles" type="file" />
                                        </div>
                                    </div>
                                    {/* <div className="mb-4 pb-1 row">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-2 d-flex justify-content-start justify-content-md-end">
                                        <label className="label_styles " >Add Language</label>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-10 ">
                                        <div className="w-100" style={{ position: 'relative' }}>
                                            <div className="select_action_gender w-100 p-2 d-flex justify-content-between" onClick={() => { setShowSelectActionItems(true) }} >
                                                <span>{selectAction}</span><span><i className="fa-solid fa-caret-down text-end ps-1 pe-1"></i></span>
                                            </div>
                                            {showSelectActionItems && (
                                                <ul className="select_action_items_gender w-100 text-start pb-0 mb-0 ">
                                                    <li className="" onClick={() => { handleSelectAction('Select Language') }}>  <span>Select Language</span></li>
                                                    <li className="" onClick={() => { handleSelectAction('English') }}> <span>English</span></li>
                                                    <li className="" onClick={() => { handleSelectAction('Hindi') }}> <span>Hindi</span></li>

                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div> */}
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-2">

                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-10">
                                            <button onClick={() => { updateProfile() }} className="update_button">UPDATE</button>

                                        </div>
                                    </div>
                                </>
                            }
                            {
                                !showProfileSettings && <>
                                    <div>
                                        <div className="mb-4 pb-1 row">
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-start justify-content-md-end">
                                                <label className="label_styles pb-2" >Old Password</label>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-9 ">
                                                <input className="input_styles pb-2" type="password" placeholder="Old Password" value={oldPassword} onChange={(e) => { setOldPassword(e.target.value); setOldPasswordNotMatched(false) }} />
                                                {
                                                    errors && oldPassword == "" && <span className="text-danger error_size ">Please Enter Old Password</span>
                                                }
                                                {
                                                    errors && oldPasswordNotMatched && <span className="text-danger error_size ">Old Password Not Matched</span>
                                                }
                                            </div>
                                        </div>
                                        <div className="mb-4 pb-1 row">
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-start justify-content-md-end">
                                                <label className="label_styles pb-2" >New Password</label>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-9 ">
                                                <input className="input_styles pb-2" type="password" placeholder="New Password" value={newPassword} onChange={(e) => { setNewPassword(e.target.value); setConfirmPasswordNotMatched(false) }} />
                                                {
                                                    errors && newPassword == "" && <span className="text-danger error_size ">Please Enter New Password</span>
                                                }
                                            </div>
                                        </div>
                                        <div className="mb-4 pb-1 row">
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-start justify-content-md-end">
                                                <label className="label_styles pb-2" >New Password(Confirm)</label>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-9">
                                                <input className="input_styles pb-2" type="password" placeholder="New Password(Confirm)" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value); setConfirmPasswordNotMatched(false) }} />
                                                {
                                                    errors && confirmPassword == "" && <span className="text-danger error_size ">Please Again Enter New Password</span>
                                                }
                                                {
                                                    errors && confirmPasswordNotMatched && <span className="text-danger error_size ">Confirm Password Not Matched</span>
                                                }
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-3">

                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-9">
                                                <button onClick={() => { handleChangePasswordSubmit() }} className="update_button submit_button">SUBMIT</button>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            }


                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}