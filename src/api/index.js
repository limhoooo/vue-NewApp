import axios from 'axios';
import bus from '../utils/bus.js'

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

const fetchNewsList = () => {axios.get(`${config.baseUrl}news/1.json`); };
const fetchJobsList = () => axios.get(`${config.baseUrl}jobs/1.json`);
const fetchAskList = () =>  axios.get(`${config.baseUrl}ask/1.json`);
const fetchUserInfo = (username) =>  axios.get(`${config.baseUrl}user/${username}.json`);
const fetchAskInfo = (userid) =>  axios.get(`${config.baseUrl}item/${userid}.json`);

const fetchList = (pageName) => {
    bus.$emit('start:spinner'); 
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
};

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchAskInfo,
    fetchList,
}

