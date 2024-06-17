// components/Locations.tsx
import type { NextPage } from "next";

type LocationsType = {
  className?: string;
  oficinaMxico?: string;
  vector5?: string;
  vector51?: string;
  propAlignSelf?: string;
  propAlignSelf1?: string;
};

const Locations: NextPage<LocationsType> = ({
  className = "",
  oficinaMxico,
  vector5,
  vector51,
  propAlignSelf,
  propAlignSelf1,
}) => {
  return (
    <div
      className={`locations-container ${className}`}
      style={{ alignSelf: propAlignSelf }}
    >
      <p className="locations-text" style={{ alignSelf: propAlignSelf1 }}>
        <span className="block font-light">{oficinaMxico}</span>
        <span className="block">(+57) (1) 813 48 36</span>
      </p>
      <div className="info-container">
        <div className="info-text uppercase font-light">
          info@reinharddienes.com
        </div>
        <img className="info-image" loading="lazy" alt="" src={vector5} />
      </div>
      <div className="address-container">
        <a className="address-text uppercase font-light">CARRERA 7 #73-55</a>
        <img className="address-image" loading="lazy" alt="" src={vector51} />
      </div>
    </div>
  );
};

export default Locations;
