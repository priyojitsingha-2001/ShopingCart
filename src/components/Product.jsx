import { useContext } from 'react'
import { cartContext } from '../context/CartContext'

export default function Product({ name, price, id }) {
    const { setItems } = useContext(cartContext)
    return (
        <div className='bg-white text-gray-700 min-h-11 shadow-lg rounded-md m-1 px-3 py-2 flex justify-between'>
            <div className="px-4">
                <h1 className="text-2xl font-bold">{name}</h1>
                <p className="font-bold text-gray-700">Price: {price}$</p>
            </div>
            <div className="flex justify-center items-center">
                <button onClick={() => setItems(items => [...items, { id, name, price }])} className="bg-gray-200 px-3 py-2 rounded-md shadow-lg active:bg-gray-300 active:shadow-none">add to cart</button>
            </div>
        </div>
    )
}

Product.defaultProps = {
    name: "Product Name",
    price: 0.00,
    // quantity: 0
}
