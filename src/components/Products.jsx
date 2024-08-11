import React, { useMemo } from 'react'
import { useProductData } from '../hooks/useProductData'
import { useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { Card, Container } from 'react-bootstrap';
import { addItem } from '../features/cartListSlice'
import LoginRegisterNav from './LoginRegisterNav';
import NavBar from './NavBar';

const Products = () => {
  const { products: initialProducts } = useProductData();
  const queryClient = useQueryClient();

  const searchProducts = queryClient.getQueryData('productSearch');
  const products = useMemo(() => searchProducts || initialProducts, [searchProducts, initialProducts]);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    alert(`${product.title} added to cart`)

  }

  return (



    <div>
      <LoginRegisterNav />
      {/* <NavBar /> */}
        <Container>
          <h1>Products</h1>
          <Card>

            <Card.Body>
              {products.map((product) => (
                <div key={product.id}>
                    <Card.Body>{product.id}</Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>{product.price}</Card.Text>
                    <Card.Text>{product.category}</Card.Text>
                    <Card.Text>{product.rating.rate}</Card.Text>
                  <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
              ))}
            </Card.Body>

          </Card>

        </Container>

    </div>


  )



}

export default React.memo(Products)