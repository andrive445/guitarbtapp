import React, { Component } from 'react';
 
export default class Carousel extends Component {
  render() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src="/images/banners/demo1.png" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, odio! </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloribus asperiores quod ipsam laudantium sint? Eos voluptas cum architecto provident!</p>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="/images/banners/demo2.png" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, odio! </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloribus asperiores quod ipsam laudantium sint? Eos voluptas cum architecto provident!</p>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="/images/banners/demo3.png" alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, odio! </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloribus asperiores quod ipsam laudantium sint? Eos voluptas cum architecto provident!</p>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="/images/banners/demo4.png" alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, odio! </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloribus asperiores quod ipsam laudantium sint? Eos voluptas cum architecto provident!</p>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="/images/banners/demo5.png" alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, odio! </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloribus asperiores quod ipsam laudantium sint? Eos voluptas cum architecto provident!</p>
                </div>
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
        </div>
    );
  }
}