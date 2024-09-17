pragma circom 2.0.0;

include "poseidon.circom";

template RbtSahayak() {
    signal input sahayak;
    signal output commitment;

    component poseidonHash = Poseidon(1);
    poseidonHash.inputs[0] <== sahayak;
    commitment <== poseidonHash.out;
}

component main = RbtSahayak();