import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x6597187A1f9e70E261Aed9910260D3084A3cC0F8",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Crab",
        description: "This NFT will give you access to OasisMemeDAO!",
        image: readFileSync("scripts/assets/nft.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()