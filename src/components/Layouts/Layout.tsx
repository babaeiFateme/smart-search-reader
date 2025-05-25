import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className=" mt-16">
            <h1 className="my-8 text-center fw-600 mb-48">Smart Search Reader</h1>

            <Outlet />
        </div>
    )
}

export default Layout