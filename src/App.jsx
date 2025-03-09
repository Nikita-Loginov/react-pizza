import React, { useEffect, useState } from "react";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

import Header from "./componets/widgets/Header";
import axios from "axios";
import { Routes, Route } from "react-router";

export const MyContext = React.createContext([]);

function App() {
  // const [pizzas, setPizzas] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [activeIndexFilter, setActiveIndexFilter] = useState(0);
  // const [activeSort, setActiveSort] = useState({
  //   name: "популярности",
  //   icon: "/icons/arrow-up.svg",
  //   detail: "desc",
  //   sortProperty: "rating",
  // });
  // const [countItems, setCountItems] = useState(0);
  // const [activePage, setActivePage] = useState(0);

  // const filterInfo = {
  //   activeIndexFilter,
  //   setActiveIndexFilter,
  // };

  // const sortInfo = {
  //   activeSort,
  //   setActiveSort,
  // };

  // const paginationInfo = {
  //   countItems,
  //   activePage,
  //   setActivePage
  // };

  // useEffect(() => {

  //   const getCountItems = async () => {
  //     try {
  //       const result = await axios.get(
  //         `https://6741cf43e4647499008ed9f7.mockapi.io/items?category=${
  //           activeIndexFilter ? activeIndexFilter : ""
  //         }&sortBy=${activeSort.sortProperty}&order=${activeSort.detail}`
  //       );

  //       getPizzas(result.data);
  //       setCountItems(result.data.length);
  //     } catch (error) {
  //       console.error("Ошибка при получение количества:", error);
  //     }
  //   };

  //   const getPizzas = (pizzas) => {
  //     // console.log(activePage)
  //     const arr = activePage ? pizzas.slice(activePage * 4, (4 * (activePage)) + 4) : pizzas.slice(activePage, (4 * (activePage)) + 4);
  //     setPizzas(() => arr);
  //     setIsLoading(() => true);
  //   };

  //   getCountItems();
  // }, [activeIndexFilter, activeSort, activePage]);

  return (
    <div className="wrapper">
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
