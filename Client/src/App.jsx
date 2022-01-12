import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/login" caseSensitive={false} element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" caseSensitive={false} element={user ? <Navigate to="/" /> : <Register/>} />
        <Route path="/products/:cat" caseSensitive={false} element={<ProductList />} />
        <Route path="/product/:id" caseSensitive={false} element={<Product />} />
        <Route path="/cart" caseSensitive={false} element={<Cart />} />
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/" caseSensitive={false} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;