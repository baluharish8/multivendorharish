import axios from "axios";
import { getLocalStorageItem, removeLocalStorageItem } from "./storages/local.storage";

const axiosPrivate = () => {
    let token = getLocalStorageItem("vendortoken");

    const refresh = async () => {
        try {
            const response = await axios.get('http://localhost:4006/refresh', { withCredentials: true });
            console.log('from refresh' + response.data.accessToken);
            return response.data.accessToken;
        } catch (error) {
            if (error.response && error.response.status === 403) {
                console.error(error?.response?.data + ' from BE');
                removeLocalStorageItem("vendortoken");
                // Handle navigation logic here
            } else {
                console.error('An error occurred:', error.message);
            }
            throw error; // Re-throw error to propagate it further if needed
        }
    };

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:4006',
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    });

    axiosInstance.interceptors.request.use(
        config => {
            if (!config.headers['Authorization']) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        error => Promise.reject(error)
    );

    axiosInstance.interceptors.response.use(
        response => response,
        async (error) => {
            const prevRequest = error?.config;
            if (error?.response?.status === 403 && !prevRequest?.sent) {
                prevRequest.sent = true;
                const newAccessToken = await refresh();
                prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return axiosInstance(prevRequest);
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export default axiosPrivate;
