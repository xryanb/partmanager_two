import axios from 'axios';
import React, {useEffect,useState} from 'react';

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';


const Main= () => {
    const[products,setProduct]=useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/product')
        .then(res=>setProduct(res.data))
        .catch(err=>console.log('Error: ', err))
    },[])


    return (
        <>
        <ProductForm/>
        <ProductList products={products}/>
        </>
    )
}

export default Main;