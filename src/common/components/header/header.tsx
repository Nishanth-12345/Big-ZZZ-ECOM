import React, { FC, useEffect, useState } from 'react'
import { HeaderData } from '../../types/header-types'
import { MultiHeaderData } from '../../data/headerData';
import { Link } from 'react-router-dom';
import './headerStyles.scss';
import HeaderMiddle from './header-middle';

interface HeaderProps {
  slideHeaderData: HeaderData[];
  data: HeaderData[];
  headerMiddleData: MultiHeaderData[];
  announcementBar: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { data, slideHeaderData, headerMiddleData, announcementBar } = props;

  const [isVisible, setIsVisible] = useState(true); // Tracks bar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Logic: Hide on scrolling down, show on scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        // Scrolling up or near the top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY); // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);


  return (
    <header>
      <div className='header-bar'>
        <div className='container header-container'>
          <div className='slide-header'>
            <ul>
              {
                slideHeaderData.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link to={`/${item.title}`}>{item.title}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className='right-header'>
            <nav>
              <ul>
                {
                  data.map((item) => {
                    return (
                      <li key={item.id} className='hs-menu-link-item'>
                        <Link to={`/${item.title}`}>{item.title}

                        </Link>
                        {item.childItems ? <div className='menu'>
                          <div className='menu-dropdown'>
                            <ul className='menu-dropdown-list'>
                              {
                                item.childItems.map((sel) => {
                                  return (

                                    <li key={sel.id} className='menu-dropdown-list-item'>
                                      <Link to={`/${item.title}/${sel.title}`}>{sel.title}</Link>
                                    </li>

                                  )
                                })
                              }
                            </ul>
                          </div>
                          <div className="menu-overlay"></div>
                        </div> : null}
                      </li>
                    )
                  })
                }
              </ul>
            </nav>
          </div>
        </div>

      </div>
      <HeaderMiddle headerData={headerMiddleData} />
      <div className={`announcement-bar ${isVisible ? "show" : "hide"}`}>
        <Link to={`/link`}>
          <div>
            <p>Get 20% off on your first order! Use code: WELCOME20</p>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header;
