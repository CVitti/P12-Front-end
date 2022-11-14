// React/React-router components import
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Custom Components and pages import
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ProfilePage from '../pages/ProfilePage';
import ErrorPage from '../pages/ErrorPage';

// CSS Import
import '../styles/pages/App.css';

/**
 * Router of the App
 * @returns JSX code according to current Route
 */
function AppRouter() {
  return (
      <BrowserRouter>
        {/* Header and sidebar, common to every route */}
        <Header />
        <SideBar />

        <Routes>         
          {/* Profile Route */}
          <Route path="/user/:id" element={<ProfilePage />}/>

          {/* Error Route */}
          <Route path="*" element={<ErrorPage /> }/>
        </Routes>
      </BrowserRouter>  
  );
}
export default AppRouter;
