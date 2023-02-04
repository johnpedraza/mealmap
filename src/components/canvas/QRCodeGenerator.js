import  QRCode  from "qrcode";
import { useEffect, useRef, useState } from "react";

function QRCodeGenerator (props) {
  const [text, setText] = useState("");
  const canvasRef = useRef();

  useEffect(() => {
    QRCode.toCanvas(
      canvasRef.current,
      text || props.destination,
      (error) => error && console.error(error)
    );
  }, [text]);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
  
}

export default QRCodeGenerator