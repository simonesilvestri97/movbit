var MovBitToken = artifacts.require("MovBitToken");
var MovBitFreeToken = artifacts.require("MovBitFreeToken");
var MovBitCrowdsale = artifacts.require("MovBitCrowdsale");

// Input variables
const name="Pulp Fiction";
const symbol="PLP";
const decimals=18;
const closingTime=1608048360;
const ethRate=1;
const cap=100000000000000000000n;
const goal=10000000000000000000n;
const wallet="0x05107eDa40861a3411570eaBb2D67ed6340123b1";

// Migration
module.exports = function(deployer,network,accounts) {
    return deployer.deploy(MovBitFreeToken, name, symbol, decimals).then(function(instance){
        FreeTokenInstance = instance;
        const openingTime = Date.now()/1000|0+15;
        return deployer.deploy(MovBitCrowdsale, 
                               openingTime, closingTime,
                               ethRate, wallet, cap, 
                               FreeTokenInstance.addToken(), goal);

    });
};




