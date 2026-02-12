import Image from "next/image";
import { ReactNode } from "react";

interface HeroProps {
  children: ReactNode;
}

export default function Hero({ children }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/vase-dore.png"
          alt="Vase d'Or Background"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-blue-100/20" />
        {/* Subtle Shimmer Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/15 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center gap-12 px-4">
        {children}
      </div>
    </section>
  );
}
