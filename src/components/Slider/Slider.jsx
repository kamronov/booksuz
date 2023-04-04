import React from 'react'
import './Slider.scss'
import slider from '../../assets/img/slider.png'
function Slider() {
    return (
        <div className='slider'>
            <div className="slider__inner container">
            <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-indicators slider__indi">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slider} className="d-block w-100" alt="..." />
                        <div className="slider__title d-none d-md-block">
                            <h2>Temuriylar davri adabiyoti</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider} className="d-block w-100" alt="..." />
                        <div className=" slider__title d-none d-md-block">
                            <h2>Temuriylar davri adabiyoti</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider} className="d-block w-100" alt="..." />
                        <div className="slider__title d-none d-md-block">
                            <h2>Temuriylar davri adabiyoti</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider} className="d-block w-100" alt="..." />
                        <div className="slider__title d-none d-md-block">
                            <h2>Temuriylar davri adabiyoti</h2>
                        </div>
                    </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
            </div>
        </div>
    )
}

export default Slider