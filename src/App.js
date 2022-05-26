import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Footer from './Pages/Shared/Footer';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import NotFound from './Pages/Shared/NotFound';
import MakeAdmin from './Pages/Dashboard/AdminDB/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Pages/Dashboard/AdminDB/ManageAllOrders/ManageAllOrders';
import AddProduct from './Pages/Dashboard/AdminDB/AddProduct/AddProduct';
import Payment from './Pages/Dashboard/Payment';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ManageProducts from './Pages/Dashboard/AdminDB/ManageProducts/ManageProducts';

function App() {
  return (
    <div className='app-body' >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>} ></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>} ></Route>
          <Route path='addreview' element={<AddReview></AddReview>} ></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          {/* admin */}
          <Route path='makeAdmin' element={<RequireAdmin> <MakeAdmin></MakeAdmin> </RequireAdmin>}></Route>
          <Route path='manageOrders' element={<RequireAdmin> <ManageAllOrders></ManageAllOrders> </RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin> <AddProduct></AddProduct> </RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin> <ManageProducts></ManageProducts> </RequireAdmin>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
