"use client";
import { useWheel } from "@/hooks/useWheel";
import { createElementImage } from "@/utils";
import { FC } from "react";
import { Wheel } from "spin-wheel";

const AlignText = Object.freeze({
  left: "left",
  right: "right",
  center: "center",
});

const randomizeNumber = (number: number) => Math.floor(Math.random() * number);

const LuckyWheel: FC<any> = ({ props }: any) => {
  const { wheel, wheelComponent } = useWheel({
    initialProps: props as any,
  });

  console.log(props, "wheelComponent");
  const winningItem = "quà 4";
  
  return (
    <div className="w-full h-full">
      {/* <div className="w-full flex">
        <button
          className="top-0 left-0 z-10"
          onClick={() => {
            wheel!.spinToItem(1, 4000, false, 5);
          }}
        >
          Spin!
        </button>
      </div> */}
      <div className="w-full h-full cursor-pointer">
        {wheelComponent}
      </div>
    </div>
  );
};

export default LuckyWheel;
