"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // this life-cycle can run only in the client component
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // if I'm in server-side rendering,in that case I'll return null, so there is no hydration error possible of happening
  if (!isMounted) return null;

  return (
    <>
      <StoreModal />
    </>
  );
};
