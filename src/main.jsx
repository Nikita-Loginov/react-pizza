import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

import "./styles/base/_reset.scss";
import "./styles/base/_global.scss";
import "./styles/base/_fonts.scss";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
