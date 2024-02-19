// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract donation {
    struct Memo {
        string name;
        string message;
        uint256 timestamp;
        address from;
        uint256 amount;
    }

    Memo[] memos;
    uint256 total = 0;
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function donate(string memory name, string memory message) public payable {
        require(msg.value > 0, "Please pay greater than 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender, msg.value));
        total = total + msg.value;
    }

    function getMemos() public view returns (Memo[] memory){
        return memos;
    }

    function getTotalDonationCollected() public view returns (uint256) {
        return total;
    }
}
