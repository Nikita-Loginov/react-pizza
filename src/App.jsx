import React, { useEffect, useState } from "react";

import Home from "./pages/Home";

import Header from "./componets/widgets/Header";
import axios from "axios";

export const MyContext = React.createContext([]);

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const result = await axios.get(
          "https://6741cf43e4647499008ed9f7.mockapi.io/items"
        );

        setPizzas(() => result.data);
      } catch (error) {
        console.error("Ошибка при получение пицц:", error);
      }
    };

    getPizzas();
  }, []);

  return (
    <MyContext.Provider value={pizzas}>
      <div className="wrapper">
        <Header />

        <main className="main">
          <Home />
        </main>
      </div>
    </MyContext.Provider>
  );
}

export default App;
