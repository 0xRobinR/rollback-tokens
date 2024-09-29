// script to test the verifier
import { toBigInt } from "ethers";
import { ethers } from "hardhat";

async function main() {
    // console.log(BigNumberish)
    const verifier = await ethers.getContractAt("RBTOracle", "0x45be9956f994CdCf1d4605C10273c0Bf21Da3265")
    // const vrf = verifier.attach("0x7204a48ef2eA345FfbDfC1008f650C6930774Dc7")
    // let proof = {
    //   "a": [
    //     "0x0616ba5de8d57951edf23c36dc5d3922f0df0083826166f689be2cadacd5f8a7",
    //     "0x125600b0ce9e8dcf3b93e4f867bbe53d9fcf28b464499a63db036b80e17abf5e"
    //   ],
    //   "b": [
    //     [
    //       "0x21ff6610a900f5e3db95708b64ed7c94ca0d0aa3f1de8eb74d2f50d1f73b92c0",
    //       "0x1edaa93c32409031da08181ab0512584e746cdd159e35fe9cd630b255fbb8957"
    //     ],
    //     [
    //       "0x01a744ede45586be70cc36ba9221e0866ee9f31227198659e0f92ce081cb1e77",
    //       "0x135fa507b7debe2dfa5fcef72f14fff213baa11e14bbea8366fbb0baa9dd87e7"
    //     ]
    //   ],
    //   "c": [
    //     "0x016b72b3a29588deba2039b55481350ec3c5872506b583218e32e87c4c1c42b1",
    //     "0x19f7d204e0785850f6f96c5230e1699904e0566ae95305ffb1f0d9d79a17fb71"
    //   ],
    //   input: [
    //     "0x21f6c93b8b701f3c96744fcc5e4d99d95fdbaffe3068c0f1dbfdf753df34a56c"
    //   ]
    // }

    let a = ["0x23f0e315863579d3f00d26d5303f507b688f30b78774d957be181f2e392b758d", "0x1d3489092e4bbe583a609205c6ab0da3dff66029c5bf5f3b49d5c2d626a031fd"]
    let b = [["0x293d223a25019713526a046d635b001d17ae0ec72298f86f0d10c0add2209d81", "0x2c667e56c676b3528d9009618611154ac718961d7fbd44b9753702bc86b0abd7"],["0x1d077a2a36909a001400feecc73a85d004e7b5870f18038002802e7a3431e591", "0x230a7e255642da4a03c54978d6d8484bffa94360a79479a04b7301885f514073"]]
    let c = ["0x11e9e36a54aeb3ced9d30655ff9badee8ce3587d8b6fb55f44de942f86cb33ad", "0x2e414d8cf4280ea29574f79cd7a84bc86ee7f6809d5745352909c8bea061c49b"]
    let input = ["0x21f6c93b8b701f3c96744fcc5e4d99d95fdbaffe3068c0f1dbfdf753df34a56c"]
    // let publicSignals = [
    //     "15362357237520364491535259361674708050946431534472900181927984484660047816044"
    // ]

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
        a,
        b,
        c,
        input
    )
    console.log(res)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
