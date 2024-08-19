import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IMethod } from "../interfaces/IMethod";
import { mockServer } from "../utils/mockServer";

const BASE_URL = "https://www.japhetism.com/api/v1";

export const api = async <T> (
    endpoint: string,
    method: IMethod,
    payload?: any
): Promise<AxiosResponse<T>> => {
    
    const url = `${BASE_URL}/${endpoint}`;

    const config: AxiosRequestConfig = {
        method: method,
        url: url,
        data: payload
    };

    try {
        //const response = await axios(config);
        const response = mockServer(endpoint);
        return response;
    } catch (error) {
        console.log("API ERROR ", error);
        throw error;
    }
}