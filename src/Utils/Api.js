import axios from 'axios';

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params ={
    key: 'AIzaSyDAENWRcElLqHyjLVYy7mkPZKxfqXufvPg',
    cx: 'e10a1e15a36ff4450'
}

export const fetchDataFromApi = async (payload)=>{
    const {data} = await axios.get(BASE_URL,{
        params: {...params, ...payload}
    })
    return data;
} 