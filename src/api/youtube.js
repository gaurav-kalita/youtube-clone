import axios from 'axios';

//pre configured instance of axios

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',        //after v3 we will append the search by youtube.get('/search')
                                                                
});