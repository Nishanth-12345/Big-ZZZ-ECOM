import React, { FC } from 'react'
import { images } from '../../constants/image';
import './productStyles.scss';
import { Link } from 'react-router-dom';

interface ProductCardProps {

}

const ProductCard: FC<ProductCardProps> = (props) => {
    const { } = props;

    return (
        <div className='hs-product-card-wrapper'>
            <div className='hs-img-container'>
                <Link to={'/'}>
                    <div className='hs-product-image image-loaded'>
                        <div className='primary'>
                           <img src={images.productImage1} alt='title' />
                        </div>
                        <div className='secondary'>
                           <img src={images.productImage2} alt='title' />
                        </div> 
                        <div className='hs-card-badge'>BUNDLE DEAL</div>
                    </div>
                </Link>
            </div>

            <div className='hs-product-rating-details'>
                <div className='star-rating'>
                    <span>star rating</span>
                </div>
                <div className='title'>
                    <Link to={'/'}>
                        Hevaya Natural Oragnic Latex Mattress 111
                    </Link>
                </div>

                <div className='hs-product-price'>
                    <p>$6488</p>
                    <p>$7288</p>
                    <p>KING</p>
                </div>
                <div className='hs-description'>
                    <p>The key ti superior cloud-like slumber! Made of three natural organic latex layer..</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;