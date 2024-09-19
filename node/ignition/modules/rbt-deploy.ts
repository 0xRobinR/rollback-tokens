// script to deploy the rbt contract
import { ethers } from "hardhat";

async function main() {
    const rbtDeploy = await ethers.getContractFactory("RBTOracle")
    const rbt = await rbtDeploy.deploy()
    await rbt.waitForDeployment()
    console.log("RBT deployed to:", rbt.getAddress())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
