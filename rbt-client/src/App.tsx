// src/App.tsx
import React, { useState } from "react";
import { generateProof } from "./zk/zkHelper";

function App() {
  const [sahayak, setSahayak] = useState("");
  const [proof, setProof] = useState<any>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const result = await generateProof(sahayak);
      setProof(result);
    } catch (error) {
      console.error("Error generating proof:", error);
    }
  };

  return (
    <div>
      <h1>zk-RBT Proof Generator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Sahayak Address:
          <input
            type="text"
            value={sahayak}
            onChange={(e) => setSahayak(e.target.value)}
          />
        </label>
        <button type="submit">Generate Proof</button>
      </form>
      {proof && (
        <div>
          <h2>Generated Proof:</h2>
          <pre>{JSON.stringify(proof, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
