import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './Navigation';
import Header from './Header';
import Discountitem from './Discountitem';
import Latestblog from './Latestblog';
import Subbanner from './Subbanner';
import GridView from './GridView';
import BrandList from './BrandList';
import Login from './Login';
import AdminLeftBar from './AdminLeftBar';
import ProductDescription from './ProductDescription';
import AddressList from './AddressList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddressList/>
  </React.StrictMode>
);

