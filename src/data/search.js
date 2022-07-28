import axios from "axios";

export const baseUrl = 'https://spotify23.p.rapidapi.com/search/';

const X_RapidAPI_Key =`${process.env.REACT_APP_X_RapidAPI_Key}`;
const X_RapidAPI_Host =`${process.env.REACT_APP_X_RapidAPI_Host}`;

export const search = async () => {
    const {data} = await axios.get(baseUrl, 
        {
            params: {
                q: '<REQUIRED>',
                type: 'multi',
                offset: '0',
                limit: '10',
                numberOfTopResults: '5'
                },

            headers: {
                'X-RapidAPI-Key': X_RapidAPI_Key,
                'X-RapidAPI-Host': X_RapidAPI_Host
            }
        },
    );
    return data;
}