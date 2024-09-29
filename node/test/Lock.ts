import { expect } from "chai";
import { ethers } from "hardhat";
import { groth16 } from "snarkjs";
import fs from "fs";
import path from "path";

describe("Groth16 Verifier Contract", function () {
  let verifierContract: ethers.Contract;

  before(async function () {
    // Deploy the Verifier contract
    const Verifier = await ethers.getContractFactory("contracts/verifier.sol:MYVerifier"); // Or Verifier.sol, based on your contract name
    verifierContract = await Verifier.deploy();
    await verifierContract.deployed();

    console.log("Verifier deployed to:", verifierContract.address);
  });

  it("Should verify the proof correctly", async function () {
    // Path to the .wasm and .zkey files
    const wasmPath = path.join(__dirname, "../circuits/circuit.wasm"); // Adjust paths
    const zkeyPath = path.join(__dirname, "../circuits/circuit_final.zkey");
    const inputJsonPath = path.join(__dirname, "../circuits/input.json");

    // Load the input file
    const input = JSON.parse(fs.readFileSync(inputJsonPath, "utf-8"));

    // Generate proof and public signals
    const { proof, publicSignals } = await groth16.fullProve(input, wasmPath, zkeyPath);

    // Convert proof to Solidity calldata
    const calldata = await groth16.exportSolidityCallData(proof, publicSignals);

    // Parse the calldata string into arrays
    const argv = calldata
      .replace(/["[\]\s]/g, "")
      .split(",")
      .map((x) => BigInt(x).toString());

    // Extract the individual proof parameters
    const a = [argv[0], argv[1]];
    const b = [
      [argv[2], argv[3]],
      [argv[4], argv[5]],
    ];
    const c = [argv[6], argv[7]];
    const inputSignals = argv.slice(8); // Public inputs

    // Call verifyProof in the contract with the proof and public signals
    const isValid = await verifierContract.verifyProof(a, b, c, inputSignals);

    // Verify that the proof is valid
    expect(isValid).to.be.true;
  });
});
