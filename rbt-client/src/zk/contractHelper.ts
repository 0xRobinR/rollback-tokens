// src/zk/contractHelper.ts
import { ethers, InterfaceAbi } from "ethers";
import * as RBTOracleABI from "../abi/RBTOracle.json";

const contractAddress = "0x0000000000000000000000000000000000000000";

declare global {
    interface Window {
      ethereum: any;
  }
}

export async function submitProof(
  a: string[],
  b: string[][],
  c: string[],
  input: string[]
) {
  if (!window.ethereum) {
    throw new Error("Ethereum provider not found");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAddress, RBTOracleABI as InterfaceAbi, signer);

  const tx = await contract.submitProof(a, b, c, input);
  await tx.wait();
}
