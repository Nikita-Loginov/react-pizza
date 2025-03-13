import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Top from "../componets/shared/Top";
import Pizzas from "../componets/shared/Pizzas";

import { setCountItems } from "../redux/slices/pagination";
import { fetchPizzas, setPizzas } from "../redux/slices/pizzas";

export default function Home() {
  const dispatch = useDispatch();
  const {items} = useSelector(state => state.pizzas);

  const {activeIndexFilter, activeSort} = useSelector(
    (state) => state.filters
  );

  const activePage = useSelector(state => state.pagination.activePage);

  useEffect(() => {
    const getCountItems = async () => {
      try {
        const result = await dispatch(fetchPizzas({activeIndexFilter, activeSort})).unwrap()

        getPizzas(result);
        dispatch(setCountItems(result.length));
      } catch (error) {
        console.error("Ошибка при получение количества:", error);
      }
    };

    const getPizzas = (items) => {
      const arr = activePage
        ? items.slice(activePage * 4, 4 * activePage + 4)
        : items.slice(activePage, 4 * activePage + 4);
        dispatch(setPizzas((arr)))
    };

    getCountItems();
  }, [activeIndexFilter, activeSort, activePage, dispatch]);

  return (
    <>
      <Top />

      <Pizzas pizzas={items} />
    </>
  );
}
