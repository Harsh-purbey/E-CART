import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product';
import { items } from './Data';


const SearchItem = ({cart,setCart}) => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {

    const searchItem = items.filter((product) => { return (product.title.toLowerCase().includes(term.toLowerCase())) })
    setFilterData(searchItem);

  }, [term]);

  return (
    <>
      <Product items={filterData} cart={cart} setCart={setCart} />
    </>
  )
}

export default SearchItem
