import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="home">
            <h1 className="text-2xl font-bold">Shoping Cart App</h1>
            <p className="my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem perspiciatis tempore vel eaque explicabo ab laudantium quia maxime voluptate hic tenetur soluta et itaque sit fugiat dignissimos ipsam, provident incidunt.</p>
            <div className="flex gap-1">
                <p>Go to: </p>
                <Link className="underline px-1" to='/products'>products</Link>
                <Link className="underline px-1" to='/cart'>cart</Link>
            </div>
        </div>
    )
}
