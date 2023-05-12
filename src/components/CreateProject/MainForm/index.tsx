import BlueButton from "@/components/UI/Buttons/BlueButton";
import { Formik, Field, Form } from "formik";
import Image from "next/image";
import React, { useEffect, useState, FC } from "react";
import AdditionalDetail from "./AdditionalDetail";
import Crypto from "./Crypto";
import MainInfo from "./MainInfo";
import ShareOffersForm from "./ShareOffersForm";
import img from "../../../../public/non-image-in-field.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import s from "./MainForm.module.css";

type Props = {
  onSubmit: (arg: any) => void;
};

const MainForm: FC<Props> = ({ onSubmit }) => {
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
          mlsNumber: "",
          address: "",
          price: "",
          neighbourhood: "",
          propertyType: "",
          poster: "",
          sellingNFT: false,
          acceptCrypto: false,
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          acceptedCurrencies: "",
          size: "",
          bedrooms: "",
          bathrooms: "",
          yearBuilt: "",
          floors: "",
          description: "",
          agentRemarks: "",
          videoLink: "",
        }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="flex justify-between flex-col md:flex-row-reverse gap-10">
              <div className="relative w-full  min-w-[150px] min-h-[300px] md:max-w-[460px] md:max-h-[560px]  overflow-hidden bg-white/5 rounded-[24px] ">
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

              <div className="w-full">
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
                <div className="flex items-center space-x-5">
                  <h5
                    onClick={() => setOpenAdditionalDetails((prev) => !prev)}
                    className="text-2xl font-semibold text-primary-blue mt-9 cursor-pointer mb-10"
                  >
                    Additional details
                  </h5>
                  <MdOutlineKeyboardArrowRight
                    onClick={() => setOpenAdditionalDetails((prev) => !prev)}
                    className={`text-primary-blue text-2xl duration-300 cursor-pointer ${
                      openAdditionalDetails ? "rotate-90" : ""
                    }`}
                  />
                </div>

                {openAdditionalDetails && (
                  <div
                    className={`${
                      openAdditionalDetails
                        ? `${s.myAnimOpen}`
                        : `${s.myAnimClose}`
                    }`}
                  >
                    <h5 className="text-2xl font-semibold pb-10">Features</h5>
                    <AdditionalDetail isOpen={openAdditionalDetails} />
                  </div>
                )}
              </div>
            </div>
            <button type="submit">send</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MainForm;
