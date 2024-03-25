import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product';
import { items } from './Data';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';


const ProductDetail = ({cart,setCart}) => {


  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
        id, price, title, description, imgSrc
    }
    setCart([...cart, obj]);
    toast.success('Item added Successfully on Cart', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      }

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  useEffect(() => {
    const filterproduct = items.filter((product) => product.id == id);
    setProduct(filterproduct[0]);
    const filterrelatedproduct = items.filter((pro) => pro.category == product.category);
    setRelatedProduct(filterrelatedproduct);
  }, [id,product.category])


  return (
    <>
     <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className='text-center'>
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary">{product.price + ' ₹'}</button>
          <button  className="btn btn-warning mx-3"
                                            onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}>Add To Cart</button>
        </div>
      </div>
      <h1 className='text-center'>Related Products</h1>
      <Product items={relatedProduct} cart={cart} setCart={setCart} />
    </>
  )
}

export default ProductDetail;
