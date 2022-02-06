// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat');

async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy
    // We get the contract to deploy
    const RickAstleyNft = await hre.ethers.getContractFactory('RickAstleyNft');
    const rick = await RickAstleyNft.deploy(
        'RickAstleyNft 100',
        'Rick',
        'ipfs://QmY4BY24YLmam9HCVZoPyN8tiE2ZkzgzL6LQzrUCyiYndN/'
    );
    await rick.deployed();

    // This solves the bug in Mumbai network where the contract address is not the real one
    const txHash = rick.deployTransaction.hash;
    console.log(`Tx hash: ${txHash}\nWaiting for transaction to be mined...`);
    const txReceipt = await ethers.provider.waitForTransaction(txHash);

    console.log('Contract address:', txReceipt.contractAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
