import React from "react";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import PizzaFull from "./pages/PizzaFull";

import Header from "./componets/widgets/Header";
import { Routes, Route } from "react-router";

export const MyContext = React.createContext([]);

function App() {

  return (
    <div className="wrapper">
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/pizza/:id" element={<PizzaFull />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
