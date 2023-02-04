import React, { useRef, useEffect } from 'react';

const LineDrawer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const image = new Image();
    //image.src = 'https://picsum.photos/800/600';
    image.src = require('../../assets/cmu_map_th23.png')
    image.width = 1000
    image.height = 450
    canvas.width = 1000
    canvas.height = 450

    image.onload = () => {
      context.drawImage(image, 0, 0);
      context.fillRect(350, 200, 25, 25);
      //context.clearRect(45, 45, 60, 60);
      //context.strokeRect(50, 50, 50, 50);
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
