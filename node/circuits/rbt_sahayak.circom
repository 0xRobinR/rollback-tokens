pragma circom 2.0.0;

include "pedersen.circom";

template RbtSahayak() {
    signal input sahayak;
    signal output commitment;

    component pedersenHash = Pedersen(256);
    pedersenHash.in = [sahayak];
    commitment <== pedersenHash.out;
}

component main = RbtSahayak();