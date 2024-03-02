import { useContext, useMemo } from 'react'
import { cartContext } from '../context/CartContext'

export default function CartPage() {
    const { items, setItems } = useContext(cartContext)

    const totalPrice = useMemo(() => {
        return items.reduce((total, item) => total + item.price, 0)
    }, [items])


    const removeItems = (itemName) => {
        setItems(items => items.filter(item => item.name !== itemName))
    }
    return (
        <div>
            <h1 className="text-2xl font-bold">Cart Page</h1>
            <div className="">
                {items.map(item => (
                    <div className='bg-slate-100 my-1 max-w-80 mx-auto shadow-lg rounded-md py-3 px-4 flex justify-between' key={item.id}>
                        <div className="flex">
                            <button onClick={() => removeItems(item.name)} className='text-gray-500'>×</button>
                            <h1 className="font-semibold px-2 text-gray-700">{item.name}</h1>
                        </div>
                        <p className="">{item.price}$</p>
                    </div>
                ))}
                {totalPrice != 0 ? <p className='text-right md:text-center py-4 font-bold text-gray-700'>Total: {totalPrice}$</p> :
                    <p className='text-center py-3'>No Items in Cart</p>}
            </div>
        </div>
    )
}
