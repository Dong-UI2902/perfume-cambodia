import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ProductProps, StoreContextAPI } from './types';

const StoreContext = createContext<StoreContextAPI>({} as StoreContextAPI);

const Provider: React.FC<{ children: any }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    fetch(`/assets/data/data.json?${Math.random() * 100 + 1}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const setLocalStorage = (productIds: string[]) => {
    localStorage.setItem('cart', JSON.stringify(productIds));
  };

  const getLocalStorage = () => {
    return localStorage.getItem('cart');
  };

  const getCart = () => {
    const productIds = getLocalStorage();
    if (productIds) {
      return JSON.parse(productIds);
    }

    return [];
  };

  const getGift = () => {
    return localStorage.getItem('gift');
  };

  const setGift = (gift: any) => {
    const str = getGift();

    if (str) {
      const arr = [...JSON.parse(str)];
      arr.push(gift);
      return localStorage.setItem('gift', JSON.stringify(arr));
    }

    return localStorage.setItem('gift', JSON.stringify([gift]));
  };

  const setCard = (productId: string) => {
    const arr = getCart();
    arr.push(productId);
    setLocalStorage(arr);
  };

  const getSaleProduct = () => {
    return products.filter((item) => item.prices[0].salePrice !== '');
  };

  const memoValue = useMemo(
    () => ({
      loading,
      setLoading,
      error,
      products,
      setProducts,
      setLocalStorage,
      getLocalStorage,
      getCart,
      setCard,
      setGift,
      getGift,
      getSaleProduct
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products, loading, error]
  );

  return <StoreContext.Provider value={memoValue}>{children}</StoreContext.Provider>;
};

export const useStore = (): StoreContextAPI => useContext(StoreContext);

export default Provider;
