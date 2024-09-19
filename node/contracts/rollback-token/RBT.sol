// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./IRBT.sol";
import "../rollback-oracle/IRBTOracle.sol";

abstract contract RBT is IRBT {
    string private _name;
    string private _symbol;
    uint8 private _decimals;
    uint256 private _totalSupply;
    address _oracle;

    mapping (address => uint256) _balances;
    mapping (address => mapping(uint => TransferStruct)) _transfers;
    mapping (address => uint) _transferCount;

    modifier onlyPendingTransfers( address account, uint tid ) {
        require( isValid(account, tid), "cannot reverse" );
        _;
    }

    constructor(
        string memory name_,
        string memory symbol_,
        uint8 decimals_
    ) {
        _name = name_;
        _symbol = symbol_;
        _decimals = decimals_;
        _oracle = msg.sender;
    }

    function name() external view returns ( string memory ) {
        return _name;
    }

    function symbol() external view returns ( string memory ) {
        return _symbol;
    }

    function decimals() external view returns ( uint ) {
        return _decimals;
    }

    function totalSupply() external view override returns ( uint256 ) {
        return _totalSupply;
    }

    function isValid( address account, uint tid ) internal view returns ( bool ) {
        uint lockPeriod = IRBOracle( _oracle ).getReversePeriod();
        uint locked = _transfers[account][tid].timestamp + ( lockPeriod );

        return block.timestamp > locked;
    }
    
    function getTransfer( address account, uint tid ) external view override returns ( TransferStruct memory ) {
        return _transfers[account][tid];
    }

    function balanceOf( address account ) external view override returns ( uint256 effectiveBalance ) {
        uint transfers = _transferCount[account];

        for ( uint i = 0; i < transfers; i++ ) {
            if ( isValid( account, i ) ) {
                effectiveBalance += ( _transfers[account][i].amount );
            }
        }
    }

    function transfer( address recipient, uint256 amount ) external override returns ( bool ) {
        _transfer( msg.sender, recipient, amount );
        return true;
    }

    function transferFrom( address sender, address recipient, uint256 amount ) external override returns ( bool ) {
        _transfer( sender, recipient, amount );
        return true;
    }

    function _transfer( address sender, address recipient, uint256 amount ) internal {
        require( sender != address(0), "transfer from the zero address" );
        require( recipient != address(0), "transfer to the zero address" );
        require( amount > 0, "transfer amount must be greater than zero" );

        uint tid = _transferCount[sender];
        _transfers[sender][tid] = TransferStruct( recipient, amount, block.timestamp );
        _transferCount[sender] = tid + 1;

        emit Transfer( sender, recipient, amount );
    }

    function _rollback( address account, uint256 tid ) internal {
        _transfers[account][tid].timestamp = 0;
    }
}