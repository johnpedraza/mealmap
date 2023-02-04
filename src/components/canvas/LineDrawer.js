import React, { useRef, useEffect } from 'react';

const LineDrawer = (props) => {
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
      context.fillRect(0, 0, 5, 5);
      context.fillRect(100, 0, 5, 5);
      context.fillRect(200, 0, 5, 5);
      context.fillRect(300, 0, 5, 5);
      context.fillRect(400, 0, 5, 5);
      context.fillRect(0, 100, 5, 5);
      context.fillRect(0, 200, 5, 5);
      context.fillRect(0, 300, 5, 5);
      context.fillRect(0, 400, 5, 5);
      context.fillRect(0, 500, 5, 5);
      
      const location_string = props.location.location
      const building = location_string.split(' ')[0]
      if (building == "CIC") {
        context.fillStyle = "black"
        context.fillRect(71, 146, 20, 20);
        context.fillStyle = "magenta"
        context.fillRect(75, 150, 12, 12);
      } else if (building == "UC") {
        context.fillStyle = "black"
        context.fillRect(346, 206, 20, 20);
        context.fillStyle = "magenta"
        context.fillRect(350, 210, 12, 12);
      } else if (building == "DH") {
        context.fillStyle = "black"
        context.fillRect(190, 277, 20, 20);
        context.fillStyle = "magenta"
        context.fillRect(194, 281, 12, 12);
      } else if (building == "GHC") {
        context.fillStyle = "black"
        context.fillRect(196, 196, 20, 20);
        context.fillStyle = "magenta"
        context.fillRect(200, 200, 12, 12);
      }

      //context.clearRect(45, 45, 60, 60);
      //context.strokeRect(50, 50, 50, 50);
      // context.beginPath();
      // context.moveTo(100, 100);
      // context.lineTo(200, 200);
      // context.stroke();
      // context.beginPath();
      // context.moveTo(300, 300);
      // context.lineTo(400, 400);
      // context.stroke();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default LineDrawer;
