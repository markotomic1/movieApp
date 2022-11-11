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
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import { Navigate } from "react-router-dom";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      {user ? (
        <>
          <Topbar />
          <div className='container'>
            <Sidebar />

            <Routes>
              <Route path='/' element={<Home />} exact />
              <Route path='/users' element={<UserList />} />
              <Route path='/user/:userId' element={<User />} />
              <Route path='/newUser' element={<NewUser />} />
              <Route path='/movies' element={<ProductsList />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path='/newProduct' element={<NewProduct />} />
              <Route path='/lists' element={<ListList />} />
              <Route path='/list/:listId' element={<List />} />
              <Route path='/newList' element={<NewList />} />
              <Route path='/login' element={<Navigate to='/' />} />
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} exact />
          <Route path='/login' element={<Login />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
