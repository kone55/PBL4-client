import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import Success from "./pages/Success";
import { useSelector } from "react-redux";


const App = () => {
  return <Home />;
};

export default App;