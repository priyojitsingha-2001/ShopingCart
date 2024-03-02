import { NavLink, Outlet } from 'react-router-dom'
export default function RootLayout() {
    return (
        <div className="root-layout">
            <header className='flex justify-end items-center'>
                <nav className="">
                    <NavLink to='/' className="px-3 py-2 bg-gray-300 mx-3 rounded-md shadow-md active:shadow-none">home</NavLink>
                    <NavLink to='/products' className="px-3 py-2 bg-gray-300 mx-3 rounded-md shadow-md active:shadow-none">products</NavLink>
                    <NavLink to='/cart' className="px-3 py-2 bg-gray-300 mx-3 rounded-md shadow-md active:shadow-none">cart</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
