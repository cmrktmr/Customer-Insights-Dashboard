import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const axiosInstance = axios.create();

        axiosInstance.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                if (error.response) {
                    console.error("Server Error:", error.response.data);
                } else if (error.request) {
                    console.error("Network Error. No response received");
                } else {
                    console.error("Error setting up the request:", error.message);
                }
                return Promise.reject(error);
            }
        );

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axiosInstance.get(url);
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};
