// scripts/compile-circuit.js
const { exec } = require("child_process");
const path = require("path");

function compileCircuit() {
  const circuitPath = path.resolve(__dirname, "../circuits/rbt_sahayak.circom");
  const outputDir = path.resolve(__dirname, "../circuits");

  exec(
    `circom ${circuitPath} --r1cs --wasm --sym -o ${outputDir}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error compiling circuit: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Compilation stderr: ${stderr}`);
        return;
      }
      console.log(`Circuit compiled successfully:\n${stdout}`);
    }
  );
}

compileCircuit();
