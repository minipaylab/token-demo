var IERC20 = artifacts.require('IERC20');
var safmath = artifacts.require('safemath');
var CountachDemo = artifacts.require('CountachDemo');

/* Config Global*/
const C = {
	enable:true,
	deployOpts:{
		overwrite:false
	}
}

module.exports = async function(deployer,network,accounts){

	let dOpts = {
		overwrite:false,
		gas:4612388
	};
	dOpts = Object.assign({},dOpts,C.deployOpts);

	if(C.enable){
		await deployer.deploy(safmath,dOpts);
		//await deployer.deploy(IERC20);

		//deploy ERC20
		await deployer.link(safmath,CountachDemo);
		await deployer.deploy(CountachDemo,dOpts);		
	}


	//await deployer.deploy(MicroPaySystem,TCoinToken.address);	

	console.log("Contracts Deployed on :"+network);
	console.log("Acounts :"+accounts);
}