const Storage = artifacts.require("Storage");

module.exports = async function(deployer, network, accounts) {
  await deployer.deploy(Storage, { from: '0x3A63210765d9EBD0703846Cbf1D92BA246B19198' });
}; 