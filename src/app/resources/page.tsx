"use client";
import React, {  useState } from "react";

import { LandingPageContent } from "@/components/LandingPage";



export default function LandingPage() {
   // eslint-disable-next-line 
  const [isLoading, setIsLoading] = useState(false);


 

  
  return (
    <div className="flex">
      
     
        <LandingPageContent setIsLoading={setIsLoading} />


    </div>
  );
}