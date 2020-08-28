import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID paonAu4H4KeeY_qKsyTn4Js_M9C8w-kqBZXfyraLrdk' 
    }
});