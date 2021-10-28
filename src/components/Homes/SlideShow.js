import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import {useContext} from 'react'
import {useEffect} from 'react'
import { ADVERTISEMENT} from '../../common/contants'
import { BannerContext } from '../../contexts/BannerContext'

const SlideShow = () => {

    
    
    const {getBanners, bannerState} = useContext(BannerContext);

    useEffect (async () => {
        try{
            await getBanners();
        }
        catch(err)
        {
            console.log(err.message);

        }
    }, [])
    

    return (
        <>
        <div className = "d-flex">
            <Carousel className = "slideShow">
                {bannerState.banners.map(banner => (
                    <Carousel.Item interval={5000} className = "h-100">
                        <img key = {banner._id}
                        className="mySlide"
                        src= {banner.image}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            <Image className = "myAd" src= {ADVERTISEMENT} fluid />
        </div>
        </>
    )
}

export default SlideShow
