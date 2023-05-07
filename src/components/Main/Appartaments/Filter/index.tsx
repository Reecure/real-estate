import BlueButton from "@/components/UI/Buttons/BlueButton";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Filter = (props: Props) => {
  const [filterOpen, setfilterOpen] = useState(false);

  return (
    <div className="flex flex-wrap justify-center space-x-6 mt-10">
      <Link href="/other-projects">
        <div className="border-[1px] border-primary-text-dark-gray py-3 px-6 rounded-lg mb-5">
          All
        </div>
      </Link>
      <Link href="/other-projects">
        <div className="border-[1px] border-primary-text-dark-gray py-3 px-6 rounded-lg mb-5">
          Studio
        </div>
      </Link>
      <Link href="/other-projects">
        <div className="border-[1px] border-primary-text-dark-gray py-3 px-6 rounded-lg mb-5">
          1 Bed Room
        </div>
      </Link>
      <Link href="/other-projects">
        <div className="border-[1px] border-primary-text-dark-gray py-3 px-6 rounded-lg mb-5">
          2 Bed Room
        </div>
      </Link>
    </div>
  );
};

export default Filter;
