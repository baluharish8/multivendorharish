import { Route, Routes } from "react-router-dom";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";


export function AppRouter(){

    return(
        <>
        <Routes>
            {/* <Route path="/" element={<HeaderComponent/>} /> */}
            <Route path="/" element={<NavigateHeaderHome></NavigateHeaderHome>} />
        </Routes>
        </>
    )
}

function NavigateHeaderHome(){
    return(
        <>
          <div>
        <HeaderComponent/>
    </div>
    <div>
<HomeComponent></HomeComponent>
    </div>
    <div>
        <FooterComponent></FooterComponent>
    </div>
        </>
    )
  
}