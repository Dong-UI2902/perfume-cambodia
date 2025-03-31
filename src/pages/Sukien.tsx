import React from 'react';
import '../styles/mcm.scss';
import '../styles/Sukien.scss';
import { useStore } from 'context/Provider';
import { FormatMoney } from 'Helper/Helper';

// const ListSP = [
//   {
//     id: '1Zlt-bCbCvG-gtq6Rs3is9BmzfCuhxqcn',
//     name: 'Dior Sauvage EDP',
//     price: '1.250.000₫',
//     salePrice: '2.850.000₫',
//     img: '/assets/img/chiet/sauvage.jpg',
//     capacity: '100ml'
//   },
//   {
//     id: '1a36F7XElawoOLypKmcG_NgJ0KE2bMZhz',
//     name: 'YSL Y Eau de Parfum',
//     price: '1.350.000₫',
//     salePrice: '2.950.000₫',
//     img: '/assets/img/chiet/ysl-y.jpg',
//     capacity: '100ml'
//   },
//   {
//     id: '1_UIKpQ9WjFcg88GfVgjiiMEj6UkA4O7D',
//     name: 'Bleu De Chanel Parfum',
//     price: '1.650.000₫',
//     salePrice: '3.300.000₫',
//     img: '/assets/img/chiet/bleu.jpg',
//     capacity: '100ml'
//   },
//   {
//     id: '1OPSwaM8uzBxHc5Ch2zl5lpT0guHndxgG',
//     name: 'Acqua di Gio (trắng)',
//     price: '1.090.000₫',
//     salePrice: '2.450.000₫',
//     img: '/assets/img/chiet/gio.jpg',
//     capacity: '100ml'
//   },
//   {
//     id: '15-zHdIIsUvI_5nqeRsxdqH6p_pxILmhY',
//     name: 'Delina EDP',
//     price: '2.100.000₫',
//     salePrice: '4.450.000₫',
//     img: '/assets/img/chiet/delina.jpg',
//     capacity: '75ml'
//   },
//   // {
//   //   id: '1MLWN_RSMstKJzi_DlgW6XJJUJN9_e0OE',
//   //   name: 'Le Labo Another 13',
//   //   price: '2.350.000₫',
//   //   salePrice: '4.900.000₫',
//   //   img: '/assets/img/chiet/lebo13.jpg',
//   //   capacity: '100ml'
//   // },
//   {
//     id: '1fQZm2lxDI3AVVnEpVcWmx9s8z4nwhh-s',
//     name: 'Le Labo Rose 31',
//     price: '2.350.000₫',
//     salePrice: '4.900.000₫',
//     img: '/assets/img/chiet/lebo31.jpg',
//     capacity: '100ml'
//   },
//   {
//     id: '11JTjtYq7MtY8xo3eX2ZUxd89rwtyU_FO',
//     name: 'Tom Ford Ombré Leather',
//     price: '2.050.000₫',
//     salePrice: '4.200.000₫',
//     img: '/assets/img/chiet/tomford.jpg',
//     capacity: '100ml'
//   },
//   {
//     id: '1HvWnnffB2ku2EAzk_42zo8o2uJBNTzXP',
//     name: 'Montblanc Signature',
//     price: '1.100.000₫',
//     salePrice: '2.450.000₫',
//     img: '/assets/img/chiet/blanc.jpg',
//     capacity: '90ml'
//   },
//   {
//     id: '1QDgjYg87-li6GFTG0F5VhhI0d4NK8461',
//     name: 'Narciso Rodriguez Pure Musc For Her',
//     price: '1.200.000₫',
//     salePrice: '2.950.000₫',
//     img: '/assets/img/chiet/puremusc.jpg',
//     capacity: '100ml'
//   },
//   {
//     id: '1NjwkUN5eJtlXKGFdJfms8is35vtS3tvi',
//     name: 'Chanel Coco Mademoiselle Intense',
//     price: '1.250.000₫',
//     salePrice: '2.750.000₫',
//     img: '/assets/img/chiet/coco.jpg',
//     capacity: '100ml'
//   },
//   {
//     id: '1Q2Bhi-MTUnN9aLWUZt2De6BwG04OkIzN',
//     name: 'Chanel No 5 Eau de Parfum',
//     price: '1.250.000₫',
//     salePrice: '2.800.000₫',
//     img: '/assets/img/chiet/no5.jpg',
//     capacity: '100ml'
//   },
//   {
//     id: '1k7sLDnkxqJ2EY8DfQSm7jNfBzziP2I_s',
//     name: "Chanel NoChanel No 5 L'eau",
//     price: '1.350.000₫',
//     salePrice: '2.950.000₫',
//     img: '/assets/img/chiet/leau.jpg',
//     capacity: '100ml'
//   },
//   {
//     id: '1hu-3qcYse7SbCLRm8H_q0I8YpYgu1MZ4',
//     name: 'Dior Joy EDP',
//     price: '1.250.000₫',
//     salePrice: '2.650.000₫',
//     img: '/assets/img/chiet/joy.jpg',
//     capacity: '90ml'
//   },
//   // {
//   //   name: 'Le Labo Another 13(100ml)',
//   //   price: '1.590.000₫',
//   //   salePrice: '3.999.000₫',
//   //   img: '/assets/img/chiet/lebo13.jpg'
//   // },
//   {
//     id: '1tgvKcEkKrqxCdLK3rt8Ln-ufiaZpDmyc',
//     name: 'Versace Eros For Men',
//     price: '1.150.000₫',
//     salePrice: '2.150.000₫',
//     img: '/assets/img/chiet/eros.jpg',
//     capacity: '100ml'
//   },
//   {
//     id: '1mMtCJ6fHoKnt9EwwH6S9t9fOPSMHDuC6',
//     name: 'Versace Eros For Men EDP',
//     price: '1.200.000₫',
//     salePrice: '2.150.000₫',
//     img: '/assets/img/chiet/eros-edp.jpg',
//     capacity: '100ml'
//   },
//   {
//     id: '1Sidu9uZsvpGSJvoHydw3qfcLiDz8WDKe',
//     name: 'Narciso EDP Ambrée',
//     price: '1.200.000₫',
//     salePrice: '2.850.000₫',
//     img: '/assets/img/chiet/ambree.jpg',
//     capacity: '90ml'
//   },
//   {
//     id: '1kShfHwUWItwFZxzLktEWqbEpF1SkX3aJ',
//     name: 'Narciso Rodriguez Fleur Musc for Her',
//     price: '1.200.000₫',
//     salePrice: '2.850.000₫',
//     img: '/assets/img/chiet/fleur.jpg',
//     capacity: '100ml'
//   },
//   {
//     id: '1nhghpxFTh9Sa7np4pRKZ71E7gxeYQtn0',
//     name: 'Narciso Rodriguez For Her EDP',
//     price: '1.200.000₫',
//     salePrice: '2.850.000₫',
//     img: '/assets/img/chiet/narhong.jpg',
//     capacity: '100ml'
//   },
//   {
//     id: '1kcSKAJwfcmcwaI8_9WQMGqRYkExpT2S1',
//     name: 'Narciso Rodriguez Narciso Rouge',
//     price: '1.200.000₫',
//     salePrice: '2.850.000₫',
//     img: '/assets/img/chiet/rouge.jpg',
//     capacity: '90ml'
//   },
//   {
//     id: '1V3FQ-49wO9mYqKAhEq-jeJyEdWOCl_hu',
//     name: 'Gucci Bloom EDP For Her',
//     price: '1.300.000₫',
//     salePrice: '2.950.000₫',
//     img: '/assets/img/chiet/bloom.jpg',
//     capacity: '100ml'
//   },
//   {
//     id: '1ZazjwAHpShzzjvWureLm_7cfmEHX9jgz',
//     name: 'Gucci Bloom Ambrosia di Fiori EDP',
//     price: '1.350.000₫',
//     salePrice: '3.250.000₫',
//     img: '/assets/img/chiet/gucci-do.jpg',
//     capacity: '100ml'
//   },
//   {
//     id: '1usviUWVJWMKWbuko3lk1-hxAe8Ng-c-R',
//     name: 'Gucci Bloom Eau de Parfum Intense',
//     price: '1.350.000₫',
//     salePrice: '3.250.000₫',
//     img: '/assets/img/chiet/gucci-den.jpg',
//     capacity: '100ml'
//   },
//   // {
//   //   id: '1oqoGd4WkbnbBKxTi-ytUFadMpfzu8nBX',
//   //   name: 'MCM Eau de Parfum',
//   //   price: '1.100.000₫',
//   //   salePrice: '3.250.000₫',
//   //   img: '/assets/img/chiet/mcm.jpg',
//   //   capacity: '75ml'
//   // },
//   // {
//   //   name: 'Narciso EDP Cristal(90ml)',
//   //   price: '1.200.000₫',
//   //   salePrice: '2.850.000₫',
//   //   img: '/assets/img/chiet/cristal.jpg'
//   // },
//   {
//     id: '1JpX258MDiOqDy5TUMRLOkPmj5TDEkuCN',
//     name: 'YSL Libre EDP',
//     price: '1.350.000₫',
//     salePrice: '2.950.000₫',
//     img: '/assets/img/chiet/ysl.jpg',
//     capacity: '90ml'
//   }
// ];
const Sukien = () => {
  const { getSaleProduct } = useStore();

  return (
    <div className="mcm sukien">
      {/* <div className="narciso">
        <nav className="nav container">
          <a href="/" className="nav__logo">
            <img src="/LOGO.png" className="nav__logo-icon" alt="logo" />
          </a>
          <ul className="nav__list">
            <li>
              <i className="ri-phone-line"></i>
              <a href="tel:0582.222.000"> +0582.222.000 </a>
            </li>
            <li>
              <i className="ri-mail-line"></i>
              <a href="mailto:cskh@perfumeforyou.vn">cskh@perfumeforyou.vn</a>
            </li>
          </ul>
        </nav>
      </div> */}
      <section className="section1">
        <div className="header">
          {/* <div
            className="bg-header1"
            style={{ backgroundImage: `url('/assets/img/mcm/bg-header.png')` }}
          />
          <div
            className="bg-header2"
            style={{ backgroundImage: `url('/assets/img/mcm/bg-header.png')` }}
          />
          <div
            className="bg-header3"
            style={{ backgroundImage: `url('/assets/img/mcm/bg-header.png')` }}
          />
          <div
            className="bg-header4"
            style={{ backgroundImage: `url('/assets/img/mcm/bg-header.png')` }}
          /> */}
          {/* <div className="bg-header5" style={{ backgroundImage: `url('/assets/img/mcm/1.png')` }} />
          <div className="bg-header6" style={{ backgroundImage: `url('/assets/img/mcm/1.png')` }} /> */}
          {/* <div className="uudai">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 974.0545 1896.0833"
              fill='url("#SHAPE125_desktop_gradient")'
              className="flash"
            >
              <defs id="SHAPE125_defs">
                <linearGradient id="SHAPE125_desktop_gradient" gradientTransform="rotate(0)">
                  <stop offset="0%" stopColor="rgba(255, 179, 40, 1.0)"></stop>
                  <stop offset="100%" stopColor="rgba(253, 203, 52, 1.0)"></stop>
                </linearGradient>
              </defs>
              <path d="M885 566q18 20 7 44L352 1767q-13 25-42 25-4 0-14-2-17-5-25.5-19t-4.5-30l197-808-406 101q-4 1-12 1-18 0-31-11-18-15-13-39l201-825q4-14 16-23t28-9h328q19 0 32 12.5t13 29.5q0 8-5 18L443 651l396-98q8-2 12-2 19 0 34 15z"></path>
            </svg>
            <h3 className="title">ưu đãi&nbsp; &nbsp; &nbsp;duy nhất</h3>
          </div> */}
          <div className="khuyenmai">
            <div className="title cucsoc">
              {/* <label className="animation uudai1">
                <span style={{ fontSize: '30px', color: 'rgb(33, 25, 22)' }}>Mua 1</span>
                <br />
                tặng
                <span className="tang2">2</span>
              </label> */}
              {/* <div className="abc">vòng quay may mắn</div> */}
              {/* <label className="animation uudai2">
                <span style={{ fontSize: '30px', color: 'rgb(33, 25, 22)' }}>Mua 1</span>
                <br />
                Tặng
                <span className="tang2">2</span>
              </label> */}
            </div>
            <img className="khuyenmai__img" src="/assets/img/black-friday-header.png" />

            {/* <div className="tamgiac animation mua2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 92.24 127.88"
                fill="rgba(164, 9, 7, 1)"
              >
                <path d="M85.08,81,17.94,95.55,0,66.47s23.52,3.87,45.83,7.61C66.22,77.51,85.59,80.82,85.08,81Z"></path>
                <path d="M92.23,73.56,37,32.66,47.08,0S93.15,74.17,92.23,73.56Z"></path>
                <path d="M75.43,99.76,49.89,127.88l-17.41-7.33S75.82,99.28,75.43,99.76Z"></path>
              </svg>
            </div> */}
            {/* <div className="tamgiac animation mua1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 92.24 127.88"
                fill="rgba(164, 9, 7, 1)"
              >
                <path d="M85.08,81,17.94,95.55,0,66.47s23.52,3.87,45.83,7.61C66.22,77.51,85.59,80.82,85.08,81Z"></path>
                <path d="M92.23,73.56,37,32.66,47.08,0S93.15,74.17,92.23,73.56Z"></path>
                <path d="M75.43,99.76,49.89,127.88l-17.41-7.33S75.82,99.28,75.43,99.76Z"></path>
              </svg>
            </div> */}
            {/* <div className="right">
              <img src="/assets/img/freeship.png" />
            </div> */}
            {/* <div className="duynhat left">
              <div>
                <div>
                  <span>50%</span>
                  <br />
                  SaleOff
                </div>
              </div>
            </div> */}
            {/*<div className="header-img">*/}
            {/*  <img className="under-box" src="/assets/img/mcm/2.png" />*/}
            {/*  <img className="img13" src="/assets/img/mcm/13.png" />*/}
            {/*  <img className="img33" src="/assets/img/mcm/33.png" />*/}
            {/*  <img className="img31" src="/assets/img/mcm/31.png" />*/}
            {/*</div>*/}
            <div className="text title">
              ưu đãi dành cho <label>"100 khách đầu tiên"</label>
            </div>
            <div className="voucher title">
              <i className="ri-gift-fill" />
              <div>
                <div>
                  <div>
                    ưu đãi GIẢM GIÁ 50% <br />
                    {/* <label> GIẢM GIÁ 50%</label> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="narciso mt-20">
          <a href="#form" className="buy animation">
            <label>Đặt Hàng Ngay</label>
          </a>
        </div> */}
        {/* <Roulette /> */}
      </section>
      <section className="mt-20">
        <img style={{ width: '100%' }} src="/assets/img/ship.PNG" />
      </section>
      <section style={{ textAlign: 'center' }} className="section2 mt-20 box">
        <div>
          {/* <h2 className="thuonghieu">STORE</h2> */}
          <h2 className="tenthuonghieu">
            {/* Nước Hoa Cao Cấp */}
            <br />
            <img src="/LOGO.png" />
          </h2>
          <br />
          <p style={{ fontSize: '18px' }}>
            Chương trình khuyến mãi <strong>Black Friday</strong> dành cho cả nhà yêu Perfume For
            You.
          </p>
          {/* <p className="tang">
            <strong>Tặng ngay 2 mẫu thử 5ml bất kỳ</strong> cho đơn hàng mua 1 chai nước hoa
            Full-Size.
          </p> */}
        </div>
      </section>
      <section className="section3 mt-20 box">
        <div className="hoala" style={{ backgroundImage: `url("/assets/img/mcm/hoala.jpg")` }} />
        <div className="title">Đầy đủ các mẫu HOT hiện nay</div>
        <div className="animation">Giá tốt - Ưu đãi khủng</div>
        <div className="list-sp mt-20">
          {getSaleProduct().map((item, index) => (
            <a
              className="box-card"
              key={index}
              href={`/sukienuudai/checkout/${item.id}?size=${item.prices[0].capacity}`}
              role="button"
            >
              <img src={'https://lh3.googleusercontent.com/d/' + item.prices[0].image} />
              <div style={{ color: 'black', fontSize: '14px', height: '34px' }}>
                {item.name + ' (' + item.prices[0].capacity + ')'}
              </div>
              <div className="box-order">
                <div className="box-price">
                  <div className="price">
                    <FormatMoney price={item.prices[0].price} />
                  </div>
                  <div className="sale-price">
                    <FormatMoney price={item.prices[0].salePrice} />
                  </div>
                </div>
              </div>
            </a>
          ))}
          {/*<div className="box-card">*/}
          {/*  <img src="/assets/img/chiet/10.jpg" />*/}
          {/*  <div className="box-order">*/}
          {/*    <div className="box-price">*/}
          {/*      <div className="price">5.800.000 ₫</div>*/}
          {/*      <div className="sale-price">3.900.000 ₫</div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        {/* <div className="title mt-20">
          <a href="/" target="_blank">
            Xem thêm các mẫu khác tại đây {'->'}
          </a>
        </div> */}
        {/* <div className="narciso mt-20">
          <a href="#form" className="buy animation">
            <label>Đặt Hàng Ngay</label>
          </a>
        </div> */}
      </section>
      <div className="narciso">
        <section className="section5 container pt-3" style={{ maxWidth: '95%' }}>
          <div className="title-comment">Đánh giá sản phẩm</div>
          <div className="count-comment">58 Bình luận</div>
          <hr />
          <div>
            <div style={{ marginTop: '20px' }}>
              <div className="comment">
                <div className="avt">
                  <img src="/assets/img/narciso/avt/1.jpg" />
                </div>
                <div className="description">
                  <div className="user-name">Thuý Hiền</div>
                  <p>
                    Thơm nức lòng người hâm mộ, lady sexy, nữ tính, sang Giao hàng cũng nhanh. Lúc
                    đầu chỉ sợ k đúng mùi mình thích giờ thì quá tuyệt, thơm nữa. Chết mê chết mệt
                    với shop thôi
                  </p>
                </div>
              </div>
              <div className="comment-img">
                <img src="/assets/img/narciso/comment/1.jpg" />
              </div>
              <div className="reaction">
                <div>Thích</div>
                <div>Trả lời</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="/assets/img/narciso/comment/like.png" />
                  15
                </div>
                <div>15 phút</div>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <div className="comment">
                <div className="avt">
                  <img src="/assets/img/narciso/avt/7.jpg" />
                </div>
                <div className="description">
                  <div className="user-name">Lê Ngọc</div>
                  <p>
                    Mua về cho tặng cho ny mà ngửi hoài ghiền lun =))))). Chắc mua về cho mình xài
                    luôn quá kkkk
                  </p>
                </div>
              </div>
              <div className="comment-img">
                <img src="/assets/img/narciso/comment/lelabo.jpg" />
              </div>
              <div className="reaction">
                <div>Thích</div>
                <div>Trả lời</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="/assets/img/narciso/comment/like.png" />
                  50
                </div>
                <div>1 ngày</div>
              </div>
              <div className="rep-comment">
                <div className="comment">
                  <div className="avt">
                    <img src="/assets/img/narciso/avt/9.jpg" />
                  </div>
                  <div className="description">
                    <div className="user-name">Trần Thành</div>
                    <p>Cứ tưởng mình tôi như v chứ :))))</p>
                  </div>
                </div>
                <div className="reaction">
                  <div>Thích</div>
                  <div>Trả lời</div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/assets/img/narciso/comment/like.png" />5
                  </div>
                  <div>4 giờ</div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <div className="comment">
                <div className="avt">
                  <img src="/assets/img/narciso/avt/2.jpg" />
                </div>
                <div className="description">
                  <div className="user-name">Ngọc Hân</div>
                  <p>
                    Chai nar hồng thơm lắm nha, sẽ ủng hộ shop dài nha. Sản phẩm rất thơm rất là
                    đáng đồng tiền luôn í
                  </p>
                </div>
              </div>
              <div className="reaction">
                <div>Thích</div>
                <div>Trả lời</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="/assets/img/narciso/comment/like.png" />
                  10
                </div>
                <div>2 ngày</div>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <div className="comment">
                <div className="avt">
                  <img src="/assets/img/narciso/avt/3.jpg" />
                </div>
                <div className="description">
                  <div className="user-name">Lệ Quyên</div>
                  <p>
                    Mùi thơm và bám hương lâu. Kiểu cuốn hút, quyến rủ nhưng k quá nồng, thoải mái
                    để để đi chơi, đi làm với em này. Rất thích
                  </p>
                </div>
              </div>
              <div className="comment-img">
                <img src="/assets/img/narciso/comment/hop.jpg" />
                <img src="/assets/img/narciso/comment/joy.jpg" />
              </div>
              <div className="reaction">
                <div>Thích</div>
                <div>Trả lời</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="/assets/img/narciso/comment/like.png" />
                  30
                </div>
                <div>2 phút</div>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <div className="comment">
                <div className="avt">
                  <img src="/assets/img/narciso/avt/4.jpg" />
                </div>
                <div className="description">
                  <div className="user-name">Gia Hân</div>
                  <p>
                    Giao hàng siêu nhanh Mùi thơm nhẹ dễ chịu không bị nồng hay hắc, lưu hương lâu
                    phết đó, với giá này thì quá tuyệt vời r hehe
                  </p>
                </div>
              </div>
              <div className="comment-img">
                <img src="/assets/img/narciso/comment/7.jpg" />
                <img src="/assets/img/narciso/comment/8.jpg" />
              </div>
              <div className="reaction">
                <div>Thích</div>
                <div>Trả lời</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="/assets/img/narciso/comment/like.png" />
                  17
                </div>
                <div>3 giờ</div>
              </div>
              <div className="rep-comment">
                <div className="comment">
                  <div className="avt">
                    <img src="/assets/img/narciso/avt/5.jpg" />
                  </div>
                  <div className="description">
                    <div className="user-name">Khánh Ly</div>
                    <p>Tui thì lại thích em này. Để khi nào thử mùi chai trắng thử xem sao hihi</p>
                  </div>
                </div>
                <div className="comment-img">
                  <img src="/assets/img/narciso/comment/9.jpg" />
                </div>
                <div className="reaction">
                  <div>Thích</div>
                  <div>Trả lời</div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/assets/img/narciso/comment/like.png" />2
                  </div>
                  <div>1 giờ</div>
                </div>
              </div>
              <div style={{ marginTop: '20px' }}>
                <div className="comment">
                  <div className="avt">
                    <img src="/assets/img/narciso/avt/6.jpg" />
                  </div>
                  <div className="description">
                    <div className="user-name">Kiều Ly</div>
                    <p>Hốt về tặng ny :))))) Thơm quá</p>
                  </div>
                </div>
                <div className="comment-img">
                  <img src="/assets/img/narciso/comment/gio.jpg" />
                </div>
                <div className="reaction">
                  <div>Thích</div>
                  <div>Trả lời</div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/assets/img/narciso/comment/like.png" />
                    30
                  </div>
                  <div>2 phút</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="loading"
            style={{
              backgroundImage: `url("https://w.ladicdn.com/5d1c84501729460c7fdb5970/typing-animation-3x-20190902093018-20200106170119.gif")`
            }}
          />
        </section>
      </div>
      <section className="section1">
        {/* <div className="header mt-20">
          <div
            className="bg-header1"
            style={{ backgroundImage: `url('/assets/img/mcm/bg-header.png')` }}
          />
          <div
            className="bg-header2"
            style={{ backgroundImage: `url('/assets/img/mcm/bg-header.png')` }}
          />
          <div
            className="bg-header3"
            style={{ backgroundImage: `url('/assets/img/mcm/bg-header.png')` }}
          />
          <div
            className="bg-header4"
            style={{ backgroundImage: `url('/assets/img/mcm/bg-header.png')` }}
          />
          <div className="bg-header5" style={{ backgroundImage: `url('/assets/img/mcm/1.png')` }} />
          <div className="bg-header6" style={{ backgroundImage: `url('/assets/img/mcm/1.png')` }} />
          <div className="uudai">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 974.0545 1896.0833"
              fill='url("#SHAPE125_desktop_gradient")'
              className="flash"
            >
              <defs id="SHAPE125_defs">
                <linearGradient id="SHAPE125_desktop_gradient" gradientTransform="rotate(0)">
                  <stop offset="0%" stopColor="rgba(255, 179, 40, 1.0)"></stop>
                  <stop offset="100%" stopColor="rgba(253, 203, 52, 1.0)"></stop>
                </linearGradient>
              </defs>
              <path d="M885 566q18 20 7 44L352 1767q-13 25-42 25-4 0-14-2-17-5-25.5-19t-4.5-30l197-808-406 101q-4 1-12 1-18 0-31-11-18-15-13-39l201-825q4-14 16-23t28-9h328q19 0 32 12.5t13 29.5q0 8-5 18L443 651l396-98q8-2 12-2 19 0 34 15z"></path>
            </svg>
            <h3 className="title">ưu đãi&nbsp; &nbsp; &nbsp;duy nhất</h3>
          </div>
          <div className="khuyenmai" id="form">
            <h3 className="title cucsoc">
              Khuyến mại cực sốc <br />
              <label className="animation uudai1">
                <span style={{ fontSize: '30px', color: 'rgb(33, 25, 22)' }}>Mua 1</span>
                <br />
                tặng
                <span className="tang2">2</span>
              </label>
              <div className="abc">vòng quay may mắn</div>
              <label className="animation uudai2">
                <span style={{ fontSize: '30px', color: 'rgb(33, 25, 22)' }}>Mua 1</span>
                <br />
                tặng
                <span className="tang2">2</span>
              </label>
            </h3>
            <div className="tamgiac animation mua2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 92.24 127.88"
                fill="rgba(164, 9, 7, 1)"
              >
                <path d="M85.08,81,17.94,95.55,0,66.47s23.52,3.87,45.83,7.61C66.22,77.51,85.59,80.82,85.08,81Z"></path>
                <path d="M92.23,73.56,37,32.66,47.08,0S93.15,74.17,92.23,73.56Z"></path>
                <path d="M75.43,99.76,49.89,127.88l-17.41-7.33S75.82,99.28,75.43,99.76Z"></path>
              </svg>
            </div>
            <div className="tamgiac animation mua1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 92.24 127.88"
                fill="rgba(164, 9, 7, 1)"
              >
                <path d="M85.08,81,17.94,95.55,0,66.47s23.52,3.87,45.83,7.61C66.22,77.51,85.59,80.82,85.08,81Z"></path>
                <path d="M92.23,73.56,37,32.66,47.08,0S93.15,74.17,92.23,73.56Z"></path>
                <path d="M75.43,99.76,49.89,127.88l-17.41-7.33S75.82,99.28,75.43,99.76Z"></path>
              </svg>
            </div>
            <div className="right">
              <img src="/assets/img/freeship.png" />
            </div>
            <div className="duynhat left">
              <div>
                <div>
                  <span>50%</span>
                  <br />
                  SaleOff
                </div>
              </div>
            </div> */}
        {/*<div className="header-img">*/}
        {/*  <img className="under-box" src="/assets/img/mcm/2.png" />*/}
        {/*  <img className="img13" src="/assets/img/mcm/13.png" />*/}
        {/*  <img className="img33" src="/assets/img/mcm/33.png" />*/}
        {/*  <img className="img31" src="/assets/img/mcm/31.png" />*/}
        {/*</div>*/}
        {/* <div className="text title">
              ưu đãi dành cho <label>"100 khách đầu tiên"</label>
            </div>
            <div className="voucher title">
              <i className="ri-gift-fill" />
              <div>
                <div>
                  <div>
                    trị giá quà tặng <br />
                    <label>800.000vnđ</label>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        {/* </div> */}
        {/* <div className="narciso" id="form">
          <section className="section5 mt-20">
            <form className="cart" onSubmit={handleSubmit}>
              <div className="form">
                <input
                  type="text"
                  className="form-input"
                  required
                  placeholder="Họ và tên"
                  defaultValue={input.name}
                  onChange={handleChange}
                  name="name"
                />
              </div>
              <div className="form">
                <input
                  type="text"
                  className="form-input"
                  required
                  placeholder="Số điện thoại"
                  defaultValue={input.number}
                  onChange={handleChange}
                  name="number"
                />
                {error === true && (
                  <div style={{ marginTop: '5px' }}>
                    <h4>Vui lòng điền đúng số điện thoại!</h4>
                  </div>
                )}
              </div>
              <div className="form">
                <datalist id="browsers">
                  {ListSP.map((item, index) => (
                    <option key={index} value={item.name} />
                  ))}
                </datalist>
                <input
                  type="text"
                  autoComplete="off"
                  className="form-input"
                  required
                  placeholder="Sản phẩm"
                  defaultValue={input.sanpham}
                  onChange={handleChange}
                  name="sanpham"
                  list="browsers"
                />
              </div>
              <div className="form form_gift">
                <div className="form_gift-title">Quà tặng kèm từ vòng quay</div>
                {gifts.length <= 0 && <div>Quay vòng quay may mắn để nhận thưởng</div>}
                {gifts.map((item: any) => {
                  if (item !== 'Mất lượt') return <div key={item}>- {item}</div>;
                })}
              </div>
              <div className="form">
                <textarea
                  className="form-input"
                  required
                  placeholder="Địa chỉ"
                  defaultValue={input.address}
                  onChange={handleChange}
                  name="address"
                  rows={4}
                />
              </div> */}

        {/* <div className="form">
                <a
                  style={{
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                    marginTop: '10px',
                    display: 'block',
                    width: 'fit-content'
                  }}
                  href="/"
                >
                  {`>>`}Tham khảo các sản phẩm khác
                </a>
              </div> */}
        {/* <div className="form" style={{ color: 'red' }}>
                {typeof error === 'string' && (
                  <>
                    Đã xảy ra lỗi, hay liên hệ về{' '}
                    <a target="_blank" href="https://www.facebook.com/perfumeforyouvn">
                      fanpage
                    </a>{' '}
                    hoặc liên hệ trực tiếp{' '}
                    <a target="_blank" href="tel:0582.222.000">
                      {' '}
                      +0582.222.000{' '}
                    </a>{' '}
                    để được hỗ trợ
                  </>
                )}
              </div>
              <div className="form">
                <button type="submit" disabled={loading} className="btn-submit">
                  {loading ? 'đang xử lý...' : 'Đặt Hàng Ngay'}
                </button>
              </div>
            </form>
          </section> */}
        {/* </div> */}
      </section>
      {/* <div className="tuvanngay">
        <div className="narciso mt-20 ">
          <a href="#form" className="buy animation">
            <label>Đặt Hàng Ngay</label>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Sukien;
