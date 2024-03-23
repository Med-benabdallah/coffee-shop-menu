"use client";

import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";

import { Separator } from "../ui/separator";

export function DrinksMenu() {
  return (
    <div>
      <ScrollArea className="h-screen w-screen rounded-md border">
        <div>
          <h1 className="mx-5 my-5 font-sans text-2xl font-bold">
            COFFEE & CO
          </h1>
          <div className="mx-1 h-2 w-4/5 rounded-xl bg-black"></div>
          <div className="grid grid-cols-5 gap-4">
            <div className="mx-5 my-5 text-base font-bold">Expresse</div>
            <div></div>
            <div></div>{" "}
            <div className="mx-5 my-5 w-24 text-base font-bold">2.9 DT</div>
          </div>

          <Separator />
        </div>

        <div>
          <h1 className="mx-5 my-5 font-sans text-2xl font-bold">
            FRAPPUCIONO
          </h1>
          <div className="mx-1 h-2 w-4/5 rounded-xl bg-black"></div>
        </div>
        <div>
          <h1 className="mx-5 my-5 font-sans text-2xl font-bold">TEA</h1>
          <div className="mx-1 h-2 w-4/5 rounded-xl bg-black"></div>
        </div>
        <div>
          <h1 className="mx-5 my-5 font-sans text-2xl font-bold">
            HOT CHOCOLATE
          </h1>
          <div className="mx-1 h-2 w-4/5 rounded-xl bg-black"></div>
        </div>
        <div>
          <h1 className="mx-5 my-5 font-sans text-2xl font-bold">SMOOTHIES</h1>
          <div className="mx-1 h-2 w-4/5 rounded-xl bg-black"></div>
        </div>
        <div>
          <h1 className="mx-5 my-5 font-sans text-2xl font-bold">BEVERAGE</h1>
          <div className="mx-1 h-2 w-4/5 rounded-xl bg-black"></div>
        </div>
        <div className="">
          <div>
            <h1 className="mx-5 my-5 font-sans text-2xl font-bold">
              COCKTAILS
            </h1>
            <h4 className="text-md">(classic)</h4>
          </div>

          <div className="mx-1 h-2 w-4/5 rounded-xl bg-black"></div>
        </div>
        <div>
          <h1 className="mx-5 my-5 font-sans text-2xl font-bold">FORMULA</h1>
          <div className="mx-1 h-2 w-4/5 rounded-xl bg-black"></div>
        </div>
        <div>
          <h1 className="mx-5 my-5 font-sans text-2xl font-bold">MOJITO</h1>
          <div className="mx-1 h-2 w-4/5 rounded-xl bg-black"></div>
        </div>
      </ScrollArea>
    </div>
  );
}
