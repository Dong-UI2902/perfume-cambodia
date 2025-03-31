import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer section">
        {/*<img className="footer__1" src="/assets/img/footer1.png" />*/}
        {/*<img className="footer__2" src="/assets/img/footer2.png" />*/}
        <div className="footer__container container grid">
          <div className="footer__content">
            <a href="/#" className="footer__logo">
              <img src="/LOGO.png" alt="logo" />
            </a>
            {/*<h3 className="footer__title">*/}
            {/*  Thiên đường nước hoa <br /> Tạo nên sự tự tin bạn cần*/}
            {/*</h3>*/}

            {/*<div className="footer__subscribe">*/}
            {/*  <input type="email" placeholder="Enter your email" className="footer__input" />*/}

            {/*  <button className="button button--flex footer__button">*/}
            {/*    Subscribe*/}
            {/*    <i className="ri-arrow-right-up-line button__icon"></i>*/}
            {/*  </button>*/}
            {/*</div>*/}
          </div>
        </div>

        <p className="footer__copy">&#169; PerfumeForYou. All rigths reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
