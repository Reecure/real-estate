import React from "react";
import { Field } from "formik";

type Props = {};

const Crypto = (props: Props) => {
  return (
    <div className="flex space-x-5">
      <div className="space-x-2">
        <Field id="selling_NFT" name="selling_NFT" type="checkbox" />
        <label htmlFor="selling_NFT">I want explore selling as an NFT</label>
      </div>
      <div className="space-x-2">
        <Field id="accept_Crypto" name="accept_Crypto" type="checkbox" />
        <label htmlFor="accept_Crypto">I’ll also accept cryptocurrencies</label>
      </div>
    </div>
  );
};

export default Crypto;
