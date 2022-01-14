import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0xA6D7932f8AeB3dbA3FA1608111f4B2495d9d7A90");
// token -> 0x0Fc13DbD9ffBe05A5DC6fAA3E7eE54cB14D3577f
(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "OasisMemeDAO",
      // What's your token's symbol? Ex. "ETH"
      symbol: "MEME",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();