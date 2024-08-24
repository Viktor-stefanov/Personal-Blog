"use client";

import { useEffect, useRef } from "react";

const MatrixRain = ({ styling }: { styling: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null!);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;

    canvas.width = (window.innerWidth / 100) * 15; // 15% of the screen so it can be used on the side of the main content
    canvas.height = window.innerHeight;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%".split(
      ""
    );

    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }, () => 1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px arial";

      for (let i = 0; i < drops.length; i++) {
        const letter = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(letter, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
          drops[i] = 0;

        drops[i]++;
      }
    };

    // Loop the animation
    setInterval(draw, 37);
  }, []);

  return <canvas ref={canvasRef} className={styling}></canvas>;
};

export default MatrixRain;
