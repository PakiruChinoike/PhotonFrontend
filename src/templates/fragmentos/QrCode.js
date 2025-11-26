import React, { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QrCode({ value }) {
  const canvasRef = useRef(null);

  // const downloadQR = () => {
  //   const canvas = canvasRef.current.querySelector("canvas");
  //   const url = canvas.toDataURL("image/png");

  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.download = "qrcode.png";
  //   link.click();
  // };

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <div ref={canvasRef} style={{ display: "inline-block" }}>
        <QRCodeCanvas
          value={value}
          size={300}
          bgColor={"#FFFFFF"}
          fgColor={"#000000"}
          level={"H"}
        />
      </div>
    </div>
  );
}