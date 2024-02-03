import abi from "./contract/donation.json";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

import Header from "./components/Header";
import Contributions from "./components/Contributions";
import Landing from "./components/Landing";


function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [loading, setLoading] = useState(false);
  const [memos, setMemos] = useState([]);

  const [account, setAccount] = useState(null)
  const [isConnected, setIsConnected] = useState(false);
  const [totalDonation, setTotalDonation] = useState(0);
  const contractAddress = "0x1bB090d737A412d6703d702E1891808058a3e930";

  const connectWallet = async () => {
    const contractABI = abi.abi;
    try {
      const { ethereum } = window;

      if (ethereum) {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        setState({ provider, signer, contract });
        setAccount(accounts[0]);
        setIsConnected(true); 
      } else {
        alert("Please install MetaMask");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const preConnectFetcher = async () => {
    setLoading(true);

    const provider = new ethers.providers.JsonRpcProvider(
      process.env.REACT_APP_SEPOLIA_URL
    );
    const icoContract = new ethers.Contract(contractAddress, abi.abi, provider);

    const totalDonationCollected =
      await icoContract.getTotalDonationCollected();
    setTotalDonation(ethers.utils.formatEther(totalDonationCollected));

    const memos = await icoContract.getMemos();
    setMemos(memos);

    setLoading(false);
  };

  const updateMemos = async () => {
    if (!state.contract) {
      return;
    }
    const memos = await state.contract.getMemos();
    setMemos(memos);
  };

  const updateTotalDonation = async () => {
    if (!state.contract) {
      return;
    }
    const totalDonationCollected = await state.contract.getTotalDonationCollected();
    setTotalDonation(ethers.utils.formatEther(totalDonationCollected));
  }

  const updateState = async () => {
    await Promise.all([updateMemos(), updateTotalDonation()]);
  }

  useEffect(() => {
    (async () => await preConnectFetcher())();
  }, []);

  return (
    <>
      <Header donation={totalDonation} loading={loading} contractAddress={contractAddress}/>
      <Landing
        state={state}
        updateState={updateState}
        isConnected={isConnected}
        onConnect={connectWallet}
      />
      <Contributions memos={memos} loading={loading} />

    </>
  );
}

export default App;
