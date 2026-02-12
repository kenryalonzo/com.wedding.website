"use client";

import React from "react";

const GoldenHalos = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Top Left Halo */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] animate-pulse" />

      {/* Mid Right Halo */}
      <div className="absolute top-[30%] right-[-5%] w-[700px] h-[700px] bg-gold/5 rounded-full blur-[150px]" />

      {/* Bottom Left Halo */}
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] animate-pulse" />

      {/* Bottom Right Halo */}
      <div className="absolute bottom-[-5%] right-[-5%] w-[800px] h-[800px] bg-gold/5 rounded-full blur-[180px]" />

      {/* Scattered small glows */}
      <div className="absolute top-[15%] left-[40%] w-[300px] h-[300px] bg-gold/3 rounded-full blur-[80px]" />
      <div className="absolute top-[60%] right-[30%] w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px]" />
    </div>
  );
};

export default GoldenHalos;
