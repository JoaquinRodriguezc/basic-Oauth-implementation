import * as http from 'http';
import {get} from './getController.js';
import 'dotenv/config'

const hostname = process.env.HOSTNAME;

const port = process.env.PORT;

const server = http.createServer( async(req, res) => {

    req.query = new URL(req.url,`http://${req.headers.host}`);

      switch(req.method){ 

        case "GET":

         get(req,res);
      }   
});

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});

