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
 * 
 * @returns Pages and components code according to the currently used route
 */
function AppRouter() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>         

          {/* Profile Route */}
          <Route path="/user/:id" element={<React.Fragment> <Header /> <SideBar /> <ProfilePage /> </React.Fragment>}/>

          {/* Error Route */}
          <Route path="*" element={<React.Fragment> <Header /> <SideBar /> <ErrorPage /> </React.Fragment>}/>

        </Routes>
      </BrowserRouter>
    </React.Fragment>    
  );
}

export default AppRouter;
