import React from "react";
import { Field } from "formik";

type Props = {};

const Crypto = (props: Props) => {
  return (
    <div className="flex space-x-5">
      <div className="space-x-2">
        <label className="custom-checkbox">
          I want explore selling as an NFT
          <Field id="sellingNFT" name="selling_NFT" type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="space-x-2">
        <label className="custom-checkbox">
          I want explore selling as an NFT
          <Field id="acceptCrypto" name="accept_Crypto" type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
};

export default Crypto;
