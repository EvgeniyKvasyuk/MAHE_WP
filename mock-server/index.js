const fs = require('fs');
const path = require('path');

const chalk = require('react-dev-utils/chalk');

const featuresPath = path.resolve(__dirname, './features');
const featuresFiles = fs.readdirSync(featuresPath);
const mergeEndpoints = () => featuresFiles.reduce((mergedEndpoints, filePath)=> {
  const endpointConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, featuresPath, filePath)).toString()) || [];

  return mergedEndpoints.concat(endpointConfig);
}, []);

const log = (url, method) => console.log(`${chalk.green('REQUEST:')} ${chalk.blue(`url - ${url}`)}, ${chalk.magenta(`method - ${method}`)}`);

module.exports = (app) => {
  try {
    const mergedEndpoints = mergeEndpoints();
    mergedEndpoints.forEach(({ method, url, data } )=> {
      app[method.toLowerCase()](url, (_,res ) =>{
        log(url, method);
        res.json(data);
      });
    });
  } catch(e) {
    console.log(chalk.red('ERROR: Mock server couldn`t be started: ', e));
  }

};
