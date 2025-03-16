import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Top from "../componets/shared/Top";
import Pizzas from "../componets/shared/Pizzas";

import { setCountItems } from "../redux/slices/pagination";
import { fetchPizzas, setPizzas } from "../redux/slices/pizzas";

import { AppDispatch, RootState } from "../redux/store";
import { PizzaType } from "../types/PizzaTypes";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const {items} = useSelector((state : RootState) => state.pizzas);
  const [isPizza, setIsPizza] = useState<boolean>(false);

  const {activeIndexFilter, activeSort} = useSelector(
    (state : RootState) => state.filters
  );

  const activePage = useSelector((state : RootState) => state.pagination.activePage);

  useEffect(() => {
    setIsPizza(false);
    
    const getCountItems = async () => {
      try {
        const result : PizzaType[] = await dispatch(fetchPizzas({activeIndexFilter, activeSort})).unwrap()

        getPizzas(result);
        dispatch(setCountItems(result.length));
      } catch (error) {
        console.error("Ошибка при получение количества:", error);
      }
    };

    const getPizzas = (items : PizzaType[]) => {
      const arr = activePage
        ? items.slice(activePage * 4, 4 * activePage + 4)
        : items.slice(activePage, 4 * activePage + 4);
        dispatch(setPizzas((arr)))

        setIsPizza(() => true)
    };

    getCountItems();
  }, [activeIndexFilter, activeSort, activePage, dispatch]);

  return (
    <>
      <Top />

      {isPizza && <Pizzas pizzas={items} />}
    </>
  );
}
