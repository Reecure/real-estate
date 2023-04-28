import BlueButton from "@/components/UI/Buttons/BlueButton";
import { Formik, Field, Form } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import AdditionalDetail from "./AdditionalDetail";
import Crypto from "./Crypto";
import MainInfo from "./MainInfo";
import ShareOffersForm from "./ShareOffersForm";
import img from "../../../../public/non-image-in-field.svg";

type Props = {};

const MainForm = (props: Props) => {
  const [openAdditionalDetails, setOpenAdditionalDetails] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          mls_number: "",
          address: "",
          price: "",
          neighbourhood: "",
          property_type: "",
          poster: "",
          selling_NFT: false,
          accept_Crypto: false,
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          accepted_currencies: "",
          size: "",
          bedrooms: "",
          bathrooms: "",
          year_built: "",
          floors: "",
          description: "",
          agent_remarks: "",
          video_link: "",
        }}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="grid grid-cols-[3fr_1fr] gap-10">
              <div>
                {/* Main inputs MLS ADDRESS etc... */}
                <MainInfo />

                {/* Crypto */}
                <Crypto />

                {/* Share offers with the seller */}
                <h4 className="font-semibold text-2xl py-7">
                  Share offers with the seller
                </h4>
                <ShareOffersForm />

                {/* Additional Details */}
                <h5
                  className="text-2xl font-semibold text-primary-blue mt-9 cursor-pointer mb-10"
                  onClick={() => setOpenAdditionalDetails((prev) => !prev)}
                >
                  Additional details
                </h5>
                {openAdditionalDetails && (
                  <>
                    <h5 className="text-2xl font-semibold pb-10">Features</h5>
                    <AdditionalDetail />
                  </>
                )}
              </div>

              <div>
                <div className="relative overflow-hidden bg-white/5 rounded-[24px] w-[480px] h-[705px]">
                  <Field
                    ref={fileInputRef}
                    type="file"
                    name="poster"
                    id="poster"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 z-10"
                  />
                  <div className=" flex flex-col items-center absolute top-1/2 -translate-y-1/2 left-1/2  -translate-x-1/2 ">
                    <Image src={img} alt="img" className="mb-5 " />
                    <BlueButton onClick={handleClick}>Upload Poster</BlueButton>
                  </div>

                  <div className="absolute top-1/2  -translate-y-1/2 ">
                    {previewImage && (
                      <Image
                        src={previewImage}
                        alt="Preview"
                        width={480}
                        height={705}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <button>send</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MainForm;
