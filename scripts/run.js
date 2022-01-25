const main = async () => {
	const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
	const gameContract = await gameContractFactory.deploy(
		["Tanjiro", "Eren", "Kirito"],       // Names
    ["https://1.bp.blogspot.com/-9s6W4PhgOCk/YL4ZEzseEXI/AAAAAAAAEzw/JebCkQP-mEAN2pKfTPPUNWTbQR56YfQZwCLcBGAsYHQ/s1200/c72a0656496dffc50acccb172a3e6776.jpg", // Images
    "https://i.pinimg.com/564x/4a/1a/d8/4a1ad8384ca7174d2cb8ce9a1a6a26fa.jpg", 
    "https://www.kolpaper.com/wp-content/uploads/2020/12/Kirito-Wallpaper-1.jpg"],
    [250, 300, 275],                    // HP values
    [200, 150, 175],
		"All for One",
		"https://i.pinimg.com/564x/cd/dc/8c/cddc8c9efae6388956ffdc3c64578af6.jpg",
		15000,
		75 
	);
	await gameContract.deployed();
	console.log("Contract deployed to:", gameContract.address);

	let txn;
	txn = await gameContract.mintCharacterNFT(2);
	await txn.wait();

	txn = await gameContract.attackBoss();
	await txn.wait()

	txn = await gameContract.attackBoss();
	await txn.wait()
}

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
}

runMain();