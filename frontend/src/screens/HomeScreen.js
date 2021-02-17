import React, { useState , useEffect } from 'react'

import Product from '../components/Product'
//import Header from './components/Header'
//import Footer from './components/Footer'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'


const HomeScreen = () => {
const [products, setProducts] = useState([]) 


useEffect(() => {

  const fetchProducts = async () => { 
    const {data} = await axios.get('/api/products')

    setProducts(data)
  }

  fetchProducts()

},[])

    return (
        <div>
            <h1>Latest product</h1>

            <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3}>
          <Product product = {product} />

              </Col>
            ))}
          </Row>

        </div>
    )
}

export default HomeScreen
