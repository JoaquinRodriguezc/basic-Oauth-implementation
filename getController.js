import * as querystring from 'querystring';
import 'dotenv/config'
import { getToken } from './getToken.js';

const base_url = process.env.BASE_URL;
const client_id = process.env.CLIENT_ID;
const redirect_uri = process.env.REDIRECT_URI;
const scope = process.env.SCOPE;

export const get = async (req,res) =>{

    const url = req.url.split("?")[0];

    switch(url){

        case "/callback":

            const code = req.query.searchParams.get('code');

            const body_Token = querystring.stringify({

                grant_type:"authorization_code",
                code : code,
                redirect_uri,
            });
         
            const access_token = await getToken(body_Token);      

            res.write(access_token);

            res.end();  
 
        break;
        case "/login":

            res.writeHead(301, { Location: `${base_url}authorize?client_id=${client_id}&scope=${scope}`});

            res.end();

        break;
        default: 
            res.statusCode = 400;
            res.write("Cannot get page");
            res.end();
    }
}