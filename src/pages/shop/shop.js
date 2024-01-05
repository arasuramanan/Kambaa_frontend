import React from 'react';
import  './shop.css';
import { PRODUCTS } from "../../product";
import { Product } from './product';
import "./shop.css";

export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1> Kambaa E-Shopping🛒</h1>
        </div>
        <div className='products'>{PRODUCTS.map((product) => <Product data={product}/>)}</div>
    </div>
  )
}
  