import { ethers } from "ethers";
import { useRef } from "react";

const DonateEth = ({ state, updateMemos }) => {
    const nameRef = useRef();
    const messageRef = useRef();
    const amountRef = useRef();
    const donate = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const name = nameRef.current.value;
        const message = messageRef.current.value;
        const donationAmount = amountRef.current.value;

        if (!donationAmount || isNaN(donationAmount)) {
            console.error("Please enter a valid donation amount");
            return;
        }

        const amount = { value: ethers.utils.parseEther(donationAmount) };
        const transaction = await contract.donate(name, message, amount);
        await transaction.wait();
        updateMemos();
        console.log("Transaction is done");
    };

    return (
        <>
            <form onSubmit={donate}>
                <label>Name</label>
                <input type="text" id="name" placeholder="Enter your Name" ref={nameRef}></input>
                <label>Message</label>
                <input
                    type="text"
                    id="message"
                    placeholder="Enter your Message"
                    ref={messageRef}
                ></input>
                <label>Donation Amount (ETH)</label>
                <input
                    type="number"
                    step="0.0001"
                    id="donationAmount"
                    placeholder="Enter Donation Amount"
                    ref={amountRef}
                ></input>
                <button 
                type="submit"
                className="btn primary"
                disabled={!state.contract }
                >Pay</button>
            </form>
        </>
    );
};

export default DonateEth;
