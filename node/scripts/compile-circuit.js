const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const CIRCUIT_DIR = path.join(__dirname, "../circuits");
const BUILD_DIR = path.join(__dirname, "../build");

const compileCircuit = () => {
  console.log("Compiling Circom circuit...");
  execSync(`circom ${CIRCUIT_DIR}/rbt_sahayak.circom --r1cs --wasm --sym --output ${BUILD_DIR}`, { stdio: "inherit" });

  console.log("Circuit compiled successfully.");

  console.log("Generating witness...");
  execSync(`snarkjs wtns calculate ${BUILD_DIR}/rbt_sahayak_js/rbt_sahayak.wasm input.json ${BUILD_DIR}/witness.wtns`, { stdio: "inherit" });

  console.log("Witness generated successfully.");

  console.log("Generating proof...");
  execSync(`snarkjs groth16 setup ${BUILD_DIR}/rbt_sahayak.r1cs powersOfTau28_hez_final_10.ptau ${BUILD_DIR}/circuit_final.zkey`, { stdio: "inherit" });

  console.log("Proof generated successfully.");
};

compileCircuit();
