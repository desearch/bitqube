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

## Smart Contract Testing and Interaction

### 1. Starting the Development Blockchain
```bash
# Start Ganache with custom configuration
npx ganache --chain.chainId 1337 --chain.networkId 1337
```
The blockchain will run on:
- Host: 127.0.0.1
- Port: 8545

### 2. Deploying Contracts
```bash
# Compile contracts
npx truffle compile

# Deploy to local network
npx truffle migrate --network development
```

### 3. Setting Up MetaMask for Testing
1. **Add Local Network**
   - Open MetaMask
   - Click network dropdown → "Add Network"
   - Fill in:
     ```
     Network Name: Localhost 8545
     RPC URL: http://127.0.0.1:8545
     Chain ID: 1337
     Currency Symbol: ETH
     ```

2. **Import Test Account**
   - In MetaMask, click account icon → "Import Account"
   - Choose "Private Key"
   - Use the private key from Ganache output
   - You should see 1000 test ETH in your account

### 4. Running the Test Interface
1. **Start the Web Server**
   ```bash
   # Using Python
   python -m http.server 8080
   
   # Or using Node.js
   npx http-server -p 8080
   ```

2. **Access the Interface**
   - Open browser and go to: `http://localhost:8080`
   - Connect MetaMask when prompted
   - The interface will show:
     - Contract address
     - Buttons to get/set message and number
     - Transaction status and results

### 5. Testing the Contract
1. **View Current Values**
   - Click "Get Message" to see current message
   - Click "Get Number" to see current number

2. **Update Values**
   - Enter new message in the text field and click "Set Message"
   - Enter new number in the number field and click "Set Number"
   - MetaMask will pop up to confirm transactions
   - Wait for transaction confirmation
   - Verify changes by clicking "Get Message" or "Get Number"

### 6. Troubleshooting
1. **MetaMask Connection Issues**
   - Ensure MetaMask is connected to "Localhost 8545" network
   - Check if Ganache is running
   - Try refreshing the page and reconnecting MetaMask

2. **Transaction Failures**
   - Check if you have enough test ETH
   - Verify contract address is correct
   - Ensure MetaMask is using the correct network

3. **Reading Values Fails**
   - Verify contract ABI is correct
   - Check if contract is properly deployed
   - Ensure you're using the correct function names

### 7. Contract Addresses
- TestContract: `0xF28A22f1fc2a92218CEA4379bD025c784F355525`
- Storage: `0x31d4bA89e0341E34A091Bc085dD7dC0cf6cB85D1`

### 8. Additional Testing Tools
1. **Truffle Console**
   ```bash
   npx truffle console --network development
   ```
   - Interact with contracts directly
   - Test functions without web interface

2. **Ganache Interface**
   - View transaction history
   - Monitor contract events
   - Check account balances

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