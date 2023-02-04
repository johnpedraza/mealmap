import React, { useRef, useEffect } from 'react';

const LineDrawer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const image = new Image();
    image.src = 'https://picsum.photos/800/600';
    canvas.width = 800
    canvas.height = 600

    image.onload = () => {
      context.drawImage(image, 0, 0);
      context.beginPath();
      context.moveTo(100, 100);
      context.lineTo(200, 200);
      context.stroke();
      context.beginPath();
      context.moveTo(300, 300);
      context.lineTo(400, 400);
      context.stroke();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default LineDrawer;
