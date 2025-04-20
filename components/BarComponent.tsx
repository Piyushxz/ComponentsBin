import { ChevronsRight, CircleAlert, X } from "lucide-react";



interface AlertBarProps {
    variant: "error" | "warning",
    title:string,
    description:string
}




export function BarComponent(props:AlertBarProps){


    return(
        <div className={` w-[90vw]  md:w-[70vw]  ${ props.variant === "error" ? " bg-[#FF0F0F]/12 text-[#FF0F0F]" : " bg-[#FAEDCD]/80 text-[#905600]"} rounded-md`}>
            <div
             
             className={` flex justify-between items-center  gap-[4px] py-[10px] px-[14px]`}>
                <div className="flex gap-2 items-center" >
                    <CircleAlert className=" size-8"/>
                 <div className="flex flex-col  ">
                    <h3 className="text-lg font-bold">{props.title}</h3>
                    <h5 className="text-sm  ">{props.description}</h5>

                </div>
                </div>

                <div className="flex gap-[40px] items-center">
                    <button className={`border ${ props.variant=== 'error' ? " text-[#FF0F0F] bg-[#FF0F0F]/12 border-[#FF0F0F] " : "text-[#905600] bg-[#FAEDCD]/12 border-[#905600]" }  rounded-md  px-4 py-2 flex gap-1 items-center`}>Top up
                    <ChevronsRight className={` ${props.variant === 'error' ? "text-[#FF0F0F]" : "text-[#905600]"} size-6`}/>
                    </button>


                    <div>
                        <X  className={` ${props.variant === 'error' ? "text-[#FF0F0F]" : "text-[#905600]"} size-6`} />
                    </div>
                </div>
            </div>
        </div>
    )
} 