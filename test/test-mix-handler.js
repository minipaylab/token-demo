/**
 * MetaMask Support
 *  |\_/|,,_____,~~`
 *  (.".)~~     )`~}}
 *   \o/\ /---~\\ ~}}
 *     _//    _// ~}
 * 
 * Copyright (c) 2019 NPL,aventador-lab
 * E-mail :lamborcai@gmail.com
 * git@work:minipaylab/token-demo.git
 *
 */
const MixHandler = require('../src/packages/mix-handler.js');
const TruffleConfig = require('../truffle-config.js');

const C = {
	abiSrc:TruffleConfig.contracts_build_directory ||"build/contracts",
	targetDest:TruffleConfig.contracts_build_directory || "build/abis",
	targetABI:"test-mix-abi.json"
};

var mixHandler = new MixHandler(C);
mixHandler.generatorABI(true);