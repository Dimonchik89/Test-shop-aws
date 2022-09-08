import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { TSignArgs, TUserData, IPostData } from "../types/types";

const baseURL = "http://localhost:5000";

type TRequest = ({...arg}: TSignArgs) => any;

const instance = axios.create({
    baseURL
})

const authHost = axios.create({
    baseURL,
})

const useHttp = () => {

    // const getData = async (url: string) => {
    //     try {
    //         const response = await axios.get(url)
    //         return await response.data;
    //     } catch(e) {
    //         console.log("Error");
    //     }
    // }
    
    const signInUser: TRequest = async ({url, email, password}) => {
        try {
            const response = await axios.post<TUserData, AxiosResponse<{token: string}>>(`${baseURL}${url}`, {email, password})
            return response.data;
        } catch(e: any) {
            throw new Error(e)
            
        }
    }

    const authInterceptor = (config: AxiosRequestConfig) => {
        if(config.headers) {
            config.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
        }
        return config;
    }

    authHost.interceptors.request.use(authInterceptor)

    const checkUser = async (url: string) => {
        try {
            const response = await authHost.get(url)
            return await response.data;
        } catch(e: any) {
            throw new Error(e)
        }
    }

    const postData = async ({url, ...tailProps}: IPostData) => {
        try {
            const response = await authHost.post(url, {...tailProps})
            return await response;
        } catch(e: any) {
            throw new Error(e)
        }
    }

    const getData = async (url: string) => {
        try {
            const data = await instance.get(url)
            return data.data
        } catch(e: any) {
            throw new Error(e)
        }
    }

    const deleteData = async ({url, id}: {url: string, id: number}) => {
        try {
            const response = await authHost.delete(`${url}/${id}`)
            return response.data
        } catch(e: any) {
            throw new Error(e)
        }
    }


    return {
        signInUser,
        checkUser,
        postData,
        getData,
        deleteData
    }
}

export default useHttp;