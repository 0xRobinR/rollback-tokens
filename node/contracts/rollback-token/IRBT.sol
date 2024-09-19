// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./IERC20.sol";

interface IRBT is IERC20 {
    /**
     * @dev Emitted when a transfer is rolled back.
     * @param from The address that initiated the rollback.
     * @param tid The unique identifier of the transfer that was rolled back.
     */
    event Rollback(address indexed from, uint tid);

    /**
     * @dev Emitted when a transfer is overridden or initiated with rollback functionality.
     * @param from The address sending the tokens.
     * @param to The address receiving the tokens.
     * @param amount The amount of tokens transferred.
     * @param timestamp The time when the transfer was initiated.
     * @param tid The unique identifier of the transfer.
     */
    event TransferOverride(
        address indexed from,
        address indexed to,
        uint256 amount,
        uint256 timestamp,
        uint256 tid
    );

    /**
     * @dev Represents a transfer transaction.
     * @param to The address of the recipient.
     * @param amount The amount of tokens transferred.
     * @param timestamp The timestamp when the transfer was initiated.
     */
    struct TransferStruct {
        address to;
        uint256 amount;
        uint256 timestamp;
    }

    /**
     * @dev Rolls back a previously executed transfer.
     * @param tid The unique identifier of the transfer to be rolled back.
     */
    function rollback(uint tid) external;

    /**
     * @dev Retrieves information about a specific transfer.
     * @param from The address that initiated the transfer.
     * @param tid The unique identifier of the transfer.
     * @return A TransferStruct containing details of the transfer.
     */
    function getTransfer(
        address from,
        uint256 tid
    ) external view returns (TransferStruct memory);
}