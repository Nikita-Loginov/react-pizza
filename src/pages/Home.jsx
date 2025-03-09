import { useState, useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import Top from "../componets/shared/Top";
import Pizzas from "../componets/shared/Pizzas";

import { setCountItems } from "../redux/slices/pagination";

export default function Home() {
  const dispatch = useDispatch();
  const [pizzas, setPizzas] = useState([]);


  const {activeIndexFilter, activeSort} = useSelector(
    (state) => state.filters
  );

  const activePage = useSelector(state => state.pagination.activePage);

  useEffect(() => {
    const getCountItems = async () => {
      try {
        const result = await axios.get(
          `https://6741cf43e4647499008ed9f7.mockapi.io/items?category=${
            activeIndexFilter ? activeIndexFilter : ""
          }&sortBy=${activeSort.sortProperty}&order=${activeSort.detail}`
        );

        getPizzas(result.data);
        dispatch(setCountItems(result.data.length));
      } catch (error) {
        console.error("Ошибка при получение количества:", error);
      }
    };

    const getPizzas = (pizzas) => {
      const arr = activePage
        ? pizzas.slice(activePage * 4, 4 * activePage + 4)
        : pizzas.slice(activePage, 4 * activePage + 4);
      setPizzas(() => arr);
    };

    getCountItems();
  }, [activeIndexFilter, activeSort, activePage]);

  return (
    <>
      <Top />

      <Pizzas pizzas={pizzas} />
    </>
  );
}
