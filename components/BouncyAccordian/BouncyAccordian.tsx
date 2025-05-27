"use client"
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import useMeasure from "react-use-measure";
import {AnimatePresence, motion} from "framer-motion"

export default function BouncyAccordian(){

    const [ans,showAns] = useState(false)
    const [ref,bounds] = useMeasure()
    return(
        <AnimatePresence >
        <motion.div animate={{height:bounds.height}} transition={{type:'spring',bounce:0.5}}


        
        className="w-[500px] flex  flex-col items-center px-4 py-4 border rounded-md bg-black ">
            <div ref={ref}
             className="w-[100%]">
            <div className="flex justify-between ">
            <h1 className="text-sm text-white ">What does lifetime access Mean?</h1>
            <PlusIcon onClick={()=>showAns(a =>!a)} className="size-4 text-white" />
            </div>


            {
                ans &&
                <h3 className="text-sm text-white flex justify-center pt-6 pb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quidem enim sit earum rem ea repudiandae totam, incidunt reiciendis quaerat iste, iusto cumque aut quas sed velit! Libero, vitae nemo?
                </h3>
            }
            </div>
            
            
        </motion.div>
        </AnimatePresence>
    )
}