import React, { FC, useEffect, useRef, useState } from 'react';
import { headerData, MultiHeaderData } from '../../common/data/headerData';
import './homeStyles.scss';
import { BannerSliderData } from '../../common/data/homeSliderData';
import ProductCard from '../../common/components/productCard/productCard';

interface HomeProps {
  bannerSlideData: BannerSliderData[];
}

const Home: FC<HomeProps> = ({ bannerSlideData }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentItem, setCurrentItem] = useState<number>(0);
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [dragDistance, setDragDistance] = useState<number>(0);

  const totalSlides = bannerSlideData.length;

  useEffect(() => {
    setCurrentItem(bannerSlideData[currentIndex].id);
  }, [currentIndex, bannerSlideData]);

  useEffect(() => {
    if (sliderRef.current) {
      const firstSlide = sliderRef.current.querySelector('.hs-home-slider-img') as HTMLElement;
      if (firstSlide) {
        setSlideWidth(firstSlide.clientWidth);
      }
    }
  }, []);

  useEffect(() => {
    // Automatic slider transition
    const interval = setInterval(() => {
      if (!dragging) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides, dragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStartX(e.clientX);
    setDragDistance(0);
  };
  console.log(startX, 'startx-1');

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;

    const diff = e.clientX - startX;
    console.log('x',e.clientX, startX, 'startX-2', diff, 'dragdis');
    setDragDistance(diff);
  };

  const handleMouseUp = () => {
    if (!dragging) return;
    console.log(slideWidth / 4,'width/4')
    // Determine slide transition based on drag distance
    if (Math.abs(dragDistance) > slideWidth / 4) {
        // Dragged to the left -> Move to next slide
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        console.log(true,'true');
    }

    const translate = -(currentIndex * slideWidth) + dragDistance;
    console.log(`-${currentIndex * slideWidth}px + ${dragging ? dragDistance : 0}px`,'translate');
    console.log(translate,'total translate');

    setDragging(false);
    setDragDistance(0);
  };

  return (
    <div className="home">
      <div className="hs-slider-wrapper">
        <div
          className="hs-slider-container"
          ref={sliderRef}
          style={{
            transform: `translateX(calc(-${currentIndex * slideWidth}px + ${dragging ? dragDistance : 0}px))`,
            transition: dragging ? 'none' : 'transform 0.2s ease-in-out',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} // Handle drag ending outside the slider
        >
          {bannerSlideData.map((item) => (
            <div className="hs-home-slider-img" key={item.id} data-title={item.id}>
              <div className="overlay"></div>
              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
        <div className="bottom-indicators-container">
          <div className="bottom-indicators">
            {bannerSlideData.map((item) => (
              <div
                key={item.id}
                className={`slide-indicator ${item.id === currentItem ? 'active' : ''}`}
              >
                <div className="indicator-dot"></div>
                <div className="details">
                  <p>{item.title}</p>
                  <h2>{item.subTitle}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
         <div className='hs-product-list-slider'>
           <ProductCard />
         </div>
      </div>
    </div>
  );
};

export default Home;
