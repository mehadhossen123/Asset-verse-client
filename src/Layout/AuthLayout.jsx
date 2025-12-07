import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const AuthLayout = () => {
    return (
      <div>
        <div className="max-w-7xl mx-auto min-h-screen flex flex-col">
          <header>
            <Navbar />
          </header>

          <main className="flex-grow">
            <Outlet />
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    );
};

export default AuthLayout;