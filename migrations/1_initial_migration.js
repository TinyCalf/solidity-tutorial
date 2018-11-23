var Migrations = artifacts.require("./Migrations.sol");
var ERC20 = artifacts.require("./ERC20.sol")

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(ERC20, 100000, "MyCoin", "MY");
};
