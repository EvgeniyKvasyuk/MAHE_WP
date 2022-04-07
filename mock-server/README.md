# Mock server

This is mock server for interception of particular requests from WebApp and response with data prepared in advance.

##How to turn on?
1. Add `.env` file to root of the project with environment variable `MOCK_SERVER=true`
2. Add your request config to `feature` folder. Config have to be fit next requirements:
- It has to be in `*.json` format
  - It has to consist of array of object with next properties: 
    - method: request method (get, post, put etc)
    - url: target url of request
    - data: data for response
3. Restart the project with `npm run start`
