const MixHandler = require('../src/packages/mix-handler.js');
const TruffleConfig = require('../truffle-config.js');

const C = {
	abiSrc:TruffleConfig.contracts_build_directory ||"build/contracts",
	targetDest:TruffleConfig.contracts_build_directory || "build/abis",
	targetABI:"test-mix-abi.json"
};

var mixHandler = new MixHandler(C);
mixHandler.generatorABI(true);