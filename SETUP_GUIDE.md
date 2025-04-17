# Development Environment Setup Guide

## Prerequisites

1. **Node.js and NPM**
   - Install Node.js version 18.19.1 using NVM (Node Version Manager)
   ```bash
   # Install NVM for Windows
   winget install CoreyButler.NVMforWindows
   
   # Restart your computer after NVM installation
   
   # Install Node.js 18.19.1
   nvm install 18.19.1
   nvm use 18.19.1
   ```

2. **Go Language**
   - Install Go version 1.24.2 or later
   ```bash
   # Install Go for Windows
   winget install GoLang.Go
   
   # Restart your computer after Go installation
   ```

3. **Git**
   - Install Git for version control
   ```bash
   winget install Git.Git
   ```

## Project Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd bitqube
   ```

2. **Install Dependencies**
   ```bash
   # Install Node.js dependencies
   npm install
   
   # Install Go dependencies
   go mod download
   ```

## Development Blockchain Setup

1. **Start Local Development Blockchain**
   ```bash
   # Start Ganache with custom configuration
   npx ganache --chain.chainId 1337 --chain.networkId 1337 --chain.genesis devchain/genesis.json
   ```
   The blockchain will run on:
   - Host: 127.0.0.1
   - Port: 8545

2. **Verify Blockchain Status**
   - The blockchain should be accessible at http://127.0.0.1:8545
   - You can use tools like MetaMask to connect to the local network

## Smart Contract Development

1. **Compile Contracts**
   ```bash
   # Using Truffle
   npx truffle compile
   ```

2. **Deploy Contracts**
   ```bash
   # Deploy to local network
   npx truffle migrate --network development
   ```

3. **Run Tests**
   ```bash
   # Run Truffle tests
   npx truffle test
   ```

## Development Tools

1. **IDE Setup**
   - Recommended: Visual Studio Code
   - Install extensions:
     - Solidity
     - Go
     - JavaScript and TypeScript
     - GitLens

2. **Browser Extensions**
   - MetaMask (for interacting with the blockchain)
   - Set up MetaMask to connect to local network:
     - Network Name: Localhost 8545
     - RPC URL: http://127.0.0.1:8545
     - Chain ID: 1337
     - Currency Symbol: ETH

## Environment Variables

Create a `.env` file in the project root with the following variables:
```
PRIVATE_KEY=your_private_key_here
INFURA_API_KEY=your_infura_api_key_here
```

## Common Issues and Solutions

1. **NVM not recognized**
   - Solution: Restart your computer after NVM installation

2. **Go not recognized**
   - Solution: Restart your computer after Go installation

3. **Port 8545 already in use**
   - Solution: Find and kill the process using port 8545
   ```bash
   netstat -ano | findstr :8545
   taskkill /PID <PID> /F
   ```

4. **Contract deployment failures**
   - Solution: Ensure Ganache is running and accessible
   - Check MetaMask connection to local network
   - Verify sufficient gas in your account

## Additional Resources

1. **Documentation**
   - [Truffle Documentation](https://trufflesuite.com/docs/truffle/)
   - [Ganache Documentation](https://trufflesuite.com/docs/ganache/)
   - [Go Ethereum Documentation](https://geth.ethereum.org/docs/)

2. **Development Tools**
   - [MetaMask](https://metamask.io/)
   - [Remix IDE](https://remix.ethereum.org/)
   - [Etherscan](https://etherscan.io/)

## Support

For additional support:
- Check the project's README.md
- Review the documentation in the `docs/` directory
- Contact the development team 