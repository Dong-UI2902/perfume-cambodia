import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import '../styles/Narciso.scss';
import Carousel from 'react-multi-carousel';
import { FormatMoney } from '../Helper/Helper';

const Narciso = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
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
      <section className="section1">
        <div
          className="bg-header"
          style={{ backgroundImage: `url("/assets/img/narciso/bg-header.png")` }}
        >
          <div className="header-text">
            <div>
              <div className="header-description">Nước Hoa Nữ Narciso Rodriguez</div>
              <div className="header-sale title">khuyến mãi siêu khủng</div>
              <div className="header-description title">cho đơn hàng đặt qua website</div>
            </div>
            <div className="header__sale">
              <div className="header__sale-box">
                <div className="title">giảm ngay</div>
                <div className="header-sale">55%</div>
                <div className="header__sale-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.0833"
                    className=""
                    fill="rgba(240, 99, 112, 1)"
                  >
                    <path d="M1120 928q0 12-10 24l-319 319q-11 9-23 9t-23-9L425 951q-15-16-7-35 8-20 30-20h192V544q0-14 9-23t23-9h192q14 0 23 9t9 23v352h192q14 0 23 9t9 23zM768 352q-148 0-273 73T297 623t-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5T1153.5 1561 768 1664t-385.5-103T103 1281.5 0 896t103-385.5T382.5 231 768 128t385.5 103T1433 510.5 1536 896z" />
                  </svg>
                </div>
                <div className="boder-topLeft" />
                <div className="boder-bottomRight" />
              </div>
              <div className="header__sale-box">
                <div className="title">voucher trị giá</div>
                <div className="header-sale">300k</div>
                <div className="header__sale-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.0833"
                    className=""
                    fill="rgba(240, 99, 112, 1)"
                  >
                    <path d="M928 1356V640H608v716q0 25 18 38.5t46 13.5h192q28 0 46-13.5t18-38.5zM472 512h195L541 351q-26-31-69-31-40 0-68 28t-28 68 28 68 68 28zm688-96q0-40-28-68t-68-28q-43 0-69 31L870 512h194q40 0 68-28t28-68zm376 256v320q0 14-9 23t-23 9h-96v416q0 40-28 68t-68 28H224q-40 0-68-28t-28-68v-416H32q-14 0-23-9t-9-23V672q0-14 9-23t23-9h440q-93 0-158.5-65.5T248 416t65.5-158.5T472 192q107 0 168 77l128 165 128-165q61-77 168-77 93 0 158.5 65.5T1288 416t-65.5 158.5T1064 640h440q14 0 23 9t9 23z" />
                  </svg>
                </div>
                <div className="boder-topLeft" />
                <div className="boder-bottomRight" />
              </div>
            </div>
          </div>
          <div className="header__product">
            <div
              className="header__product-bg"
              style={{ backgroundImage: `url("/assets/img/narciso/1.png")` }}
            />
            <img
              className="img5"
              src="https://lh3.googleusercontent.com/d/1lXcqBG7LKtCG2pUREzsbKJwRWAT9h_yi"
            />
            <img
              className="img3"
              src="https://lh3.googleusercontent.com/d/19wJ3ZWNy35mCFXXx2pBPykFszF1IzT3k"
            />
            <img
              className="img1"
              src="https://lh3.googleusercontent.com/d/1yhbKpWhwapzHl9htmkcYsP101ro5_Zn9"
            />
            <img
              className="img4"
              src="https://lh3.googleusercontent.com/d/10lgSZrghFB5EWkAG3nV_FS90gkivHaw1"
            />
            <img
              className="img2"
              src="https://lh3.googleusercontent.com/d/1XY99LQsI8CzWHLCHFe_t1yGryqPSRuND"
            />
            <a href="#form" className="buy">
              Mua Ngay
            </a>
          </div>
        </div>
      </section>
      <section className="section2 container">
        <div className="view__policy">
          <div>
            <i className="ri-truck-line" />
            Free ship toàn quốc
          </div>
          <div>
            <i className="ri-shield-check-line" />
            Chính hãng 100%
          </div>
          <div>
            <i className="ri-archive-line" />
            Đổi trả miễn phí
          </div>
        </div>
      </section>
      <section className="section3 container pt-3">
        <div className="brand">Thương Hiệu</div>
        <div className="brand-name">Nước Hoa Cao Cấp Narciso</div>
        <p>
          Thương hiệu nước hoa nổi tiếng Narciso Rodriguez có xuất xứ tại Mỹ. Người đứng đầu là nhà
          thiết kế thời trang người Mỹ gốc Cuba Narciso Rodriguez III sáng lập.
          <br />
          Cho đến nay, thương hiệu này có hơn 27 loại nước hoa với những tên gọi và mùi hương khác
          nhau. Không chỉ nổi bật với bề ngoài đẹp, hương thơm khi review nước hoa Narciso cũng sẽ
          khiến bạn phải ngất ngây.
        </p>
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/VkVq4HdImBY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ marginTop: '20px' }}
        ></iframe>
      </section>
      <section className="section4 container pt-3">
        <div className="name-product">Narciso Rodriguez Narciso Rouge</div>
        <div className="bg-product" />
        <Carousel
          arrows={true}
          swipeable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={true}
          autoPlaySpeed={1000}
          transitionDuration={500}
          containerClass="carousel-container"
          // deviceType={this.props.deviceType}
          renderDotsOutside={true}
          className="slide"
        >
          <div
            className="slide__image"
            style={{ backgroundImage: `url("/assets/img/narciso/rouge.jpg")` }}
          />
          <div
            className="slide__image"
            style={{
              backgroundImage: `url("https://hotgirlshop.vn/uploads/picture/22032021/News/2032201647-nuoc-hoa-Narciso-Rouge-edt-na-do-lun.jpg")`
            }}
          />
          <div
            className="slide__image"
            style={{
              backgroundImage: `url("https://missluxury.vn/wp-content/uploads/2018/09/Rouge1.jpg")`
            }}
          />
        </Carousel>
        <div>
          <p>
            Được tung ra thị trường vào năm 2018 với thần thái quyến rũ, sang trọng, đầy gợi cảm của
            của người phụ nữ. Chính vì thế mà đây như sự lựa chọn tuyệt vời với đầy đủ các yếu tố
            mang đến vẻ đẹp của một loại nước hoa mà mọi phụ nữ đều cần đến.
          </p>
          <p className="muihuong">
            <label>Hương đầu:</label> Hoa Diên Vỹ, Hồng Bulgari
            <br />
            <label>Hương giữa:</label> Xạ Hương, Hoa Huệ, Hoa Cam
            <br />
            <label>Hương cuối:</label> Đậu Tonka, Vanilla, Gỗ Tuyết Tùng, Cỏ Hương Bài, Gỗ Đàn Hương
          </p>
          <p className="muihuong">
            <label>Phong cách:</label> Gợi cảm, Sang trọng, Kiêu kỳ
          </p>
          <p className="muihuong">
            <label>Lưu Hương:</label> 6-10 giờ
          </p>
        </div>
        <a href="#form" className="buy">
          Mua Ngay
        </a>
      </section>
      <section className="section4 container pt-3">
        <div className="name-product" style={{ color: '#E77C58' }}>
          Narciso Eau de Parfum Ambrée
        </div>
        <div className="bg-product" />
        <Carousel
          arrows={true}
          swipeable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={true}
          autoPlaySpeed={1000}
          transitionDuration={500}
          containerClass="carousel-container"
          // deviceType={this.props.deviceType}
          renderDotsOutside={true}
          className="slide"
        >
          <div
            className="slide__image"
            style={{
              backgroundImage: `url("https://golfandlife.com.vn/wp-content/uploads/2020/09/Narciso-Ambree-Model-Shot.jpg")`
            }}
          />
          <div
            className="slide__image"
            style={{
              backgroundImage: `url("https://admin.vuahanghieu.com/upload/news/content/2020/12/narciso-ambree-edp-30mlionj-jpg-1608947456-26122020085056.jpg")`
            }}
          />
          <div
            className="slide__image"
            style={{
              backgroundImage: `url("https://bizweb.dktcdn.net/thumb/1024x1024/100/357/967/products/nuoc-hoa-nu-narciso-ambree-edp-8.jpg?v=1627288490203")`
            }}
          />
        </Carousel>
        <div>
          <p>
            Ambrée là thành viên mới của hãng nước hoa Narciso Rodriguez, đây là một hương thơm hoa
            phương Đông dành cho phụ nữ vừa được ra mắt vào năm 2020. Người pha chế mùi hương này là
            Aurelien Guichard. Hương chủ đạo là Hoa Sứ và Hoa Hoàng Lan (Ngọc Lan Tây), Xạ Hương, Hổ
            Phách, Gỗ Tuyết Tùng, Vani và Cashmeran.
          </p>
          <p className="muihuong">
            <label>Hương đầu:</label> Hoa trắng, Hoa sứ, Hoa hoàng lan
            <br />
            <label>Hương giữa:</label> Xạ hương, Hổ phách
            <br />
            <label>Hương cuối:</label> Gỗ tuyết tùng, Vanilla, Cashmeran
          </p>
          <p className="muihuong">
            <label>Phong cách:</label> Sang trọng, Quyến rũ, Thu hút
          </p>
          <p className="muihuong">
            <label>Lưu Hương:</label> 6-10 giờ
          </p>
        </div>
        <a href="#form" className="buy">
          Mua Ngay
        </a>
      </section>
      <section className="section4 container pt-3">
        <div className="name-product" style={{ color: '#F9C1C2', textShadow: '1px 1px 1px black' }}>
          Narciso Eau de Parfum Cristal
        </div>
        <div className="bg-product" />
        <Carousel
          arrows={true}
          swipeable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={true}
          autoPlaySpeed={1000}
          transitionDuration={500}
          containerClass="carousel-container"
          // deviceType={this.props.deviceType}
          renderDotsOutside={true}
          className="slide"
        >
          <div
            className="slide__image"
            style={{
              backgroundImage: `url("https://cdn.basler-beauty.de/marken/NarcisoRodriguez/Narciso_Rodriguez_Narciso_Cristal_737x440.jpg")`
            }}
          />
          <div
            className="slide__image"
            style={{
              backgroundImage: `url("https://nuochoarosa.com/wp-content/uploads/2022/06/Narciso-Rodriguez-Cristal-2.jpg")`
            }}
          />
          <div
            className="slide__image"
            style={{
              backgroundImage: `url("https://nhanperfumista.com/wp-content/uploads/2022/06/Narciso-Cristal-EDP.jpg")`
            }}
          />
        </Carousel>
        <div>
          <p>
            Được ra mắt vào 2022 Narciso Cristal EDP được mệnh danh “Nàng Thơ”. Mùi hương xao xuyến
            biết bao con tim thiếu nữ bởi hương thơm nhẹ nhàng và gợi cảm. Bậc thầy điều chế Natalie
            Gracia- Cetto là người sáng tạo ra hương thơm này.Vẫn giữ nguyên bản thiết kế chai thủy
            tinh vuông vức cùng màu hồng cánh sen dịu dàng,tạo ra ánh nhìn hớp hồn người khác từ ánh
            nhìn đầu tiên.
          </p>
          <p className="muihuong">
            <label>Hương đầu:</label> Hoa lan Nam Phi, Hoa cam, Cam bergamot
            <br />
            <label>Hương giữa:</label> Xạ hương, Hoa trắng, Hoa hồng, Hoa nhài
            <br />
            <label>Hương cuối:</label> Len cashmere, Gỗ tuyết tùng, Hổ phách, Benzoin
          </p>
          <p className="muihuong">
            <label>Phong cách:</label> Trẻ trung, Thanh tao, Quyến rũ
          </p>
          <p className="muihuong">
            <label>Lưu Hương:</label> 6-10 giờ
          </p>
        </div>
        <a href="#form" className="buy">
          Mua Ngay
        </a>
      </section>
      <section className="section5 container pt-3">
        <div className="title-comment">Đánh giá sản phẩm</div>
        <div className="count-comment">758 Bình luận</div>
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
                  Thơm nức lòng người hâm mộ, lady sexy, nữ tính, sang Giao hàng cũng nhanh. Lúc đầu
                  chỉ sợ k đúng mùi mình thích giờ thì quá tuyệt, thơm nữa. Chết mê chết mệt với
                  shop thôi
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
              <img src="/assets/img/narciso/comment/3.jpg" />
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
                  Chai nar hồng thơm lắm nha, sẽ ủng hộ shop dài nha. Sản phẩm rất thơm rất là đáng
                  đồng tiền luôn í
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
                  Mùi thơm và bám hương lâu. Kiểu cuốn hút, quyến rủ nhưng k quá nồng, thoải mái để
                  đi chơi, đi làm với em này. Rất thích
                </p>
              </div>
            </div>
            <div className="comment-img">
              <img src="/assets/img/narciso/comment/4.jpg" />
              <img src="/assets/img/narciso/comment/5.jpg" />
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
          </div>
        </div>
        <div
          className="loading"
          style={{
            backgroundImage: `url("https://w.ladicdn.com/5d1c84501729460c7fdb5970/typing-animation-3x-20190902093018-20200106170119.gif")`
          }}
        />
      </section>
      <section className="section1">
        <div
          className="bg-header"
          style={{ backgroundImage: `url("/assets/img/narciso/bg-header.png")` }}
        >
          <div className="header-text">
            <div>
              <div className="header-sale title">khuyến mãi siêu khủng</div>
              <div className="header-description title">cho đơn hàng đặt qua website</div>
            </div>
            <div className="header__sale">
              <div className="header__sale-box">
                <div className="title">giảm ngay</div>
                <div className="header-sale">55%</div>
                <div className="header__sale-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.0833"
                    className=""
                    fill="rgba(240, 99, 112, 1)"
                  >
                    <path d="M1120 928q0 12-10 24l-319 319q-11 9-23 9t-23-9L425 951q-15-16-7-35 8-20 30-20h192V544q0-14 9-23t23-9h192q14 0 23 9t9 23v352h192q14 0 23 9t9 23zM768 352q-148 0-273 73T297 623t-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5T1153.5 1561 768 1664t-385.5-103T103 1281.5 0 896t103-385.5T382.5 231 768 128t385.5 103T1433 510.5 1536 896z" />
                  </svg>
                </div>
                <div className="boder-topLeft" />
                <div className="boder-bottomRight" />
              </div>
              <div className="header__sale-box">
                <div className="title">voucher trị giá</div>
                <div className="header-sale">300k</div>
                <div className="header__sale-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.0833"
                    className=""
                    fill="rgba(240, 99, 112, 1)"
                  >
                    <path d="M928 1356V640H608v716q0 25 18 38.5t46 13.5h192q28 0 46-13.5t18-38.5zM472 512h195L541 351q-26-31-69-31-40 0-68 28t-28 68 28 68 68 28zm688-96q0-40-28-68t-68-28q-43 0-69 31L870 512h194q40 0 68-28t28-68zm376 256v320q0 14-9 23t-23 9h-96v416q0 40-28 68t-68 28H224q-40 0-68-28t-28-68v-416H32q-14 0-23-9t-9-23V672q0-14 9-23t23-9h440q-93 0-158.5-65.5T248 416t65.5-158.5T472 192q107 0 168 77l128 165 128-165q61-77 168-77 93 0 158.5 65.5T1288 416t-65.5 158.5T1064 640h440q14 0 23 9t9 23z" />
                  </svg>
                </div>
                <div className="boder-topLeft" />
                <div className="boder-bottomRight" />
              </div>
            </div>
          </div>
          <div className="header__product bottom">
            <div
              className="header__product-bg"
              style={{ backgroundImage: `url("/assets/img/narciso/1.png")` }}
            />
            <img
              className="img5"
              src="https://lh3.googleusercontent.com/d/1lXcqBG7LKtCG2pUREzsbKJwRWAT9h_yi"
            />
            <img
              className="img3"
              src="https://lh3.googleusercontent.com/d/19wJ3ZWNy35mCFXXx2pBPykFszF1IzT3k"
            />
            <img
              className="img1"
              src="https://lh3.googleusercontent.com/d/1yhbKpWhwapzHl9htmkcYsP101ro5_Zn9"
            />
            <img
              className="img4"
              src="https://lh3.googleusercontent.com/d/10lgSZrghFB5EWkAG3nV_FS90gkivHaw1"
            />
            <img
              className="img2"
              src="https://lh3.googleusercontent.com/d/1XY99LQsI8CzWHLCHFe_t1yGryqPSRuND"
            />
            <div className="title title-form" id="form">
              Đặt hàng ngay!!!
            </div>
          </div>
          <div className="thanhcong title">
            <label>582 </label>
            Đơn hàng thành công
          </div>
          <div className="title hailong">
            <label>99.97% </label>
            Khách hàng hài lòng về sản phẩm
          </div>
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
                <label htmlFor="flexRadioDefault1">
                  Narciso Eau de Parfum Cristal (Hồng), 90ml
                </label>
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
                  Narciso Rodriguez Narciso Rouge (Đỏ), 90ml
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
                  Narciso Eau de Parfum Ambrée (Cam), 90ml
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
                  <FormatMoney price={1200000} />
                </span>
              </p>
              <p className="view__price-thitruong">
                Giá thị trường: <FormatMoney price={2850000} /> - Tiết kiệm:{' '}
                <FormatMoney price={1650000} />
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
          <div style={{ opacity: '0' }}>123123123</div>
        </div>
      </section>
    </div>
  );
};

export default Narciso;
