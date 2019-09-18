const IEnv = require('dotenv').config({path:".config/.env",encoding:"utf8"}); 
const MixHandler = require('./packages/mix-handler.js');
const TruffleConfig = require('../truffle-config.js');
const tokenDemoVersion = require("../package.json").version;

var sh = require('shelljs');

const C = {
	abiSrc:TruffleConfig.contracts_build_directory ||"build/contracts",
	targetDest:"data/abis",
	targetABI:"demo-abis.json"
};

let mode = process.env.DEPLOYED_ARGS || "compile";

//Need ssh git
if(!sh.which('ssh') || !sh.which('npm') || !sh.which('git')){
  sh.echo('Sorry,this script requires SSH and npm.');
  sh.exit(1);
}

// clean abi
let log = sh.exec('npm run clean-abis',{silent:false}).stdout;
console.log("npm run clean-abis:",log);

//compile abi
log = sh.exec('truffle '+mode,{silent:true}).stdout;
console.log("Compile ABI:",log);

var mixHandler = new MixHandler(C);
mixHandler.generatorABI(true);