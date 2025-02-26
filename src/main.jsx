import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from "react-router";

import "./styles/base/_reset.scss"
import "./styles/base/_global.scss"
import "./styles/base/_fonts.scss"

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
