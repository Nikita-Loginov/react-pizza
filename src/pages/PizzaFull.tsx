import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import Pizza from "../componets/modules/PizzaFull/Pizza";

import { PizzaType } from "../types/PizzaTypes";

export default function PizzaFull() {
  const [currentPizza, setCurrentPizza] = useState<PizzaType>();
  const [pizzasOther, setPizzasOther] = useState<PizzaType[]>();

  const params = useParams();

  useEffect(() => {
    const fetchCurrentPizza = async () => {
      const { data } = await axios.get<PizzaType>(
        `https://6741cf43e4647499008ed9f7.mockapi.io/items/${params.id}`
      );

      setCurrentPizza(data);

      fetchOtherPizzas(data.id);
    };

    const fetchOtherPizzas = async (currentPizzaId : string | number) => {
      const { data } = await axios.get<PizzaType[]>(
        `https://6741cf43e4647499008ed9f7.mockapi.io/items?limit=3&page=1`
      );

      const otherPizzas = data.filter((pizza) => pizza.id !== currentPizzaId);

      setPizzasOther(() => otherPizzas);
    };

    fetchCurrentPizza();
  }, [params.id]);
  return (
    <div className="pizzaFull">
      <div className="container">
        <div className="pizzaFull__inner">
          {currentPizza && <Pizza pizza={currentPizza} />}

          <div className="pizzaFull__another">
            {pizzasOther && <h2>Другие пиццы</h2>}

            <div className="pizzaFull__items">
              {pizzasOther &&
                pizzasOther.map((pizza) => (
                  <Pizza key={pizza.id} pizza={pizza} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
