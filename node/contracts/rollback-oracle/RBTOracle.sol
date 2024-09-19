// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "../rollback-token/RBT.sol";
import "../Verifier.sol";

contract RBTOracle is IRBOracle, RBTVerifier {
    event SahayakRegistered(address indexed addr);
    event SahayakUnregistered(address indexed addr);

    event RBTDeployed(address indexed addr);
    event ProofVerified(address indexed sender, uint256 commitment);

    mapping (address => bool) public isRBTtoken;
    RBTVerifier verifier;

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
        return verifyProof(a, b, c, input);
    }

    function submitProof(
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[1] memory input // Adjust size if more public inputs
    ) public returns (bool) {
        // Verify the proof
        // bool isValid = verifyProof(a, b, c, input);
        // require(isValid, "Invalid proof");

        // // Handle successful verification
        // uint256 commitment = input[0]; // Assuming commitment is the first public input
        // commitments[msg.sender] = commitment;

        // emit ProofVerified(msg.sender, commitment);

        // return true;
    }
}