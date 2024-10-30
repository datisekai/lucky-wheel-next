'use client'
import {useWheel} from "@/hooks/useWheel";
import {createElementImage} from "@/utils";
import {FC} from "react";

const AlignText = Object.freeze({
    left: 'left',
    right: 'right',
    center: 'center',
});


const props = {
    name: 'Workout',
    radius: 0.84,
    pointerAngle: 0,
    itemLabelRadius: 0.93,
    itemLabelRadiusMax: 0.35,
    itemLabelRotation: 180,
    itemLabelAlign: AlignText.left,
    itemLabelColors: ['#fff'],
    itemLabelBaselineOffset: -0.07,
    itemLabelFont: 'Amatic SC',
    itemLabelFontSizeMax: 55,
    itemBackgroundColors: ['#ffc93c', '#66bfbf', '#a2d5f2', '#515070', '#43658b', '#ed6663', '#d54062'],
    rotationSpeedMax: 500,
    rotationResistance: -100,
    lineWidth: 1,
    debug:true,
    lineColor: '#fff',
    image: createElementImage("https://crazytim.github.io/spin-wheel/examples/themes/img/example-0-image.svg"),
    overlayImage: createElementImage("https://crazytim.github.io/spin-wheel/examples/themes/img/example-0-overlay.svg"),
    items: [
        {
            // image: createElementImage("https://png.pngtree.com/png-clipart/20230105/original/pngtree-beautiful-pink-close-gift-box-png-image_8872744.png"),
            imageScale: 0.1,
            label: "Quà 1",
            backgroundColor:"blue"
        },
        {
            // image: createElementImage("https://png.pngtree.com/png-clipart/20230105/original/pngtree-beautiful-pink-close-gift-box-png-image_8872744.png"),
            imageScale: 0.1,
            label: "Quà 1"
        },
        {
            // image: createElementImage("https://png.pngtree.com/png-clipart/20230105/original/pngtree-beautiful-pink-close-gift-box-png-image_8872744.png"),
            imageScale: 0.1,
            label: "Quà 1"
        },
        {
            // image: createElementImage("https://png.pngtree.com/png-clipart/20230105/original/pngtree-beautiful-pink-close-gift-box-png-image_8872744.png"),
            imageScale: 0.1,
            label: "Quà 1"
        },

    ],

}

const LuckyWheel: FC = () => {
    const { wheel, wheelComponent } = useWheel({
        initialProps: props as any,
    });

    return (
        <div className="h-full w-full">
            <div className="w-full h-full">
                <button
                    className="absolute top-0 left-0 z-10"
                    onClick={() => {
                        wheel!.spinToItem(
                            1,
                            4000,
                            true,
                            5
                        );
                    }}
                >
                    Spin!
                </button>
            </div>
            <div className="w-full h-full absolute top-0 left-0">
                {wheelComponent}
            </div>
        </div>
    );
};

export default LuckyWheel;