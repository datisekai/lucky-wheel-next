"use client";
import LuckyWheel from "@/components/LuckyWheel";
import { createElementImage } from "@/utils";

const AlignText = Object.freeze({
  left: "left",
  right: "right",
  center: "center",
});

const overlayImg = new Image()
overlayImg.src = "https://app.woay.vn/w/12f91114-d9c6-45d7-8559-d8af6d09f6ca/assets/5b04cb93-00d2-41fe-b6bd-c0f39595fa90.png"

const props = {
  name: "Workout",
  radius: 0.84,
  pointerAngle: 270,
  itemLabelRadius: 0.93,
  itemLabelRadiusMax: 0.35,
  itemLabelRotation: 180,
  itemLabelAlign: AlignText.left,
  itemLabelColors: ["#fff"],
  itemLabelBaselineOffset: -0.07,
  itemLabelFont: "Amatic SC",
  itemLabelFontSizeMax: 55,
  itemBackgroundColors: [
    "#ffc93c",
    "#66bfbf",
    "#a2d5f2",
    "#515070",
    "#43658b",
    "#ed6663",
    "#d54062",
  ],
  rotationSpeedMax: 500,
  rotationResistance: -100,
  lineWidth: 1,
  lineColor: "#fff",
  size: 720,
  image: createElementImage(
    "https://crazytim.github.io/spin-wheel/examples/themes/img/example-0-image.svg"
  ),
  overlayImage: createElementImage(
    "https://app.woay.vn/w/12f91114-d9c6-45d7-8559-d8af6d09f6ca/assets/5b04cb93-00d2-41fe-b6bd-c0f39595fa90.png"
  ),
  // overlayImage: overlayImg,
  items: [
    {
      image: (
        <img src="https://png.pngtree.com/png-clipart/20230105/original/pngtree-beautiful-pink-close-gift-box-png-image_8872744.png" />
      ),
      imageScale: 0.1,
      label: "Quà 1",
    },
    {
      image: (
        <img src="https://png.pngtree.com/png-clipart/20230105/original/pngtree-beautiful-pink-close-gift-box-png-image_8872744.png" />
      ),
      imageScale: 0.1,
      label: "Quà 2",
    },
    {
      image: (
        <img src="https://png.pngtree.com/png-clipart/20230105/original/pngtree-beautiful-pink-close-gift-box-png-image_8872744.png" />
      ),
      imageScale: 0.1,
      label: "Quà 3",
    },
    {
      image: (
        <img src="https://png.pngtree.com/png-clipart/20230105/original/pngtree-beautiful-pink-close-gift-box-png-image_8872744.png" />
      ),
      imageScale: 0.1,
      label: "Quà 4",
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="bg-[url('@/assets/bg.png')] h-screen">
      <div className="flex flex-col items-center h-full flex-grow">
        <div className="banner-1">
          <a href="#" className="box-img-flex" aria-label="Link quảng cáo">
            <img src="https://app.woay.vn/w/12f91114-d9c6-45d7-8559-d8af6d09f6ca/assets/5054e61a-b4c6-4c3a-b652-266915ca7683.png" />
          </a>
        </div>
        <div className="w-3/4">
          <LuckyWheel props={props} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
