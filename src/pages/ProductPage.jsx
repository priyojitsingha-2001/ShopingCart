import Product from '../components/Product'

export default function ProductPage() {

    let products = [
        { id: 1, name: "shoes", price: 20 },
        { id: 2, name: "phone", price: 200 },
        { id: 3, name: "pendrive", price: 10 },
        { id: 4, name: "pen", price: 2 },
        { id: 5, name: "Mackbook", price: 10000 }
    ]
    return (
        <div>
            <h1 className="text-2xl font-bold">Product Page</h1>
            <div className="my-2 flex flex-wrap">
                {products.map(item => (
                    <Product name={item.name} price={item.price} key={item.id} id={item.id} />
                ))}
            </div>
        </div>
    )
}
