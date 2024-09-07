// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "../rollback-token/RBT.sol";

contract RBTOracle is IRBOracle {
    event SahayakRegistered(address indexed addr);
    event SahayakUnregistered(address indexed addr);

    event RBTDeployed(address indexed addr);

    mapping (address => bool) public isRBTtoken;

    function deployRBT(
        string memory name_,
        string memory symbol_,
        uint8 decimals_
    ) external {
        // RBT rbt = new RBT(name_, symbol_, decimals_);
        // isRBTtoken[address(rbt)] = true;
        // emit RBTDeployed(address(rbt));
    }

    function getReversePeriod() external pure returns (uint) {
        return 45 minutes;
    }
}