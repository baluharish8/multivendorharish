import { getData, saveData } from "./context.service";

// let registration="http://localhost:3000/test24/"
let registrationURL="http://localhost:4006/registration/";
let userURL="http://localhost:4006/users";
let userTokenURL="http://localhost:4006/login";
let imgupload="http://localhost:4006/upload";
export function saveUserData(data){
    return saveData(registrationURL,data)
}
export function saveUserTokenData(data){
    return saveData(userTokenURL,data)
}
export function getUserData(){
    return getData(userURL)
}

export function saveImageData(data){
    return saveData(imgupload,data)
}
