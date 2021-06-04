import axios from 'axios';

let url = process.env.VUE_APP_HTTP;

export default {

    photoLogin(formData) {
        return axios.post(url + '/loginPhoto', formData);
    },

    login(username, password) {
        return axios.post(url + '/login', {
            username: username,
            password: password
        });
    },

    register(name, username, password, passwordConfirmation) {
        return axios.post(url + '/users', {
            name: name,
            username: username,
            password: password,
            confirmation_password: passwordConfirmation
        });
    },

    getAlbumsByUser(userID) {
        return axios.get(url + '/users/' + userID + '/albums');
    },

    updateProfile(userID, username, name, password, photo) {
        return axios.put(url + '/users/' + userID, {
            username: username,
            name: name,
            password: password,
            photo: photo ? {
              labels : [],
              src: photo
            } : null
        });
    }

}
