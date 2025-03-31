import React from 'react';
import Carousel from 'react-multi-carousel';
import CountdownTimer from './CountDown/CountdownTimer';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    slidesToSlide: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const Header = () => {
  // today change to 2
  const today = new Date();
  const date2 = new Date('12/1/2024');
  const differenceInTime = date2.getTime() - today.getTime();

  const DifferenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
  const today1 = new Date(+new Date().setHours(0, 0, 0, 0) + 86400000 * (DifferenceInDays + 1));

  const dateTimeAfterThreeDays = today1.getTime();
  return (
    <>
      <div className="home__container container grid">
        {/* <Carousel
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          transitionDuration={500}
          containerClass="carousel-container"
          arrows={false}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="home__slide"
        > */}
        {/* <img src="/assets/img/halloween.jpg" alt="" className="home__img" />
              <img src="/assets/img/woman.jpg" alt="" className="home__img" /> */}
        {/* <img src="/assets/img/8-3.png" alt="" className="home__img" />
          <img src="/assets/img/voucher.png" alt="" className="home__img" />
          <img src="/assets/img/4-years-banner.jpg" alt="" className="home__img" /> */}
        {/* </Carousel> */}
        {/* <img src="/assets/img/lucky/web3.png" alt="" className="home__img" /> */}
        <div className="home__box">
          <img src="/assets/img/8-3.png" alt="" className="home__img" />
          <div className="black-friday">
            <div
              style={{ background: '#C12A26', width: 'fit-content', margin: '0 auto' }}
              className="sales-box"
            ></div>
          </div>
        </div>

        <div className="home__data">
          {/* <h1 className="home__title">
                PERFUME for you <br /> Tạo nên sự tự tin bạn cần
              </h1> */}
          <img src="/LOGO.png" alt="" className="home__title-img" />
          <p className="home__description">
            ទឹកអប់បង្កើតបុគ្គលិកលក្ខណៈជាក់លាក់ដែលធ្វើឱ្យអ្នកដទៃស្គាល់ក្លិនរបស់អ្នក។
          </p>
          {/* <a href="#products" className="button button--flex">
            Mua ngay <i className="ri-arrow-right-down-line button__icon" />
          </a> */}
        </div>

        <div className="home__social">
          <span className="home__social-follow">Follow Us</span>

          <div className="home__social-links">
            <a
              href="https://www.facebook.com/perfumeforyouvn.q9"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-facebook-fill" />
            </a>
            <a
              href="https://www.instagram.com/perfumeforyou.vn"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-instagram-line" />
            </a>
            <a
              href="https://www.tiktok.com/@perfumeforyou.vn"
              target="_blank"
              className="home__social-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-tiktok"
                viewBox="0 0 16 16"
              >
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
