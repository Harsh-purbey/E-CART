import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container my-5" style={{ width: '52%' }}>
        {
          cart.length == 0 ? <>
            <div className="text-center"><h1>Cart is Empty</h1>
              <Link to={'/'} className='btn btn-warning my-3'>Continue  Shooping...</Link></div>
          </> :
            cart.map((product) => {
              return (<>
                <div className="card mb-3 my-5" style={{ width: '700px' }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-center">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <button className="btn btn-primary">{product.price + ' ₹'}</button>
                        <button className="btn btn-warning mx-3"
                          onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}>Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>)
            })

        }


      </div>
      {cart.length != 0 &&
        <div className="container my-5 text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button className='btn btn-warning mx-5'>CheckOut</button>
          <button onClick={() => setCart([])} className='btn btn-danger'>Clear Cart</button>
        </div>
      }
    </>
  )
}

export default Cart
