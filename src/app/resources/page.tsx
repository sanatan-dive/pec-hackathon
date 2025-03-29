"use client";
import React from "react";

import Landing from "@/components/LandingPage";



export default function LandingPage() {
   
  return (
    <div className="flex">
       <div className="relative flex h-screen w-full overflow-hidden bg-gradient-to-br from-[#03045e] via-[#023e8a] to-[#0077b6]">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
     
        <Landing />
</div>

    </div>
  );
}