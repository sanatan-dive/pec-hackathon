"use client";
import React, { useEffect, useState } from "react";

import { LandingPageContent } from "@/components/LandingPage";

import axios from "axios";

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(false);


 

  
  return (
    <div className="flex">
      
     
        <LandingPageContent setIsLoading={setIsLoading} />


    </div>
  );
}