import Link from "next/link";
import {RiArrowRightUpLine} from "@remixicon/react"
 function Button ({text ,className}){
    return (
        <>
            <Link href="#" className={`px-7 py-2 flex items-center gap-4 rounded-full  text-2xl font-medium text-orange border border-ogange-500 font-geist lg:text-3xl lg:px-6 lg:py-2 ${className}`}>{text} <span><RiArrowRightUpLine/></span> </Link>
        </>
    )
 }

 export default Button;