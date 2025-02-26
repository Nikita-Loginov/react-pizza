import React, { useEffect, useState } from "react";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

import Header from "./componets/widgets/Header";
import axios from "axios";
import { Routes, Route } from "react-router";

export const MyContext = React.createContext([]);

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndexFilter, setActiveIndexFilter] = useState(0);
  const [activeSort, setActiveSort] = useState({
    name: "популярности",
    icon: "/icons/arrow-up.svg",
    detail: "desc",
    sortProperty: "rating",
  });

  const filterInfo = {
    activeIndexFilter,
    setActiveIndexFilter,
  };

  const sortInfo = {
    activeSort,
    setActiveSort
  }

  useEffect(() => {
    setIsLoading(false);

    const getPizzas = async () => {
      try {
        const result = await axios.get(
          `https://6741cf43e4647499008ed9f7.mockapi.io/items?category=${
            activeIndexFilter ? activeIndexFilter : ""
          }&sortBy=${activeSort.sortProperty}&order=${activeSort.detail}`
        );

        setPizzas(() => result.data);
        setIsLoading(() => true);
      } catch (error) {
        console.error("Ошибка при получение пицц:", error);
      }
    };

    getPizzas();
  }, [activeIndexFilter, activeSort]);

  return (
    <MyContext.Provider value={{ pizzas, isLoading, filterInfo, sortInfo }}>
      <div className="wrapper">
        <Header />

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </MyContext.Provider>
  );
}

export default App;
