import style from "./header.module.css";

import Loader from "./Loader";

export default function Header({ donation, balance, loading, contractAddress }) {
  return (
    <div className={style.header}>
      <svg
        id="wave"
        style={{ transform: "rotate(180deg)", transition: "0.3s" }}
        viewBox="0 0 1440 300"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className={style["header-background"]}
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="var(--primary)" offset="0%"></stop>
            <stop stopColor="var(--secondary)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,90L80,75C160,60,320,30,480,45C640,60,800,120,960,140C1120,160,1280,140,1440,110C1600,80,1760,40,1920,45C2080,50,2240,100,2400,110C2560,120,2720,90,2880,90C3040,90,3200,120,3360,130C3520,140,3680,130,3840,135C4000,140,4160,160,4320,160C4480,160,4640,140,4800,110C4960,80,5120,40,5280,50C5440,60,5600,120,5760,120C5920,120,6080,60,6240,50C6400,40,6560,80,6720,90C6880,100,7040,80,7200,85C7360,90,7520,120,7680,120C7840,120,8000,90,8160,65C8320,40,8480,20,8640,45C8800,70,8960,140,9120,160C9280,180,9440,150,9600,140C9760,130,9920,140,10080,135C10240,130,10400,110,10560,130C10720,150,10880,210,11040,230C11200,250,11360,230,11440,220L11520,210L11520,300L11440,300C11360,300,11200,300,11040,300C10880,300,10720,300,10560,300C10400,300,10240,300,10080,300C9920,300,9760,300,9600,300C9440,300,9280,300,9120,300C8960,300,8800,300,8640,300C8480,300,8320,300,8160,300C8000,300,7840,300,7680,300C7520,300,7360,300,7200,300C7040,300,6880,300,6720,300C6560,300,6400,300,6240,300C6080,300,5920,300,5760,300C5600,300,5440,300,5280,300C5120,300,4960,300,4800,300C4640,300,4480,300,4320,300C4160,300,4000,300,3840,300C3680,300,3520,300,3360,300C3200,300,3040,300,2880,300C2720,300,2560,300,2400,300C2240,300,2080,300,1920,300C1760,300,1600,300,1440,300C1280,300,1120,300,960,300C800,300,640,300,480,300C320,300,160,300,80,300L0,300Z"
        ></path>
      </svg>

      <h1 className={style.logo}>Donation App</h1>
      <div className={style.leading}>
        <a
          className={style.contract}
          href={`https://sepolia.etherscan.io/address/${contractAddress}`}
          target="blank_"
        >
          Contract Address :- {contractAddress}
        </a>
        <div className={style.numbers}>
          <div className={style.collections}>
            Total Collection :{" "}
            <span>{!loading ? `${donation} ETH` : <Loader />} </span>
          </div>
          <div className={style.collections}>
            Account Balance :{" "}
            <span>{!loading ? `${(+balance).toFixed(4)} ETH` : <Loader />} </span>
          </div>
        </div>

      </div>
    </div>
  );
}
