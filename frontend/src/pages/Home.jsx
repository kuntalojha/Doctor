// File: frontend/src/pages/Home.jsx

// Importing React module
import React from 'react';

// Importing components
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctors from '../components/TopDoctors';

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <h1>Welcome to the Home Page</h1>
    </div>
  );
};

export default Home;
