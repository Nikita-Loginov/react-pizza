export type PizzaType = {
  category: number;
  currency: string;
  id: string | number;
  imageUrl: string;
  price: number;
  rating: number;
  sizes: number[];
  title: string;
  types: number[];
};

export type CartPizzaType = PizzaType & {
  sizeActive?: number;
  typeActive: number;
  count : number;
}
