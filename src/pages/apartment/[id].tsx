import AppartamentPage from "@/components/AppartamentPage";
import { Project } from "@/types";
import { data } from "autoprefixer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../layout";

type Props = {};

const Appartament = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;

  const [currApartment, setCurrApartment] = useState<Project>(Object);

  useEffect(() => {
    const fetchApart = async () => {
      const res = await fetch(`/api/getProject?id=${id}`);
      const data = await res.json();
      setCurrApartment(data.project);
    };
    if (id) {
      fetchApart();
    }
  }, [id]);

  useEffect(() => {
    console.log(currApartment);
    console.log(id);
  }, [currApartment]);

  return (
    <Layout>
      <div className="text-white py-32 custom-padding">
        <AppartamentPage apart={{ ...currApartment }} />
      </div>
    </Layout>
  );
};

export default Appartament;
