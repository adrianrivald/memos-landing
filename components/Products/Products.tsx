import Image from "next/image";
import React from "react";
import { ArrowRightUp } from "../Icons";

export function Products() {
  return (
    <div
      id="products"
      className="mt-[250px] bg-primary-500 min-h-[400px] relative py-16"
    >
      <Image
        src="/assets/images/product.png"
        width={870}
        height={357}
        alt="products"
        className="absolute left-1/2 -translate-x-1/2 transform -top-[12rem]"
      />
      <div className="w-full pt-[12rem] flex justify-center text-white text-[32px] font-bold">
        Menyediakan Solusi Untuk Berbagai Praktisi
      </div>
      <div className="flex mt-16 justify-between items-center max-w-[100rem] mx-auto px-32">
        <div className="bg-white rounded-md p-8">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4 w-3/4">
              <Image
                src="/assets/images/products/memos.png"
                width={112}
                height={32}
                alt="memos"
              />

              <div>Sistem Encounter Rumah Sakit</div>
            </div>
            <ArrowRightUp />
          </div>
        </div>
        <div className="bg-white rounded-md p-8">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4 w-3/4">
              <Image
                src="/assets/images/products/notes.png"
                width={112}
                height={32}
                alt="notes"
              />

              <div>Sistem Encounter Rumah Sakit</div>
            </div>
            <ArrowRightUp />
          </div>
        </div>
        <div className="bg-white rounded-md p-8">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4 w-3/4">
              <Image
                src="/assets/images/products/clinix.png"
                width={112}
                height={32}
                alt="clinix"
              />

              <div>Sistem Encounter Rumah Sakit</div>
            </div>
            <ArrowRightUp />
          </div>
        </div>
        <div className="bg-white rounded-md p-8">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4 w-3/4">
              <Image
                src="/assets/images/products/lamina.png"
                width={112}
                height={32}
                alt="lamina"
              />

              <div>Sistem Encounter Rumah Sakit</div>
            </div>
            <ArrowRightUp />
          </div>
        </div>
      </div>
    </div>
  );
}
