import {FC, SVGProps} from "react";
import { ReactComponent as ArrowDownIcon } from  '../../assets/icons/arrow-down.svg'
import { ReactComponent as RightArrowIcon } from '../../assets/icons/right-arrow.svg';

export const IconSvg: {[key:string]: FC<SVGProps<SVGSVGElement>>} = {
    ArrowDownIcon: ArrowDownIcon,
    RightArrowIcon: RightArrowIcon
}

export const images:{[key:string] :string} = {
    MattressOne: require('../../assets/images/bed-1.webp'),
    MattressTwo: require('../../assets/images/mattress.webp'),
    Logo: require('../../assets/images/heveya-logo.png'),
    search: require('../../assets/images/search.png'),
    TeekBed: require('../../assets/images/teek-1.webp'),
    TeekTwo: require('../../assets/images/teek-2.avif'),
    bannerSlider1: require('../../assets/images/Website-Main-Banner-Bed-lg.webp'),
    bannerSlider2: require('../../assets/images/teek-1.webp'),
    bannerSlider3: require('../../assets/images/bed-3.webp'),
    productImage1: require('../../assets/images/product-image-1.webp'),
    productImage2: require('../../assets/images/product-image-2.webp'),
}