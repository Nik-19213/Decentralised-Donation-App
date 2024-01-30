import { ethers } from "ethers";


const Memos = ({ memos, isLoading }) => {

    return (
        <>
            <p>Donators</p>
            <table>
                {isLoading && <p>Loading..</p>}
                {!isLoading && <tbody>
                    {memos.slice().reverse().map((memo, i) => {
                        return (
                            <tr key={i}>
                                <td>{memo.name}</td>
                                <td>{memo.message}</td>
                                <td>{new Date(memo.timestamp * 1000).toLocaleString()}</td>
                                <td>{memo.from}</td>
                                <td>{ethers.utils.formatUnits(memo.amount)} ETH</td>
                            </tr>
                        );
                    })}
                </tbody>}
            </table>
        </>
    );
};
export default Memos; 