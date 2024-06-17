// components/ProyectsGallery.tsx
import React from "react";
import { Table } from "./Table";
import ProyectsInterna from "./ProyectsInterna";
import InternaLayout from "./InternaLayout";
import HeaderInterna from "./HeaderInterna";
import Navbar from "./Navbar";

const InternaCompo = () => {
  return (
    <InternaLayout>
      <HeaderInterna />
      <Table />
      <ProyectsInterna />
    </InternaLayout>
  );
};

export default InternaCompo;
