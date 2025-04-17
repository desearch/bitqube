const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

async function deploy() {
    // Connect to local blockchain
    const web3 = new Web3('http://localhost:8545');

    // Get the contract bytecode and ABI
    const contractPath = path.join(__dirname, 'build/contracts/Storage.json');
    const contractJson = JSON.parse(fs.readFileSync(contractPath));
    const abi = contractJson.abi;
    const bytecode = contractJson.bytecode;

    // Get accounts
    const accounts = await web3.eth.getAccounts();
    console.log('Deploying from account:', accounts[0]);

    // Create contract instance
    const contract = new web3.eth.Contract(abi);

    // Deploy contract
    const deploy = contract.deploy({
        data: bytecode
    });

    // Send transaction
    const gas = await deploy.estimateGas();
    const instance = await deploy.send({
        from: accounts[0],
        gas: gas
    });

    console.log('Contract deployed at:', instance.options.address);
    return instance;
}

deploy().catch(console.error); 