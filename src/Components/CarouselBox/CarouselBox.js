import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CarouselBox = () => {
    return (
        <Carousel className="main-carousel pt-4 col-12">
            <Carousel.Item>
                <img
                className="w-100 d-none d-sm-block"
                src="/assets/images/3.jpg"
                alt="First slide"
                />
                <img
                className="w-100block d-sm-none"
                src="/assets/images/3-mob.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="w-100 d-none d-sm-block"
                src="/assets/images/2.jpg"
                alt="Second slide"
                />
                <img
                className="w-100 d-block d-sm-none"
                src="/assets/images/2-mob.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="w-100 d-none d-sm-block"
                src="/assets/images/1.jpg"
                alt="Third slide"
                />
                <img
                className="w-100 d-block d-sm-none"
                src="/assets/images/1-mob.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
    )
}

export default CarouselBox