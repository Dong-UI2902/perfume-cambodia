import React, { useEffect, useState } from 'react';
import About from '../components/About/About';
import Step from '../components/Step/Step';
import Questions from '../components/Question/Questions';
import Contact from '../components/Contact/Contact';
import Product from '../components/Product/Product';
import { useStore } from '../context';
import CarouselProd from '../components/Product/Carousel/CarouselProd';
import { ProductProps } from '../context/types';
import Christmas from 'components/Events/Christmas';
// import Header from 'components/Header';
import Tet from 'components/Events/Tet';
import Header from 'components/Header';
import { isMobile } from 'react-device-detect';
import CountdownTimer from 'components/CountDown/CountdownTimer';

const Home = () => {
  const { products } = useStore();
  const [hot, setHot] = useState<ProductProps[]>([]);
  const [newProds, setNewProds] = useState<ProductProps[]>([]);
  useEffect(() => {
    document.title = 'PerfumeForYou - Thiên đường nước hoa';
  }, []);

  useEffect(() => {
    setHot(products.filter((item) => item.isHot));
    setNewProds(products.filter((item) => item.isNew));
  }, [products]);

  // const today = new Date(+new Date().setHours(0, 0, 0, 0) + 86400000 * 2);
  // today change to 2
  // const today = new Date();
  // const dateTimeAfterThreeDays = today.getTime();

  return (
    <div>
      <main className="main">
        <section className="home" id="home">
          {/* <Christmas /> */}
          {/* <Tet /> */}
          <Header />
        </section>
        {/* <div>
          <div
            style={{ background: '#C12A26', width: 'fit-content', margin: '0 auto' }}
            className="sales-box"
          >
            <img style={{ width: '100%' }} src="/assets/img/lucky/home.jpg" />
            <section
              className="sales"
              style={{ backgroundImage: `url('/assets/img/tet/pn-tet.png')` }}
            >
              <div className="sales__title">ƯU ĐÃI SINH NHẬT</div>
              <CountdownTimer targetDate={dateTimeAfterThreeDays} />
            </section>
          </div>
        </div> */}

        <div>
          <section className="product section container">
            <h2 className="section__title-center">លក់ដាច់បំផុត</h2>
            <div className="product__carousel">
              <CarouselProd products={hot} />
            </div>
          </section>
        </div>
        <div>
          <section className="product section container">
            <h2 className="section__title-center">ផលិតផលមកថ្មី</h2>
            <div className="product__carousel">
              <CarouselProd products={newProds} />
            </div>
          </section>
        </div>
        <About />
        <div>
          <section className="product section container" id="products">
            <div className="section">
              <h2 className="section__title-center">ទឹកអប់បុរស</h2>
              <div className="product__container grid">
                {products?.map((item) => {
                  if (item.gender === 'បុរស') {
                    return <Product {...item} key={item.id} />;
                  }
                })}
              </div>
            </div>
            <div className="section">
              <h2 className="section__title-center">ទឹកអប់ស្ត្រី</h2>
              <div className="product__container grid">
                {products?.map((item) => {
                  if (item.gender === 'នារី') {
                    return <Product {...item} key={item.id} />;
                  }
                })}
              </div>
            </div>
            <div className="section">
              <h2 className="section__title-center">ទឹកអប់សម្រាប់ទាំងពីរភេទ</h2>
              <div className="product__container grid">
                {products?.map((item) => {
                  if (item.gender === 'សម្រាប់ទាំងបុរសនិងនារី') {
                    return <Product {...item} key={item.id} />;
                  }
                })}
              </div>
            </div>
            {/* <div className="section">
              <h2 className="section__title-center">Tất Cả Sản Phẩm</h2>

              <p className="product__description">
                Đây là một số sản phẩm tại cửa hàng, tất cả đều là hàng Authentic được chúng tôi xem
                xét và kiểm duyệt kĩ lưỡng. Mua và tận hưởng chất lượng tốt nhất từ chúng tôi.
              </p>

              <div className="product__container grid">
                {products?.map((item) => (
                  <Product {...item} key={item.id} />
                ))}
              </div>
            </div> */}
          </section>
        </div>
        <Step />
        <Questions />
      </main>
    </div>
  );
};

export default Home;
