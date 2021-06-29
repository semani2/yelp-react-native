import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer -RAPeEeS0FHJhwKyAkuDdLmtE48uq70PfV9-IRuCCDQtwYlJq22jpW5so35iMScMq_wWdlJxclWVJfN-IFVSPgUTe41g0f7vrSCdq5drh4_fr--PUZaUnMAEdKvYYHYx'
    }
});

