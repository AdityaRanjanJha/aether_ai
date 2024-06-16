'use client';

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({weight: "600",subsets:["latin"]});

const Sidebar = () => {
    return ( 
        <div className="space-y-4 py-4 flex flex-col h-full bg-gray-300 text-white">
           <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex pl-3 mb-14 items-center">
                <div className="relative w-16 h-16 mr-4">
                    <Image 
                        fill 
                        alt='Logo' 
                        src="/logo.png"
                        layout="fill"
                    />
                </div>
                <h1 className="text-gray-500 tracking-[5px] font-bold">Aether Ai</h1>
                </Link>
           </div>
        </div>
     );
}
 
export default Sidebar;