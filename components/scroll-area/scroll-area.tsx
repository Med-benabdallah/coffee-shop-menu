import React from 'react'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from 'next/link'
import { Separator } from '../ui/separator'
export  function ScrollAreaBar() {
  return (
    <div className='w-screen'>
        <ScrollArea className="w-screen whitespace-nowrap rounded-md border h-20">
        <div className='flex items-center'>
            <div className="shadow-md">
            <Link href="/drinks">
                <Card className="w-auto h-1">
                    <CardHeader>
                        <CardTitle className='text-[20px]'>Drinks</CardTitle>
                    </CardHeader>
                    </Card>
                </Link>
            </div>
                <div className="">
                <Link href="/sweets">
                <Card className="w-auto h-1">
                    <CardHeader>
                        <CardTitle className='text-[20px]'>Sweets</CardTitle>
                    </CardHeader>
                    </Card>
                </Link>
                </div>
                <div className="">
            <Card className="w-auto h-1">
                <CardHeader>
                <CardTitle className='text-[20px]'>Drinks</CardTitle>
                </CardHeader>
                </Card>
                </div>
                <div className="">
            <Card className="w-auto h-1">
                <CardHeader>
                <CardTitle className='text-[20px]'>Drinks</CardTitle>
                </CardHeader>
                </Card>
                </div>
                <div className="">
            <Card className="w-auto h-1">
                <CardHeader>
                <CardTitle className='text-[20px]'>Drinks</CardTitle>
                </CardHeader>
                </Card>
                </div>
                <div className="">
            <Card className="w-auto h-1">
                <CardHeader>
                <CardTitle className='text-[20px]'>Drinks</CardTitle>
                </CardHeader>
                </Card>
                </div>
                
                
        </div>
        <ScrollBar orientation="horizontal" />
        </ScrollArea>
    </div>
  )
}
