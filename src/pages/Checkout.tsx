import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useStore } from '../context';
import { FormatMoney } from '../Helper/Helper';

export const isValidPhone = (phone: string) =>
  !/((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/.test(phone);

const Checkout = () => {
  const { products, setCard, getCart } = useStore();
  const { id } = useParams();

  const [sizeParams, setSizeParams] = useSearchParams();
  const text = sizeParams.get('size');

  const [product, setProduct] = useState<any>({
    id: '',
    name: '',
    capacity: '',
    price: '',
    salePrice: '',
    image: '',
    gender: '',
    brand: '',
    status: true
  });

  const [input, setInput] = useState({
    name: '',
    number: '',
    address: '',
    gift: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = React.useState<string | boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'number') {
      setError(isValidPhone(value));
    }
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const isOrdered = () => {
    const arr = getCart();
    if (arr) {
      return arr.map((item) => JSON.parse(item).info.number);
    }

    return;
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const cart = {
      ...input,
      sanpham: product.name + ' ' + product.capacity,
      isOrdered: isOrdered()
    };

    const formDataJsonString = JSON.stringify(cart);

    setLoading(true);

    fetch('https://api.sheetbest.com/sheets/f6184306-ec95-45f1-916b-8ed51654733d', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: formDataJsonString
    })
      .then((res) => {
        if (res.ok) {
          setCard(JSON.stringify({ id: product.id, capacity: product.capacity, info: input }));

          return res.json();
        }

        throw new Error('Something went wrong');
      })
      .then(() => (window.location.href = '/submited'))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const found = products.find((item) => {
      let temp: any;
      if (item.id === id) {
        item.prices.forEach((element) => {
          if (element.capacity === text) {
            setProduct({
              capacity: element.capacity,
              price: element.price,
              salePrice: element.salePrice,
              image: item.prices[0].image
            });
            temp = item;
          }
        });
      }

      return temp;
    });
    if (found) {
      return setProduct((prevState: any) => ({
        ...prevState,
        id: found.id,
        name: found.name,
        gender: found.gender,
        brand: found.brand,
        status: true
      }));
    }

    return;
  }, [products]);

  return (
    <div className="cart">
      <div className="cart__title">
        <i className="ri-shopping-cart-line" />
        ការកម្ម៉ង់ទំនិញ
      </div>
      <div className="cart__bill">
        <img
          src={'https://lh3.googleusercontent.com/d/' + product.image}
          alt=""
          className="cart__bill-img"
        />
        <div>
          <div className="cart__bill-title">{product.name}</div>
          <div className="cart__bill-capacity">{product.capacity}</div>
        </div>
        <div className="product__price cart__bill-salePrice">
          <FormatMoney price={product.salePrice || product.price} />
        </div>
      </div>
      {/* {gifts.length > 0 && product.capacity !== '10ml' && (
        <div className="form_gift">
          <div className="form_gift-title">
            Quà tặng kèm từ <strong>Black Friday</strong>
          </div>
          {gifts.map((item: any) => {
            if (item !== 'Mất lượt') return <div key={item}>- {item}</div>;
          })}
        </div>
      )} */}
      <div className="view__policy">
        <div>
          <i className="ri-truck-line" />
          Free shipping
        </div>
        <div>
          <i className="ri-shield-check-line" />
          Authentic 100%
        </div>
        <div>
          <i className="ri-archive-line" />
          Exchange & return
        </div>
      </div>
      <div>
        <div className="cart__title">
          <i className="ri-edit-box-line" />
          ព័ត៌មានកម្ម៉ង់ទំនិញ
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <input
              type="text"
              className="form-input"
              required
              placeholder="គោត្តនាម និងនាម"
              defaultValue={input.name}
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className="form">
            <input
              type="number"
              autoComplete="false"
              className="form-input"
              required
              placeholder="លេខទូរស័ព្ទ"
              defaultValue={input.number}
              onChange={handleChange}
              name="number"
            />
            <div>
              {error === true && (
                <div style={{ marginTop: '5px' }}>
                  <h4>សូមបំពេញលេខទូរស័ព្ទឱ្យត្រឹមត្រូវ!</h4>
                </div>
              )}
            </div>
          </div>
          <div className="form">
            <input
              type="text"
              className="form-input"
              required
              placeholder="អាសយដ្ឋានទទួលទំនិញ"
              defaultValue={input.address}
              onChange={handleChange}
              name="address"
            />
          </div>
          <div className="form-payment">
            <img src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4" />
            <div>COD (បង់ប្រាក់នៅពេលទទួលទំនិញ)</div>
          </div>
          <div className="form" style={{ color: 'red', textAlign: 'center' }}>
            {typeof error === 'string' && (
              <>
                មានកំហុសកើតឡើង! <strong>សូមពិនិត្យមើលព័ត៌មានការបញ្ជាទិញម្តងទៀត</strong> <br />{' '}
                ឬទាក់ទងទៅ{' '}
                <a target="_blank" href="https://www.facebook.com/perfumeforyouvn.q9">
                  fanpage
                </a>{' '}
                ដើម្បីទទួលបានជំនួយ
              </>
            )}
          </div>
          <div className="form">
            <button type="submit" disabled={loading || error === true} className="btn-submit">
              {loading ? 'កំពុងបញ្ជាក់...' : 'បញ្ជាក់ការកម្ម៉ង់ទំនិញ'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
