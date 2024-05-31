Decentralized Donation Application (DDApp)
Overview

The Decentralized Donation Application (DDApp) is designed to modernize the traditional donation process by leveraging blockchain technology. This project ensures transparency and traceability of donations, allowing users to donate securely and track their contributions. The application provides detailed information about all donations, including the donor's account, the timestamp of the donation, and the amount donated.
Features

    Traceability: Each donation can be tracked from the donor to the recipient.
    Transparency: All donation details are publicly accessible, enhancing trust.
    Security: Donations are handled via secure smart contracts on the Ethereum blockchain.

Technologies Used

    Solidity: For writing the smart contract.
    Ethereum Blockchain: For decentralized and secure transactions.
    Hardhat: For development, testing, and deployment of the smart contract.
    React: For building the client-side application.

Installation and Setup
Prerequisites

    Node.js
    npm (Node Package Manager)

Backend Setup

    Install Hardhat:

    bash

npm install --save-dev hardhat

Initialize Hardhat Project:

bash

npx hardhat init

Start a Local Blockchain:

bash

npx hardhat node

Compile Smart Contract:

bash

npx hardhat compile

Deploy Smart Contract to Local Blockchain:

bash

npx hardhat run scripts/deploy.js

Deploy Smart Contract to Sepolia Testnet:

bash

    npx hardhat run --network sepolia scripts/finalDeploy.js

Frontend Setup

    Create React App:

    bash

npm install create-react-app
npx create-react-app client

Navigate to Client Directory:

bash

cd client

Install dotenv:

bash

    npm install dotenv

U

npx hardhat node

Deploy the Smart Contract Locally:

bash

npx hardhat run scripts/deploy

.js

Start the React Development Server:

bash

    npm start

Example Solidity Smart Contract

solidity
