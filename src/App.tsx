import React, { Suspense } from "react";

import Header from "./componets/widgets/Header";
import { Routes, Route } from "react-router";

const Home = React.lazy(() => import("./pages/Home"));
const Cart = React.lazy(() => import("./pages/Cart"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const PizzaFull = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<></>}>
                <Home />
              </Suspense>
            }
          />

          <Route
            path="/cart"
            element={
              <Suspense fallback={<></>}>
                <Cart />
              </Suspense>
            }
          />

          <Route
            path="/pizza/:id"
            element={
              <Suspense fallback={<></>}>
                <PizzaFull />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <Suspense fallback={<></>}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
