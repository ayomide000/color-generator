import React, { useState, useEffect } from "react";
import rgbToHex from "./utilis";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  console.log(hexColor);
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  // Array join method reurns array as string
  // console.log(bcg);
  // console.log(typeof bcg);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
      return () => clearTimeout(timeout);
    }, 1000);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
