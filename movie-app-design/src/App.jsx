import Home from "./pages/home/Home";
import "./app.scss";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route
          element={user ? <Home /> : <Navigate to='/register' />}
          exact
          path='/'
        />
        <Route
          element={!user ? <Register /> : <Navigate to='/' />}
          path='/register'
        />
        <Route element={<Login />} path='/login' />
        {user && (
          <>
            <Route element={<Home type='movie' />} path='/movies' />
            <Route element={<Home type='series' />} path='/series' />
            <Route element={<Watch />} path='/watch' />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
