import { ethers } from "ethers";

import style from "./Contributions.module.css";
import Loader from "./Loader";

export default function Contributions({ memos, loading }) {
  return (
    <div className={style["contributions-container"]}>
      <h1 className={style.heading}>Latest Contributions</h1>
      {!loading ? (
        <table className={style.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th className={style.message}>Message</th>
              <th>Time Stamp</th>
              <th  className={style.from}>From</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {memos.slice().reverse().map((memo, i) => (
              <tr key={i}>
                <td>{memo.name}</td>
                <td className={style.message}> {memo.message}</td>
                <td>{new Date(memo.timestamp * 1000).toLocaleString()}</td>
                <td className={style.from}>{memo.from}</td>
                <td>{ethers.utils.formatUnits(memo.amount)} ETH</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Loader />
      )}
    </div>
  );
}
