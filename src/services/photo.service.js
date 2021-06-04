import axios from 'axios';

let url = process.env.VUE_APP_HTTP;

export default {

    getPhoto(photoID) {
        return axios.get( url + '/photos/' + photoID );
    },

    uploadPhoto(image){
        return axios.post( url + '/upload_image', image );
    },

    extractText(image){
        return axios.put( url + '/photos/extract-text', image );
    },

    linkPhoto(data){
        return axios.post( url + '/photos', data );
    },

    translate(id, lang) {
        return axios.put(url + '/photos/' + id + '/translate', {
          language : lang
        });
    }

}
