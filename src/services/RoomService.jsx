import { httpClient } from "../config/AxiosHelper"

export const createRoomService = async (roomDetail) =>{
    const res = await httpClient.post(`/api/v1/rooms`, roomDetail,{
        headers:{
            "Content-Type": "text/plain",
        }
    });
    return res.data;
}