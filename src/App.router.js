import { Route, Routes } from "react-router-dom";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { LoginComponent } from "./components/login/login.component";

import { useEffect, useState } from "react";
import { SearchCardComponent } from "./components/searchcard/searchcard.component";
import { SaloonSpaComponent } from "./components/saloonspa/saloonspa.component";
import { BackendSendDataComponent } from "./components/zbackendsend/backendsend";
import { SingleCategoryComponent } from "./components/singlecategory/singlecategory.component";
import { AdminHeaderComponent } from "./components/adminpanel/adminpanelheader/adminheader";
import { AdminSidebarComponent } from "./components/adminpanel/adminsidebar/adminsidebar.component";
import { AdminLayoutComponent } from "./components/adminpanel/adminlayout/adminlayout";
import { AuthRouteVendor } from "./services/auth-route-vendor";
import { AuthRouteAdmin } from "./services/auth-route-admin";
import { AuthRoute } from "./services/auth-route";
import { VendorLoginComponent } from "./components/vendorlogin/vendorlogin.component";
import { VendorRegistrationComponent } from "./components/vendorregistration/vendorregistration.component";
import { VendorHeaderComponent } from "./components/vendorpanel/vendorheader/vendorheader.component";
import { VendorSidebarComponent } from "./components/vendorpanel/vendorsidebar/vendorsidebar.component";
import { VendorLayoutComponent } from "./components/vendorpanel/vendorlayout/vendorlayout.component";
import { VendorProfileComponent } from "./components/vendorpanel/vendorprofile/vendorprofile.component";
import { UserProfileComponent } from "./components/userpanel/userprofile/userprofile.component";


export function AppRouter() {
    const [searchCardData, setSearchCardData] = useState('')
    const [sliceIndex, setSliceIndex] = useState('')


    function handleSearchCardData(data) {
        setSearchCardData(data)
    }
    function handleSliceIndex(startIndex, endIndex) {
setSliceIndex([startIndex, endIndex])
    }
    // useEffect(()=>{
    //     console.log(searchCardData)
    // },[searchCardData])
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<HeaderComponent/>} /> */}
                <Route path="/" element={<NavigateHeaderHome handleSearchCardData={handleSearchCardData} handleSliceIndex={handleSliceIndex}></NavigateHeaderHome>} />
                <Route path="/registration" element={<RegistrationComponent></RegistrationComponent>}></Route>
                <Route path="/vendorregistration" element={<VendorRegistrationComponent/>}></Route>
                
                <Route path="/login" element={<LoginComponent></LoginComponent>}></Route>
                <Route path="/vendorlogin" element={<VendorLoginComponent/>}></Route>
                <Route path="/userprofile" element={<UserProfileComponent/>}></Route>

                <Route path="/vendordashboard" element={<AuthRouteVendor><NavigateVendorSidebarDashboard /> </AuthRouteVendor>} />
                {/* <Route path="/vendorprofile" element={<AuthRouteVendor><VendorProfileComponent /> </AuthRouteVendor>} /> */}
                <Route path="/searchcard" element={<SearchCardComponent searchCardData={searchCardData} />}></Route>
                <Route path="/singlecategory" element={<SingleCategoryComponent sliceIndex={sliceIndex} handleSearchCardData={handleSearchCardData} />} />
                <Route path="/admindashboard" element={<AuthRouteAdmin> <NavigateAdminSidebarDashboard /></AuthRouteAdmin>} />
              

                <Route path="/saloonspa" element={<SaloonSpaComponent searchCardData={searchCardData} />}></Route>
                <Route path="/serviceupload" element={<BackendSendDataComponent></BackendSendDataComponent>}></Route>
                <Route path="/authroutevendor" element={<AuthRouteVendor/>}></Route>

            </Routes>
        </>
    )
}

function NavigateHeaderHome(props) {
    // console.log(props.HeaderComponent)
    return (
        <>
            <div>
         
                <HeaderComponent handleSearchCardData={props.handleSearchCardData} />
            </div>
            <div>
                <HomeComponent handleSearchCardData={props.handleSearchCardData} handleSliceIndex={props.handleSliceIndex}></HomeComponent>
            </div>
            <div>
                <FooterComponent></FooterComponent>
            </div>
        </>
    )

}

function NavigateVendorSidebarDashboard() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    }
    return (
        <>
        <div>
            <VendorHeaderComponent onMenuItemClick={handleMenuItemClick} sidebar={sidebar} showSidebar={showSidebar}/>
        </div>
            <div>
                <VendorSidebarComponent  onMenuItemClick={handleMenuItemClick} sidebar={sidebar} showSidebar={showSidebar}/>
            </div>
            <div>
                <VendorLayoutComponent selectedMenuItem={selectedMenuItem} onMenuItemClick={handleMenuItemClick} />
            </div>
        </>
    )

}

function NavigateAdminSidebarDashboard() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    }
    return (
        <>
        <div>
            <AdminHeaderComponent sidebar={sidebar} showSidebar={showSidebar}/>
        </div>
            <div>
                <AdminSidebarComponent  onMenuItemClick={handleMenuItemClick} sidebar={sidebar} showSidebar={showSidebar}/>
            </div>
            <div>
                <AdminLayoutComponent selectedMenuItem={selectedMenuItem} />
            </div>
        </>
    )

}