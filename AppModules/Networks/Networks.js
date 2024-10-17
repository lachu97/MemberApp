import axios from 'axios';

const BASE_URL = 'https://randomuser.me/api/';
export const axiosGet = async (number = 10) => {
    try {
        const result = await axios.get(`${BASE_URL}?results=${number}`);
        console.log(result.data)
        return result.data;
    } catch (e) {
        console.error(e.message)
    }
};
