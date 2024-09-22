// src/zk/zkHelper.ts
import { groth16 } from "snarkjs";

export async function generateProof(sahayak: string) {
  // Convert sahayak to BigInt
  let sahayakBigInt: bigint;
  try {
    // Remove any whitespace and validate the input
    const sahayakTrimmed = sahayak.trim();

    // Handle hexadecimal input (if applicable)
    if (sahayakTrimmed.startsWith("0x") || sahayakTrimmed.startsWith("0X")) {
      sahayakBigInt = BigInt(sahayakTrimmed);
    } else {
      // Assume decimal input
      sahayakBigInt = BigInt(sahayakTrimmed);
    }
  } catch (error) {
    throw new Error(`Invalid sahayak input: ${error}`);
  }

  // Prepare the inputs
  const inputs = {
    sahayak: sahayakBigInt.toString(), // Convert BigInt back to string if necessary
  };

  // Load the necessary files
  const wasmUrl = "/rbt_sahayak.wasm";
  const zkeyUrl = "/circuit_final.zkey";

  // Fetch the files
  const wasmResponse = await fetch(wasmUrl);
  const zkeyResponse = await fetch(zkeyUrl);
  const wasmArrayBuffer = await wasmResponse.arrayBuffer();
  const zkeyArrayBuffer = await zkeyResponse.arrayBuffer();

  const { proof, publicSignals } = await groth16.fullProve(
    inputs,
    new Uint8Array(wasmArrayBuffer),
    new Uint8Array(zkeyArrayBuffer)
  );
  console.debug(await verifyProof(proof, publicSignals));

  return { proof, publicSignals };
}

export async function verifyProof(proof: any, publicSignals: any): Promise<boolean> {
  try {
    const vkeyResponse = await fetch("/verification_key.json");
    const vkey = await vkeyResponse.json();
    const isValid = await groth16.verify(vkey, publicSignals, proof);

    return isValid;
  } catch (error) {
    console.error("Error during proof verification:", error);
    throw new Error("Proof verification failed");
  }
}