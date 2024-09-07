pragma circom 2.0.0;

include "pedersen.circom";

template RbtSahayakCircuit() {

    signal input sahayak;
    signal input commitment;
    signal output isValid;

    signal hash_sahayak;

    component pedersenHasher = Pedersen(2);
    pedersenHasher.in[0] <== sahayak;
    pedersenHasher.in[1] <== 0;
    hash_sahayak <== pedersenHasher.out[0];
    isValid <== (hash_sahayak == commitment);
}

component main = RbtSahayakCircuit();