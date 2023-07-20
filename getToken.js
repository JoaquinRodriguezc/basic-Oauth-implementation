import config from "./config.json" assert {type:'json'};
import * as fs from 'fs';
import dotenv from 'dotenv'
dotenv.config({path:"./../.env"});
const base_url = process.env.BASE_URL;
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
export const getToken = async(body) =>{
      
    const result = await fetch(`${base_url}access_token`, {

        method: 'POST',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa( `${client_id}` +":"+ `${client_secret}`),
            "Accept": "application/json"
        },
        body: body
    });
     const data = await result.json();
     const access_token = data.access_token;
     config.token = access_token;
     fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
     return access_token;
}