"use client";

import { DefaultView, Key, Phrase, RemoveWallet } from "@/components/DrawerComponents";
import { useMemo, useState } from "react";
import { Drawer } from 'vaul';

export default function FamilyDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const [view,setView] = useState("default")

  const content = useMemo(() => {
    switch (view) {
      case "default":
        return <DefaultView setView={setView} />;
      case "remove":
        return <RemoveWallet setView={setView} />;
      case "phrase":
        return <Phrase setView={setView} />;
      case "key":
        return <Key setView={setView} />;
    }
  }, [view]);
  return (
    <>
      <button
        className="h-[44px] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-6 rounded-full bg-white py-2 font-medium text-black border border-gray-200 transition-colors hover:bg-[#F9F9F8] focus-visible:shadow-focus-ring-button md:font-medium"
        onClick={() => setIsOpen(true)}
      >
        Try it out
      </button>
     
        <>
        <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
            <Drawer.Portal>
          <Drawer.Overlay
            className="fixed inset-0 z-10 bg-black/30"
            onClick={() => setIsOpen(false)}
          />
          
          <Drawer.Content  className="fixed inset-x-4 bottom-4 z-10 mx-auto p-4 max-w-[361px] overflow-hidden rounded-[36px] bg-[#FEFFFE] outline-none md:mx-auto md:w-full">
            {content}
          </Drawer.Content>
          </Drawer.Portal>
          </Drawer.Root>

        </>
    
     
    </>
  );
}