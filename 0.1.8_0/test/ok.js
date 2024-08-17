import axios from './popup/axios.js';

import https from 'https';


const proxyConfig = {
    host: 'brd.superproxy.io',
    port: '22225',
    auth: {
        username: 'brd-customer-hl_c9b33fac-zone-web_unlocker1-country-fr',
        password: 'nyo2swwh65ym'
    }
};


const requestConfig = {
    url: 'https://geo.brdtest.com/mygeo.json',
    method: 'get',
    proxy: proxyConfig,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
};


axios(requestConfig)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });