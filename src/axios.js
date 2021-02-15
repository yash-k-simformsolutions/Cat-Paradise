import axios from 'axios';

// const data = async () => {
    //     return catcountry;
    // }
const url = 'https://api.thecatapi.com/v1/breeds'
const response = axios.get(url);
const catcountry = response.data;

console.log(response.data)

// export default data;