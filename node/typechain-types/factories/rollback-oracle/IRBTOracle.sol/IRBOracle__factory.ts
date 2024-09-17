/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IRBOracle,
  IRBOracleInterface,
} from "../../../rollback-oracle/IRBTOracle.sol/IRBOracle";

const _abi = [
  {
    inputs: [],
    name: "getReversePeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IRBOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IRBOracleInterface {
    return new Interface(_abi) as IRBOracleInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IRBOracle {
    return new Contract(address, _abi, runner) as unknown as IRBOracle;
  }
}