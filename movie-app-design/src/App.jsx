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

function App() {
  const user = true;
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
        <Route
          element={!user ? <Login /> : <Navigate to='/' />}
          path='/login'
        />
        {user && (
          <>
            <Route element={<Home type='movies' />} path='/movies' />
            <Route element={<Home type='series' />} path='/series' />
            <Route element={<Watch />} path='/watch' />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
