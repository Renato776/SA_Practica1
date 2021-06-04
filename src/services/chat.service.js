import axios from 'axios';

//let url = process.env.VUE_APP_HTTP;
const chats = {
  cliente: 'https://lf947c8m34.execute-api.us-east-1.amazonaws.com/prod/lambdachat',
  admin: 'https://yzohcv0xpg.execute-api.us-east-1.amazonaws.com/prod',
  home: 'https://x94k47l6dc.execute-api.us-east-1.amazonaws.com/dos/home'
};
export default {

    chat(message, type) {
        return axios.post( chats[type], { message: message });
    }
}
