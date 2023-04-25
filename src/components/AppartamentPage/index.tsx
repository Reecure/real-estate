import React from "react";
import Container from "../UI/Container";
import MessageToUserCard from "./MessageToUserCard";
import ProductDescription from "./ProductDescription";
import SwiperProductPage from "./SwiperProductPage";

type Props = {};

const AppartamentPage = (props: Props) => {
  return (
    <Container className="grid grid-cols-[4fr_1fr] gap-12">
      <div className="max-w-[880px] ">
        <SwiperProductPage />
        <ProductDescription />
      </div>
      <div className="">
        <MessageToUserCard />
      </div>
    </Container>
  );
};

export default AppartamentPage;
