// scripts/setup-zkey.js
const { exec } = require("child_process");
const path = require("path");

function setupZKey() {
  const r1csPath = path.resolve(__dirname, "../circuits/rbt_sahayak.r1cs");
  const ptauPath = path.resolve(__dirname, "../circuits/pot12_final.ptau");
  const zkeyPath = path.resolve(__dirname, "../circuits/circuit_final.zkey");

  exec(
    `snarkjs groth16 setup ${r1csPath} ${ptauPath} ${zkeyPath}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error generating zKey: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`zKey generation stderr: ${stderr}`);
        return;
      }
      console.log(`ZKey generated successfully:\n${stdout}`);
    }
  );
}

setupZKey();
