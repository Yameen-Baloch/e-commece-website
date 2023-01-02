import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, } from 'react-redux'
import ProductComponent from './ProductComponent';
import {setProducts} from '../redux/Actions/ProductActions';

const ProductListing = () => {
    const dispatch = useDispatch();
   

    useEffect(() =>{
        const fetchProducts = async () =>{
            const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) =>{
                console.log("Err", err);
            })
            dispatch(setProducts(response.data));
        }
        fetchProducts();
    }, [])
   
  return (
    <div className="ui grid container">
        <ProductComponent />
    </div>
  )
}

export default ProductListing