import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/userPage/User";
import NewUser from "./pages/newUser/NewUser";
import ProductsList from "./pages/productList/ProductsList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/newUser' element={<NewUser />} />
          <Route path='/products' element={<ProductsList />} />
          <Route path='/product/:product' element={<Product />} />
          <Route path='/newProduct' element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
