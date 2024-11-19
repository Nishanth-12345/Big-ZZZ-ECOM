import React, { FC } from 'react'
import Header from './header';
import { headerData, MultiHeaderData, slideHeaderData } from '../../data/headerData';

const HeaderContainer:FC = () => {

  

  return (
    <Header
      slideHeaderData={slideHeaderData}
      data={headerData}
      headerMiddleData={MultiHeaderData}
      announcementBar={'now is a announcement bar'}
    />
  )
}

export default HeaderContainer;
