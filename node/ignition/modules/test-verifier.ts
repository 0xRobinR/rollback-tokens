// script to test the verifier
import { toBigInt } from "ethers";
import { ethers } from "hardhat";

async function main() {
    // console.log(BigNumberish)
    const verifier = await ethers.getContractAt("RBTOracle", "0x45be9956f994CdCf1d4605C10273c0Bf21Da3265")
    // const vrf = verifier.attach("0x7204a48ef2eA345FfbDfC1008f650C6930774Dc7")
    let proof = {
        "pi_a": [
          "15120646259437126813028646487881028569536184185245204404536477951421876520463",
          "5515884826731355245980715667416118990463943967404382242163716631063976634769",
        ],
        "pi_b": [
          [
            "9382954922906389974501976070970903950670937020963248892178631180038297547898",
            "16283800938785657081252597344289242374991100901452757619400204493846960964352"
          ],
          [
            "17189544542251285775662930921417991787443226070691022678266897775300972426315",
            "19648884967999994569647319941542371282908549450293183472022131960760471785696"
          ]
        ],
        "pi_c": [
          "18661054285787032692140465294075394129591115348461220659494558873766160126101",
          "19508409842411243353785626776445750091221741044328711590451797474055109032719",
        ],
        "protocol": "groth16",
        "curve": "bn128"
      }
    let publicSignals = [
        "5537613676340329970753380218537208134577520094671878056744784672403583495388"
    ]

    // let pi_a = [
    //     ethers.parseEther(ethers.formatEther(proof.pi_a[0])),
    //     ethers.parseEther(ethers.formatEther(proof.pi_a[1]))
    // ]
    // let pi_b = [
    //     [
    //         ethers.parseEther(ethers.formatEther(proof.pi_b[0][0])),
    //         ethers.parseEther(ethers.formatEther(proof.pi_b[0][1]))
    //     ],
    //     [
    //         ethers.parseEther(ethers.formatEther(proof.pi_b[1][0])),
    //         ethers.parseEther(ethers.formatEther(proof.pi_b[1][1]))
    //     ]
    // ]
    // let pi_c = [
    //     ethers.parseEther(ethers.formatEther(proof.pi_c[0])),
    //     ethers.parseEther(ethers.formatEther(proof.pi_c[1]))
    // ]
    // let pubSignals = publicSignals.map((x) => ethers.parseEther(ethers.formatEther(x)))


    let res = await verifier.verifyProof(
        proof.pi_a,
        proof.pi_b,
        proof.pi_c,
        publicSignals
    )
    console.log(res)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
