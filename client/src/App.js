import abi from "./contract/donation.json";
import { useEffect, useState } from 'react';
import { ethers } from "ethers";
import DonateEth from "./components/DonateEth";
import Memos from "./components/Memos";
import './App.css';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  const [loading, setLoading] = useState(false);
  const [memos, setMemos] = useState([]);


  const [account, setAccount] = useState("Not Connected");
  const [isConnected, setIsConnected] = useState(false);
  const [totalDonation, setTotalDonation] = useState(0);
  const contractAddress = "0x8D47C02a3ef0b0ADf8acFe03362a6991DFB93fd6";


  const connectWallet = async () => {
    const contractABI = abi.abi;
    try {
      const { ethereum } = window;

      if (ethereum) {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });

        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        setState({ provider, signer, contract });
        setAccount(accounts[0]);
        setIsConnected(true); // Update connection status

      } else {
        alert("Please install MetaMask");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const preConnectFetcher = async () => {

    setLoading(true)
    
    const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_GOERLI_URL);
    const icoContract = new ethers.Contract(contractAddress, abi.abi, provider);

    const totalDonationCollected = await icoContract.getTotalDonationCollected();
    setTotalDonation(ethers.utils.formatEther(totalDonationCollected));

    const memos = await icoContract.getMemos();
    setMemos(memos);
    
  
    setLoading(false);
  }

  const updateMemos = async () => {
    if (!state.contract){
      return;
    }
    const memos = await state.contract.getMemos();
    setMemos(memos); 
  }

  useEffect( () => {
    (async () => await preConnectFetcher())()
  }, [])


  return (
    <div>
      <button onClick={connectWallet} className="connect__btn" disabled={isConnected}>
        {isConnected ? "Connected" : "Connect"}
      </button>
      <p>Connected Account - {account}</p>
      <div className="App">
        <p>Contract Address - {contractAddress}</p>
        <p>Total Donation Collected - {loading ? "Loading.." : totalDonation} ETH</p>
        <div>
          <DonateEth state={state} updateMemos={updateMemos}/>
          <Memos memos={memos} isLoading={loading}/>
        </div>
      </div>

    </div>
  );
}

export default App;
