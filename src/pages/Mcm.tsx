import React, { ChangeEvent, SyntheticEvent, useRef, useState } from 'react';
import '../styles/mcm.scss';
import { FormatMoney } from '../Helper/Helper';

const Mcm = () => {
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);

  const handleClick = (ref: any) => {
    const item = ref.current;
    // @ts-ignore
    const content = item.querySelector('.questions__content');

    // @ts-ignore
    if (item.classList.contains('accordion-open')) {
      // @ts-ignore
      item.classList.remove('accordion-open');
      content.removeAttribute('style');
    } else {
      // @ts-ignore
      item.classList.add('accordion-open');
      content.style.height = content.scrollHeight + 'px';
    }
  };

  const [input, setInput] = useState({
    name: '',
    number: '',
    address: '',
    sanpham: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const formDataJsonString = JSON.stringify(input);
    setLoading(true);

    fetch('https://sheet.best/api/sheets/050b1455-4721-4cfd-abb7-a5879bf4e105', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: formDataJsonString
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Something went wrong');
      })
      .then(() => (window.location.href = '/submited'))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="mcm">
      <div className="narciso">
        <nav className="nav container">
          <a href="/" className="nav__logo">
            <img src="/LOGONOEL.png" className="nav__logo-icon" alt="logo" />
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
      </div>
      <section className="section1">
        <div className="header mt-20">
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
          <div className="khuyenmai">
            <h3 className="title">
              Khuyến mại cực sốc <br /> <label className="animation">45%</label>
            </h3>
            <div className="tamgiac animation">
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
            <div className="header-img">
              <img className="under-box" src="/assets/img/mcm/2.png" />
              <img className="img13" src="/assets/img/mcm/13.png" />
              <img className="img33" src="/assets/img/mcm/33.png" />
              <img className="img31" src="/assets/img/mcm/31.png" />
            </div>
            <div className="text title">
              ưu đãi dành cho <label>"50 khách đầu tiên"</label>
            </div>
            <div className="voucher title">
              <i className="ri-gift-fill" />
              <div>
                nhận ngay voucher
                <div>
                  <div>
                    trị giá <label>300.000đ</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="narciso mt-20">
          <a href="#form" className="buy animation">
            <label>Mua Ngay</label>
          </a>
        </div>
      </section>
      <section className="mt-20">
        <img style={{ width: '100%' }} src="/assets/img/mcm/ship.png" />
      </section>
      <section style={{ textAlign: 'center' }} className="section2 mt-20 box">
        <div>
          <h2 className="thuonghieu">Thương Hiệu</h2>
          <h2 className="tenthuonghieu">
            Nước Hoa Cao Cấp
            <br />
            Le Labo
          </h2>
          <iframe
            width="370"
            height="230"
            src="https://www.youtube.com/embed/DHB6gEKf34U"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p>
            Le Labo được thành lập ở Grasse, bởi 2 nhà đồng sáng lập là Edouard Roschi và Fabrice
            Penot, được phát triển ở New York, nơi Edouard Roschi và Fabrice Penot mở cửa hàng đầu
            tiên năm 2006 trên phố Elizabeth ở Nolita.
          </p>
        </div>
        <div className="mt-20">
          <img src="https://www.giaonhan247.com/wp-content/uploads/2021/05/review-thuong-hieu-nuoc-hoa-le-labo.jpg" />
          <p>
            Những chai nước hoa Niche của Le Labo đã mang đến một làn gió mới trong làng nước hoa và
            nhanh chóng tạo nên một cú hit tuyệt vời so với những dòng nước hoa quen thuộc và nhàm
            chán thông thường.&nbsp;
            <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
              Cùng Perfume For You điểm mặt 3 chai nước hoa Niche bán chạy nhất
            </span>
            &nbsp;mọi thời đại của thương hiệu Le Labo nhé!
          </p>
        </div>
      </section>
      <section className="section3 mt-20 box">
        <div className="hoala" style={{ backgroundImage: `url("/assets/img/mcm/hoala.jpg")` }} />
        <div className="title">Khuyến mại cực sốc</div>
        <div className="animation">Giá tốt - Ưu đãi khủng</div>
        <div>
          <div className="box-card mt-20">
            <img src="/assets/img/mcm/info-13.png" />
            <div className="questions">
              <div className="questions__item" ref={myRef1} onClick={() => handleClick(myRef1)}>
                <header className="questions__header">
                  <i className="ri-add-line questions__icon"></i>
                  <h3 className="questions__item-title">Xem chi tiết</h3>
                </header>
                <div className="questions__content">
                  <p className="questions__description">
                    Thuộc nhóm Oriental Woody - Hương gỗ phương đông dành cho cả nam lẫn nữ. Có
                    hương thơm rất sạch sẽ giống như những vạt nắng tinh khôi vào ngày hè pha một
                    chút mùi sữa rất dịu nhẹ, thanh tao và cực kỳ thân thiện với làn da. Quả lê mọng
                    nước xen kẽ với hương trầm nhẹ và ẩm. Sau đó là sự kết hợp vừa phải của long
                    diên hương, hướng dương vàng và xạ hương, tạo nên một mùi hương cực kỳ dịu nhẹ
                    và độc đáo.
                  </p>
                  <div>
                    <video width="320" height="200" controls>
                      <source src="/assets/img/mcm/13.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <p className="questions__description end-text">
                    An.other 13 - Mùa của sức sống, mùa tươi mới, mùa xanh non,... có cảm giác hồi
                    teen khi khoác lên mình hương thơm tinh khôi trong trẻo ấy.
                  </p>
                </div>
              </div>
            </div>
            <div className="box-order">
              <div className="box-price">
                <div className="price">5.800.000 ₫</div>
                <div className="sale-price">3.900.000 ₫</div>
              </div>
              <div>
                <div className="narciso">
                  <a href="#form" className="buy animation">
                    <label>Mua Ngay</label>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box-card mt-20">
            <img src="/assets/img/mcm/info-31.png" />
            <div className="questions">
              <div className="questions__item" ref={myRef2} onClick={() => handleClick(myRef2)}>
                <header className="questions__header">
                  <i className="ri-add-line questions__icon"></i>
                  <h3 className="questions__item-title">Xem chi tiết</h3>
                </header>
                <div className="questions__content">
                  <p className="questions__description">
                    Sự pha trộn rất gợi cảm giữa mùi hương của gỗ và hương cay nồng, và tất cả tập
                    trung xoay quanh loài hoa hồng vô cùng tuyệt vời của ngành nước hoa. Le Labo
                    Rose 31 có 31 thành phần nguyên liệu, theo đuổi trường phái tranh sáng tranh tối
                    rất khó đoán định hay nắm bắt, cũng ko thể phân biệt giới tính khi ai đó có
                    hương vị này trên da, bởi lên da nam Rose 31 manly gai góc bí ẩn thu hút đầy cá
                    tính, còn lên da nữ Rose 31 lại yểu điệu mềm mại nhung lụa tới tột cùng
                  </p>
                  <div>
                    <video width="320" height="200" controls>
                      <source src="/assets/img/mcm/31.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <p className="questions__description end-text">
                    Mùi hương chủ điểm hoa hồng hòa quyện cùng gỗ và gia vị. Tuy nhiên, khi xịt Rose
                    31 lên da thịt, và để mùi hương quyện lấy cơ thể mình. Bạn sẽ không tài nào và
                    không hiểu nổi tại sao Le Labo lại gọi đây là hương hồng.
                  </p>
                </div>
              </div>
            </div>
            <div className="box-order">
              <div className="box-price">
                <div className="price">5.800.000 ₫</div>
                <div className="sale-price">3.900.000 ₫</div>
              </div>
              <div>
                <div className="narciso">
                  <a href="#form" className="buy animation">
                    <label>Mua Ngay</label>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box-card mt-20">
            <img src="/assets/img/mcm/info-33.png" />
            <div className="questions">
              <div className="questions__item" ref={myRef3} onClick={() => handleClick(myRef3)}>
                <header className="questions__header">
                  <i className="ri-add-line questions__icon"></i>
                  <h3 className="questions__item-title">Xem chi tiết</h3>
                </header>
                <div className="questions__content">
                  <p className="questions__description">
                    Santal 33 quả thực là chai nước hoa Niche mang tính biểu tượng của Le Labo bởi
                    những nét chấm phá khác biệt, không hề giống với loại nước hoa thông thường nào.
                    Được điều chế từ 33 nguyên liệu khác nhau, trong đó chủ yếu là gỗ đàn hương Úc,
                    gỗ tuyết tùng, bạch đậu khấu... kết hợp lại với nhau, tạo ra một mùi hương
                    unisex gây nghiện, thoải mái và khó quên cho người sử dụng.
                  </p>
                  <div>
                    <video width="320" height="200" controls>
                      <source src="/assets/img/mcm/33.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <p className="questions__description end-text">
                    <strong>Le Labo Santa 33</strong> đặc trưng của sự quyến rũ, sang trọng, mùi của
                    xưởng gỗ, phù hợp cả nam và nữ.
                  </p>
                </div>
              </div>
            </div>
            <div className="box-order">
              <div className="box-price">
                <div className="price">5.800.000 ₫</div>
                <div className="sale-price">3.900.000 ₫</div>
              </div>
              <div>
                <div className="narciso">
                  <a href="#form" className="buy animation">
                    <label>Mua Ngay</label>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <img src="https://vn-test-11.slatic.net/shop/e0062648bd3e4e210b89896c92934728.jpeg" />
      </section>
      <div className="narciso">
        <section className="section5 container pt-3">
          <div className="title-comment">Đánh giá sản phẩm</div>
          <div className="count-comment">285 Bình luận</div>
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
                    mình đã sử dụng chai này 5 năm rồi mà giờ vẫn không thể đổi sang dòng sản phẩm
                    khác.
                  </p>
                </div>
              </div>
              <div className="comment-img">
                <img src="/assets/img/mcm/cmt1.jpg" />
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
                    Mình vừa mới nhận hàng xong, mở chai thơm lừng luôn. Chưa thử xem lưu hương lâu
                    không nhưng nhìn chai thiết kế đẹp quá.
                  </p>
                </div>
              </div>
              <div className="comment-img">
                <img src="/assets/img/mcm/cmt2.jpg" />
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
                    <p>Lưu hương lâu lắm ông. Tôi xài thấy lưu qua ngày sau vẫn còn mùi</p>
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
                    Mới xịt thấy bình thường, sau khoản 15p thì đúng quá khác biệt. Từ vỏ chai cho
                    đến dầu thơm bên trong đều đáng tiền.
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
                    để đi chơi, đi làm với em này. Rất thích
                  </p>
                </div>
              </div>
              <div className="comment-img">
                <img src="/assets/img/mcm/cmt3.jpg" />
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
                <img src="/assets/img/mcm/cmt4.jpg" />
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
                    <p>Tui cũng mê em này cực, hẹn hò thì nhất luôn rồi kkk</p>
                  </div>
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
        <div className="header mt-20">
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
          <div className="khuyenmai">
            <h3 className="title">
              Khuyến mại cực sốc <br /> <label className="animation">45%</label>
            </h3>
            <div className="tamgiac animation">
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
            <div className="header-img">
              <img className="under-box" src="/assets/img/mcm/2.png" />
              <img className="img13" src="/assets/img/mcm/13.png" />
              <img className="img33" src="/assets/img/mcm/33.png" />
              <img className="img31" src="/assets/img/mcm/31.png" />
            </div>
            <div className="text title">
              ưu đãi dành cho <label>"50 khách đầu tiên"</label>
            </div>
            <div className="voucher title">
              <i className="ri-gift-fill" />
              <div>
                nhận ngay voucher
                <div>
                  <div>
                    trị giá <label>300.000đ</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="narciso" id="form">
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
                autoComplete="false"
                className="form-input"
                required
                placeholder="Số điện thoại"
                defaultValue={input.number}
                onChange={handleChange}
                name="number"
              />
            </div>
            <div className="form">
              <div className="select-product">Chọn sản phẩm</div>
              <div className="form-check">
                <input
                  type="radio"
                  id="flexRadioDefault1"
                  name="sanpham"
                  onChange={handleChange}
                  value="Narciso Eau de Parfum Cristal"
                  required
                />
                <label htmlFor="flexRadioDefault1">Le Labo Another 13 100ml</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="flexRadioDefault2"
                  name="sanpham"
                  onChange={handleChange}
                  value="Narciso Rodriguez Narciso Rouge"
                  required
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Le Labo Rose 31 100ml
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="sanpham"
                  id="flexRadioDefault3"
                  onChange={handleChange}
                  value="Narciso Eau de Parfum Ambrée"
                  required
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Le Labo Santal 33 100ml
                </label>
              </div>
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
                {`>>`}Mua các sản phẩm khác
              </a>
            </div>
            <div className="form">
              <input
                type="text"
                className="form-input"
                required
                placeholder="Địa chỉ nhận hàng"
                defaultValue={input.address}
                onChange={handleChange}
                name="address"
              />
            </div>
            <div className="view__price" style={{ marginBottom: '10px' }}>
              <p>
                Giá:{' '}
                <span>
                  <FormatMoney price={3900000} />
                </span>
              </p>
              <p className="view__price-thitruong">
                Giá thị trường: <FormatMoney price={5800000} /> - Tiết kiệm:{' '}
                <FormatMoney price={1900000} />
              </p>
            </div>
            <div className="form-payment">
              <img src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4" />
              <div>COD (Thanh toán khi nhận hàng)</div>
            </div>
            <div className="form" style={{ color: 'red' }}>
              {error && (
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
                {loading ? 'đang xác nhận...' : 'Xác nhận đơn hàng'}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Mcm;
