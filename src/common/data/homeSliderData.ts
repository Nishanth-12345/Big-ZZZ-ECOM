import { images } from "../constants/image";

export interface BannerSliderData {
    id: number;
    title: string;
    subTitle: string;
    image: string;
}

export const homeBannerSliderData: BannerSliderData[] = [
    {
        id:3320,
        title:"Dream Builder",
        subTitle:"Customise your bed",
        image: images.bannerSlider1
    },
    {
        id:133,
        title:"Teak Bed Frame Clearance",
        subTitle:"20% OFF Queen Teak Bed Frames",
        image: images.bannerSlider2
    },
    {
        id:286,
        title:"B Corp certified",
        subTitle:"Customise your bed",
        image: images.bannerSlider3
    },
    {
        id:386,
        title:"Dream Builder",
        subTitle:"We are force for good",
        image: images.MattressTwo
    },
]