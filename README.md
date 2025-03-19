# Decentralized Donation App (DDApp)

The Decentralized Donation App (DDApp) is a blockchain-based application developed to revolutionize the traditional donation process. By leveraging smart contracts written in Solidity and deployed on the Ethereum blockchain, DDApp ensures complete transparency and traceability of donations. Users can securely donate, track their contributions, and access detailed information about all donations made within the platform.

![screenshot](Screenshot (394).png)

## Features

- **Secure Donations:** Users can donate securely, knowing that their contributions are tracked and utilized as intended.
- **Transparency:** The entire donation process is transparent, with detailed information available for every donation.
- **Traceability:** Users can view detailed information about all donations, including the account from which the donation was made, the timestamp of the donation, and the amount donated.

## Installation and Setup

Follow the steps below to set up and run the DDApp locally:

### Prerequisites

- Node.js and npm installed
- Metamask extension installed in your browser

### Backend Setup

1. Install Hardhat:
    ```bash
    npm install --save-dev hardhat
    ```

2. Initialize Hardhat:
    ```bash
    npx hardhat init
    ```

3. Start a local Hardhat node:
    ```bash
    npx hardhat node
    ```

4. Compile the smart contracts:
    ```bash
    npx hardhat compile
    ```

5. Deploy the smart contracts:
    ```bash
    npx hardhat run scripts/deploy.js
    ```

### Frontend Setup

1. Create a React application:
    ```bash
    npm install create-react-app
    npx create-react-app client
    ```

2. Install required dependencies:
    ```bash
    npm install dotenv
    ```

### Final Deployment

Deploy the smart contracts on the Sepolia test network:
```bash
npx hardhat run --network sepolia scripts/finalDeploy.js
```

### Run React Application
```bash
cd client
npm start
```        

## Usage

1.  Open your browser and connect your Metamask wallet to the Sepolia network.
2.  Navigate to the DDApp frontend.
3.  Use the interface to donate and view donation details.

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests for any features, improvements, or bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgements

Special thanks to all the contributors and the Ethereum community for their support and inspiration.
