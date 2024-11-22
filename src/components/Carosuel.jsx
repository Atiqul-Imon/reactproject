

import image1 from "../assets/outrun01.jpg"

import image2 from "../assets/outrun02.jpg"
import image3 from "../assets/outrun03.jpg"





export default function Carousel() {
    return (
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={image1}
                className="d-block w-100"
                alt="First Slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src={image2}
                className="d-block w-100"
                alt="Second Slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src={image3}
                className="d-block w-100"
                alt="Third Slide"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
  