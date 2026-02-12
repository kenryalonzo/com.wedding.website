"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isRSVPModalOpen: boolean;
  openRSVP: () => void;
  closeRSVP: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);

  const openRSVP = () => setIsRSVPModalOpen(true);
  const closeRSVP = () => setIsRSVPModalOpen(false);

  return (
    <ModalContext.Provider value={{ isRSVPModalOpen, openRSVP, closeRSVP }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
