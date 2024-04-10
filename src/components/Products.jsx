import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://dummyjson.com/products?limit=30&skip=10');
            const data = await res.json();
            console.log(data.products);
            setProducts(data.products);
        };
        fetchProducts();
    }, []);
    return (
        <div className='product-wrapper grid grid-cols-4 gap-10 w-full py-10'>
            {products.map((productItem) => {
                return <div className="card border border-[rgba(0,0,0,0.8)] rounded-lg flex flex-col justify-between items-center gap-3 px-2 py-4 " key={productItem.id}>
                    <div className="img-box flex items-center justify-center w-56 h-56 ">
                        <img src={productItem.thumbnail} alt="" className=' object-contain w-full h-full' />
                    </div>
                    <p className="title text-center w-full">{productItem.title}</p>
                    <p className="price text-center text-xl font-medium w-full">${productItem.price}</p>
                    <button className="addCart bg-teal-500 text-white rounded-lg px-4 py-2">Add to Cart</button>
                </div>
            })}
        </div>
    )
}

export default Products
