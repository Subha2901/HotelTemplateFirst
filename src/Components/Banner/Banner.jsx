import React, {useEffect} from "react";
import './Banner.css'

const Banner = () => {

    useEffect(() => {
    const slideContainer = document.querySelector('.slide');

    // Function to move to the next slide
    const moveToNextSlide = () => {
      const items = document.querySelectorAll('.item');
      slideContainer.appendChild(items[0]);
    };

    // Set an interval to auto-slide every 3 seconds (3000 ms)
    const interval = setInterval(moveToNextSlide, 15000000);

    // Event listeners for manual slide navigation
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    const handleNextClick = () => {
      moveToNextSlide();
    };

    const handlePrevClick = () => {
      const items = document.querySelectorAll('.item');
      slideContainer.prepend(items[items.length - 1]);
    };

    next.addEventListener('click', handleNextClick);
    prev.addEventListener('click', handlePrevClick);

    // Cleanup: clear interval and remove event listeners on unmount
    return () => {
      clearInterval(interval);
      next.removeEventListener('click', handleNextClick);
      prev.removeEventListener('click', handlePrevClick);
    };
  }, []);

  return (
    <div className="banner">
      <div className="container">
        <div className="slide">
          <div
            className="item"
            style={{backgroundImage: `url(https://i.ibb.co/qCkd9jS/img1.jpg)`}}
          >
            <div className="content">
              <div className="name">Switzerland</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="item"
            style={{backgroundImage: `url(https://i.ibb.co/jrRb11q/img2.jpg)`}}
          >
            <div className="content">
              <div className="name">Finland</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="item"
            style={{backgroundImage: `url(https://i.ibb.co/NSwVv8D/img3.jpg)`}}
          >
            <div className="content">
              <div className="name">Iceland</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="item"
            style={{backgroundImage: `url(https://i.ibb.co/Bq4Q0M8/img4.jpg)`}}
          >
            <div className="content">
              <div className="name">Australia</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="item"
            style={{backgroundImage: `url(https://i.ibb.co/jTQfmTq/img5.jpg)`}}
          >
            <div className="content">
              <div className="name">Netherland</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="item"
            style={{backgroundImage: `url(https://i.ibb.co/RNkk6L0/img6.jpg)`}}
          >
            <div className="content">
              <div className="name">Ireland</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
        </div>
        <div className="blur-area" style={{opacity: 0}}></div>

        <div className="button">
          <button className="prev">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="next">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
