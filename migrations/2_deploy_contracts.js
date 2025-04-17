const Storage = artifacts.require("Storage");
const TestContract = artifacts.require("TestContract");

module.exports = function(deployer) {
  deployer.deploy(Storage);
  deployer.deploy(TestContract, "Hello, Blockchain!", 42);
}; 