import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import './app.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";


function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" caseSensitive={false} element={<Home />} />
          <Route path="/users" caseSensitive={false} element={ <UserList/>} />
          <Route path="/user/:userId" caseSensitive={false} element={ <User/>} />
          <Route path="/newUser" caseSensitive={false} element={ <NewUser/>} />
          <Route path="/products" caseSensitive={false} element={ <ProductList/>} />
          <Route path="/product/:productId" caseSensitive={false} element={ <Product/>} />
          <Route path="/newproduct" caseSensitive={false} element={ <NewProduct/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
