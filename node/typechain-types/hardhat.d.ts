/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IRBOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRBOracle__factory>;
    getContractFactory(
      name: "RBTOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RBTOracle__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IRBT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRBT__factory>;
    getContractFactory(
      name: "RBT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RBT__factory>;
    getContractFactory(
      name: "RBTVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RBTVerifier__factory>;
    getContractFactory(
      name: "Verifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Verifier__factory>;

    getContractAt(
      name: "IRBOracle",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IRBOracle>;
    getContractAt(
      name: "RBTOracle",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.RBTOracle>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IRBT",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IRBT>;
    getContractAt(
      name: "RBT",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.RBT>;
    getContractAt(
      name: "RBTVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.RBTVerifier>;
    getContractAt(
      name: "Verifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Verifier>;

    deployContract(
      name: "IRBOracle",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IRBOracle>;
    deployContract(
      name: "RBTOracle",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.RBTOracle>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "IRBT",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IRBT>;
    deployContract(
      name: "RBT",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.RBT>;
    deployContract(
      name: "RBTVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.RBTVerifier>;
    deployContract(
      name: "Verifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Verifier>;

    deployContract(
      name: "IRBOracle",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IRBOracle>;
    deployContract(
      name: "RBTOracle",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.RBTOracle>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "IRBT",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IRBT>;
    deployContract(
      name: "RBT",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.RBT>;
    deployContract(
      name: "RBTVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.RBTVerifier>;
    deployContract(
      name: "Verifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Verifier>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
