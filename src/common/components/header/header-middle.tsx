import React, { FC } from 'react'
import { CategorySub, FooterLinks, ImageLinks, MultiHeaderData } from '../../types/header-types';
import { IconSvg, images } from '../../constants/image';
import { Link } from 'react-router-dom';

interface HeaderMiddleProps {
  headerData: MultiHeaderData[];
}

interface SubMenuProps {
  catSub?: CategorySub[],
  imageLinks?: ImageLinks[],
  footers?: FooterLinks[],
}

const SubMenuComponent: FC<SubMenuProps> = (props) => {
  const { catSub, imageLinks, footers } = props;

  return (
    <div className="hs-sub-menu-list-container">
      <div className="container">
        <div className="hs-sub-menu-wrapper">
          {/* First Column */}
          {catSub &&
            catSub.map((item, index) => {
              if (Array.isArray(item.category) ) {

                return (
                  <div className="sub-cat-container first-column">
                    <div key={item.id}>
                      <Link to={item.link} className="sub-cat-title">
                        <img alt={item.title} src={item.image} />
                        <p>{item.title}</p>
                      </Link>
                      <div>
                        {item.category.map((data) => (
                          <div className="hs-link-title" key={data.id}>
                            <Link to={data.title}>{data.title}</Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }})}




              {/* Second Column */ }
              <div className="sub-cat-container second-column">
                {catSub &&
                  catSub.map((item, index) => {
                    if (!Array.isArray(item.category)) {
                      // Handle the single or less category case
                      return (
                        <div key={item.id}>
                          <Link to={item.link} className="sub-cat-title">
                            <img alt={item.title} src={item.image} />
                            <p>{item.title}</p>
                          </Link>
                          <div className="hs-link-title">
                            <Link to={item.category.title}>
                              {item.category.title}
                            </Link>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
              </div>

              {/* Third Column (Image Links) */ }
              <div className="image-links">
                {imageLinks &&
                  imageLinks.map((item) => (
                    <div className="image-box" key={item.id}>
                      <img src={item.image} alt={item.title} />
                      <p>{item.title}</p>
                    </div>
                  ))}
              </div>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          {footers &&
            footers.map((footer) => (
              <div className="footer-item" key={footer.id}>
                <p>{footer.title}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const HeaderMiddle: FC<HeaderMiddleProps> = (props) => {
  const { headerData } = props;
  return (
    <div className='hs-mega-menu-wrapper'>
      <div className='container hs-mega-menu-container'>
        <div className='hs-logo'>
          <img src={images.Logo} />
        </div>
        <div className="hs-mega-menu-parent-list">
          <nav>
            <ul>
              {
                headerData.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link to={`/${item.link}`} className='hs-menu-link'>
                        {item.catTitle}
                        <span className='arrow-indicator'>
                          <IconSvg.ArrowDownIcon />
                        </span>
                      </Link>
                      <div className='overlay'></div>
                      <SubMenuComponent catSub={item.subCat?.catSub}
                        imageLinks={item.subCat?.imageLinks}
                        footers={item.subCat?.footers}
                      />
                    </li>
                  )
                })
              }
            </ul>
          </nav>
        </div>
        <div className="hs-menu-right-content"></div>
      </div>
    </div>
  )
}

export default HeaderMiddle;
