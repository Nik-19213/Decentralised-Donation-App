const hre = require("hardhat");
import { ethers } from "ethers";

async function main() {

    const donation = await hre.ethers.getContractFactory("donation");
    const contract = await donation.deploy(); //instance of contract
  
    await contract.deployed();
    console.log("Address of contract:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });