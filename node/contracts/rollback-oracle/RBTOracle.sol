// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "../rollback-token/RBT.sol";
import "../Verifier.sol";

contract RBTOracle is IRBOracle, Verifier {
    event SahayakRegistered(address indexed addr);
    event SahayakUnregistered(address indexed addr);

    event RBTDeployed(address indexed addr);

    mapping (address => bool) public isRBTtoken;
    Verifier verifier;

    constructor() {
    }

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

    function verifySahayak(
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[1] memory input
    ) external view returns (bool) {
        return verifier.verifyProof(a, b, c, input);
    }
}