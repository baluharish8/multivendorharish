import axios from "axios";
import axiosPrivate from "./refreshwithouthook";


export function getDataWh(url){
    // return axios.get(url)
    return axiosPrivate().get(url)

}

export function saveDataWh(url,data){
    return axiosPrivate().post(url,data)
}

export function updateDataWh(url,data){
    return axiosPrivate().put(url,data)
}

export function deleteItemWh(url){
    return axiosPrivate().delete(url)
}