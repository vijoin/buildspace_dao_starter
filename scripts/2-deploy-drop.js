import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x3FD6af6d84DF5A8aCaF5Ea2DE9C6366DF3793506");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "0x58DAO Membership",
      description: "A DAO to manage crowdfunding for projects and talent from Venezuela",
      image: readFileSync("scripts/assets/waving-flag-ve.gif"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log("OK: Successfully deployed bundleDrop module, address:", bundleDropModule.address);
    console.log("OK: bundleDrop metadata:", await bundleDropModule.getMetadata());
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error)
  }
})()