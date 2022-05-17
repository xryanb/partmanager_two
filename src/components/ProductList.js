import React from 'react';
import {Link} from 'react-router-dom';



const ProductList= (props)=>{
    return(
        <div>
            {props.products.map((product) =>{
                return <p key={product._id}><Link to={`/product/${product._id}`}>{product.title}</Link></p>}
            )}
        </div>
    )
}

export default ProductList;