/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useRef, useState, useEffect } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { Layout } from 'layouts/default';
import Home from './Home';
import Details from './Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pets-details/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
