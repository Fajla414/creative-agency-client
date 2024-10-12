import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Admin from './components/Admin/Admin/Admin';
import AddService from './components/Admin/AddService/AddService';
import Login from './components/Login/Login/Login';
import Client from './components/Client/Client/Client';
import ClientOrder from './components/Client/ClientOrder/ClientOrder';
import ClientServiceList from './components/Client/ClientServiceList/ClientServiceList';
import ClientReview from './components/Client/ClientReview/ClientReview';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AdminServiceList from './components/Admin/AdminServiceList/AdminServiceList';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import Review from './components/Review/Review/Review';

export const MyContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <MyContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/reviews" element={<Review />} />
          <Route path='/admin/serviceList' element={<AdminServiceList />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/makeAdmin' element={<MakeAdmin />} />
          <Route path='/admin/addSevice' element={<AddService />} />
          <Route path='/login' element={<Login />} />
          <Route path='/services/:serviceId' element={<PrivateRoute><ClientOrder /></PrivateRoute>} />
          <Route path='/client/order' element={<ClientOrder />} />
          <Route path='/client/serviceList' element={<ClientServiceList />} />
          <Route path='/client/review' element={<ClientReview />} />
          <Route path='/profile' element={<ClientOrder />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;