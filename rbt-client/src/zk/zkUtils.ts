function toHex(number: string | number | bigint): string {
    return BigInt(number).toString(16).padStart(64, '0'); // Pad to 64 characters for Solidity's uint256
}

// Convert proof to hex format
function proofToHex(proof: any): { a: string[], b: string[][], c: string[] } {
    return {
        a: [toHex(proof.pi_a[0]), toHex(proof.pi_a[1])],
        b: [
            [toHex(proof.pi_b[0][0]), toHex(proof.pi_b[0][1])],
            [toHex(proof.pi_b[1][0]), toHex(proof.pi_b[1][1])],
        ],
        c: [toHex(proof.pi_c[0]), toHex(proof.pi_c[1])],
    };
}

// Convert public signals to hex
function publicSignalsToHex(publicSignals: any[]): string[] {
    return publicSignals.map((signal) => toHex(signal));
}

export {
    proofToHex,
    publicSignalsToHex
};