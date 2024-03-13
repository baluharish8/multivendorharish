

import axios from "axios";
import { useEffect } from "react";
import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from "./storages/local.storage";
import { useNavigate } from "react-router-dom";

const useAxiosPrivate = () => {
  let navigate= useNavigate()
  let token = getLocalStorageItem("token")// it should be in the top
let expiredToken;
    const axiosPrivate = axios.create({
        baseURL: 'http://localhost:4006',
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    });

    const refresh =  async() => {
        // await axios.get('http://localhost:4006/refresh', {withCredentials: true })
        //  .then((response)=>{

        //     console.log('from refresh : '+response.data.accessToken)
        //         return response.data.accessToken;
        //  })
        //  .catch((error)=>{
        //     if(error?.response?.status === 403){
        //         expiredToken=error.response
        //     console.error(error.response.data +'' + "from BE"); 
        //     removeLocalStorageItem("vendortoken")
        //     navigate('/login')
        //       } else {
        //         console.error('An error occurred:', error.message);
        //       }
        //  })
        try {
            const response = await axios.get('http://localhost:4006/refresh', { withCredentials: true });
            console.log('from refresh : ' + response.data.accessToken);
            return response.data.accessToken;
          } catch (error) {
            if (error?.response?.status === 403) {
              expiredToken = error.response;
              console.error(error.response.data + ' from BE');
              removeLocalStorageItem("userData");
              removeLocalStorageItem("vendorData");
              removeLocalStorageItem("token");
              navigate('/login');
            } else {
              console.error('An error occurred:', error.message);
            }
          }
          
          }
   
    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    console.log('new access token : '+newAccessToken)
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [refresh ])

    return axiosPrivate;

};

export default useAxiosPrivate;
