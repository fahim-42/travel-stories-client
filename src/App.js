import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';

import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Homepage/Home/Home';

import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
// import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />

            <Route path='/dashboard' element={<Dashboard />} >
              <Route path='/dashboard' element={<DashboardHome />} />

              {/* Admin Route */}
              {/* <Route exact path={'/dashboard/admin'} element={<AdminRoute><MakeAdmin /></AdminRoute>} /> */}
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
