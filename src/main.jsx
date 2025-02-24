import { createRoot } from 'react-dom/client';
import "./styles/base/_reset.scss"
import "./styles/base/_global.scss"
import "./styles/base/_fonts.scss"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
