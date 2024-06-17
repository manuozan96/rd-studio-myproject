import React, { ReactNode } from 'react';

interface LineProps {
  children: ReactNode;
  height?: string;
}

const Line: React.FC<LineProps> = ({ children, height = 'h-7' }) => (
  <div className={`w-[430px] ${height} px-7 py-1 border-b border-neutral-950 justify-between`}>
    {children}
  </div>
);

const CustomText: React.FC = () => (
  <div>
    <Line>AÑO 2023</Line>
    <Line>LOCACIÓN BOGOTÁ, COLOMBIA</Line>
    <Line>TAMAÑO 340 M2</Line>
    <Line height="h-12">ENTREGABLE DISEÑO INTERIOR / Arquitectura CONSTRUCCIÓN / MOBILIARIO</Line>
  </div>
);

export default CustomText;