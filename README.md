# basic-Oauth-implementation
This project is a Node.js server-side application that implements an authentication flow using OAuth 2.0. 
It allows users to log in, obtain an access token, and use that token to access protected resources from an external API.  
With this project, users can initiate the authentication process by visiting the /login endpoint. 
They will be redirected to the authentication page, where they can grant permissions and receive an authorization code.  
This code is then used to request an access token from the external API's token endpoint. The access token is stored in a config.json file for future use.

### Endpoints

GET /login: Redirects the user to the authentication page.  
GET /callback: Receives the authentication code, exchanges it for an access token, and returns the access token.
