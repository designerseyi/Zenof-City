const ZenofToken = artifacts.require("ZenofToken");

module.exports = function(deployer) {
  deployer.deploy(ZenofToken);
};