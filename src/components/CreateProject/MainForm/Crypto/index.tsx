import React from "react";
import { Field } from "formik";

type Props = {};

const Crypto = (props: Props) => {
  return (
    <div className="flex space-x-5">
      <div className="space-x-2">
        <Field id="sellingNFT" name="selling_NFT" type="checkbox" />
        <label htmlFor="sellingNFT">I want explore selling as an NFT</label>
      </div>
      <div className="space-x-2">
        <Field id="acceptCrypto" name="accept_Crypto" type="checkbox" />
        <label htmlFor="acceptCrypto">I’ll also accept cryptocurrencies</label>
      </div>
    </div>
  );
};

export default Crypto;
