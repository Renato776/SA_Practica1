import axios from 'axios';

let url = process.env.VUE_APP_HTTP;

export default {

    createAlbum(name, userID) {
        return axios.post(url + '/albums', {
            name: name,
            user_id: userID
        });
    },

    deleteAlbum(albumID) {
        return axios.delete(url + '/albums/' + albumID);
    }

}