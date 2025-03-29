
"use client"
import { LandingPageContent } from '@/components/land'
import React, { useState } from 'react'

function page() {
  const [isLoading,setIsLoading] = useState(false)
  return (
    <div>

      <LandingPageContent setIsLoading={setIsLoading} />
    </div>
  )
}

export default page