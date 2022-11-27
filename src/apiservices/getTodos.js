import axios from 'axios';
import { SERVER_URL } from '../env';

export const getTodos = async (conditionQuery) =>{

    try {
        const res = await axios.get(`${SERVER_URL}/getTodos?${conditionQuery}`)
        return res.data
        
    } catch (error) {
        console.error("error"+error)
    }
}