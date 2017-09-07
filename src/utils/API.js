import axios from 'axios';
const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
export default {
    getSearchResults: function (query, startYear, endYear){
        const queryURLBase =`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authKey}&q=${query}&begin_date=${startYear}0101$end_date=${endYear}`
        return axios.get(queryURLBase);
    }
};