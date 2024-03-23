import React from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
function page() {
  return (
    <div className='flex-col items-center justify-center w-40'>
      <div className='rounded-md shadow-lg  '>
      
          <Card >
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
              </Card>
        
      </div>
      <div className='rounded-md shadow-lg  '>
      
      <Card >
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
          </Card>
    
  </div>
      <div className='w-full flex flex-col justify-evenly items-center gap-10'>
      {/* <Link href="/drinks" ><div className='h-40 w-40 bg-black text-white' >drinks</div></Link>
      <Link href="/food" ><div className='h-40 w-40 bg-black text-white' > food</div></Link>
      <Link href="/petit_dej" ><div className='h-40 w-40 bg-black text-white' >petit dej</div></Link> */}


      </div>
    </div>
    
  )
}

export default page