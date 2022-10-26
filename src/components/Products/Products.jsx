import { useState } from "react"
import { useEffect } from "react"


export const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
            .then((res) => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="modal__content">
            {
                products.map((product) => (
                <div key={product.id}>
                    <img src={product.images[0]} />
                    <div> {product.title} </div>
                    <div> {product.price}</div> 
                </div>))
            }
        </div>
    )
}