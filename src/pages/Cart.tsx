import React, { useEffect } from "react";

import CartSection from "../componets/modules/Cart/CartSection";
import { useDispatch } from "react-redux";
import { changeCountIndicator } from "../redux/slices/cart";

export default function Cart() {
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem('indicator', JSON.stringify({countIndicator : 0}))
    dispatch(changeCountIndicator({mean: ''}))
  }, [dispatch])
  
  return (
    <CartSection />
  );
}
