// script to test the verifier
import { toBigInt } from "ethers";
import { ethers } from "hardhat";

async function main() {
    // console.log(BigNumberish)
    const verifier = await ethers.getContractAt("RBTOracle", "0x7204a48ef2eA345FfbDfC1008f650C6930774Dc7")
    // const vrf = verifier.attach("0x7204a48ef2eA345FfbDfC1008f650C6930774Dc7")
    let proof = {
        "pi_a": [
            "12604154917966279992146647201318840565337780561895299908332842081728585623355",
            "1070940314405935397727957777777064169919444881761116945698402857778495334798",
            "1"
        ],
        "pi_b": [
            [
            "19050394571423601621275026688048547596226575380359867423782551728856929704631",
            "17118226079538300450883842367619051594621253951391137997694912448636349778386"
            ],
            [
            "6240772722853668407570140605630092865782560529657796792264655214118598311049",
            "20980654675014397272915161765428448086169779444915123461057853071024447858806"
            ],
            [
            "1",
            "0"
            ]
        ],
        "pi_c": [
            "19808724524581416197185730802710037967189907376422342588005197462048907848862",
            "1966936833633512852177117750843642994140916206468924765044542924089123712954",
            "1"
        ],
        "protocol": "groth16",
        "curve": "bn128"
    }
    let publicSignals = [
        "13978268337333264717041434770816193475473863781233875432892947120632547971475"
    ]

    let pi_a = [
        ethers.parseEther(ethers.formatEther(proof.pi_a[0])),
        ethers.parseEther(ethers.formatEther(proof.pi_a[1]))
    ]
    let pi_b = [
        [
            ethers.parseEther(ethers.formatEther(proof.pi_b[0][0])),
            ethers.parseEther(ethers.formatEther(proof.pi_b[0][1]))
        ],
        [
            ethers.parseEther(ethers.formatEther(proof.pi_b[1][0])),
            ethers.parseEther(ethers.formatEther(proof.pi_b[1][1]))
        ]
    ]
    let pi_c = [
        ethers.parseEther(ethers.formatEther(proof.pi_c[0])),
        ethers.parseEther(ethers.formatEther(proof.pi_c[1]))
    ]
    let pubSignals = publicSignals.map((x) => ethers.parseEther(ethers.formatEther(x)))


    let res = await verifier.verifyProof(
        pi_a,
        pi_b,
        pi_c,
        pubSignals
    )
    console.log(res)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
