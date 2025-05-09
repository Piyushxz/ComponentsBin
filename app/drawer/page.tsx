"use client";

import { DefaultView, Key, Phrase, RemoveWallet } from "@/components/DrawerComponents";
import { useMemo, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { motion, AnimatePresence } from "framer-motion";
import { Drawer } from 'vaul';
import { CircleX } from "lucide-react";

export default function FamilyDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const [view,setView] = useState("default")
  const [elementRef, bounds] = useMeasure();
  const previousHeightRef = useRef();


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
  const opacityDuration = useMemo(() => {
    const MIN_DURATION = 0.15;
    const MAX_DURATION = 0.27;
 
    if (!previousHeightRef.current) {
      previousHeightRef.current = bounds.height;
      return MIN_DURATION;
    }
 
    const heightDifference = Math.abs(
      bounds.height - previousHeightRef.current,
    );
    previousHeightRef.current = bounds.height;
 
    const duration = Math.min(
      Math.max(heightDifference / 500, MIN_DURATION),
      MAX_DURATION,
    );
 
    return duration;
  }, [bounds.height]);
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
          
          <Drawer.Content
            asChild
            className="fixed inset-x-4 bottom-4 z-10 mx-auto max-w-[361px] overflow-hidden rounded-[36px] bg-[#FEFFFE] outline-none md:mx-auto md:w-full"
          >
            <motion.div animate={{ height: bounds.height ,
                  transition: {
                    duration: 0.27,
                    ease: [0.25, 1, 0.5, 1],
                  },
            }}
            
            >
              <Drawer.Close asChild>
                <button
                  data-vaul-no-drag=""
                  className="absolute right-8 top-7 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F8F9] text-[#949595] transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-75"
                >
                  <CircleX />
                </button>
              </Drawer.Close>
              <div   ref={elementRef} className="px-6 pb-6 pt-2.5 antialiased">
              <AnimatePresence mode="popLayout" custom={view}>
              <motion.div 
              initial={{opacity:0,scale:0.96}}
              animate={{opacity:1,scale:1}}
              exit={{opacity:0,scale:0.96}}
              transition={{
                duration: opacityDuration,
                ease: [0.26, 0.08, 0.25, 1],
              }}
              key={view}
             >
                {content}
              </motion.div>
              </AnimatePresence>
              </div>


 
            </motion.div>
          </Drawer.Content>
          </Drawer.Portal>
          </Drawer.Root>

        </>
    
     
    </>
  );
}