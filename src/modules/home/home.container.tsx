import React, { FC } from 'react'
import Home from './home'
import { homeBannerSliderData } from '../../common/data/homeSliderData';

const HomeContainer:FC = () => {
  return (
    <Home 
      bannerSlideData={homeBannerSliderData}
    />
  )
}

export default HomeContainer;
