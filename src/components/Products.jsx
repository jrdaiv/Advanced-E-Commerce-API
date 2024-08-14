import React, { useMemo } from 'react'
import { useProductData } from '../hooks/useProductData'
import { useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { Card, Container, ListGroup } from 'react-bootstrap';
import { addToCart, calculateTotals } from '../features/cartListSlice'
import LoginRegisterNav from './LoginRegisterNav';
import '../App.css'

const Products = () => {
  const { products: initialProducts } = useProductData();
  const queryClient = useQueryClient();

  const searchProducts = queryClient.getQueryData('productSearch');
  const products = useMemo(() => searchProducts || initialProducts, [searchProducts, initialProducts]);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(calculateTotals());
    console.log(product);
    alert(`${product.title} added to cart`)

  }

  return (



    <div className="product-container">
      <LoginRegisterNav />
      <div className="container-sm container-md">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-6 col-sm-6" key={product.id}>
              <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Category: {product.category}</ListGroup.Item>
                  <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                  <ListGroup.Item>Rating: {product.rating.rate}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </Card.Body>
              </Card>
            </div>
          ))}

        </div>


      </div>
        

    </div>


  )



}

export default React.memo(Products)