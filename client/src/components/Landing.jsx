import React, { useState, useRef } from "react";

import { ethers } from "ethers";

import style from "./Landing.module.css";

export default function Landing({updateState,isConnected, state, onConnect}) {
  const nameRef = useRef();
  const messageRef = useRef();
  const amountRef = useRef();

  const [isDisabled, setIsDisabled] = useState(false);
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

      setIsDisabled(true)
      try{
        const transaction = await contract.donate(name, message, amount);
        await transaction.wait();
        updateState();
        reset()
      }
      catch{
        alert("Error with your transaction! Please try again.");
      }
      setIsDisabled(false)

  };

  const reset = () => {
    nameRef.current.value = "";
    messageRef.current.value = "";
    amountRef.current.value = 0;
  }

  return (
    <div className={style.landing}>
      <div className={style.description}>
        <h1>
          Do a <span>Deed.</span>
          <br />
          Do a <span>Donation.</span>
        </h1>
        Join us in making a difference! Your donation can provide vital support to those in need. 
        Together, we can bring hope and change lives. Every contribution counts. 
        Please donate today and help us make a meaningful impact. Thank you for your generosity.
      </div>
      <div className={style["form-container"]}>
        {!isConnected ? (
          <>
            <p className={style.info}>
              To make a contribution connect to wallet
            </p>
            <button className={style.controls} onClick={onConnect}>
              Connect To Wallet
            </button>
          </>
        ) : (
          <form className={style["donation-form"]} onSubmit={donate}>
            <h2>Make a Contribution..</h2>
            <div className={style["input-group"]}>
              <label for="name">Name : </label>
              <input ref={nameRef} type="text" id="name" name="name" placeholder="Name" />
            </div>
            <div className={style["input-group"]}>
              <label for="msg">Message : </label>
              <input ref={messageRef} type="text" id="msg" name="msg" placeholder="Message" />
            </div>
            <div className={style["input-group"]}>
              <label for="amount">Amount : </label>
              <input
                type="number"
                name="amount"
                id="amount"
                step="0.001"
                placeholder="Amount"
                ref={amountRef}
              />
            </div>
            <input
              type="submit"
              value={isDisabled ? "Pending.." :"Do a great deed"}
              className={style.controls}
              disabled={isDisabled}
            />
          </form>
        )}
      </div>
    </div>
  );
}
