import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ImageSliderWithControls from './components/ImageSliderWithControls';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ImageSliderWithControls />
  </React.StrictMode>
);

