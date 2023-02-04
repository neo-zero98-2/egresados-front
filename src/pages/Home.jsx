import { Outlet } from "react-router"
import { Navbar } from "../components/Navbar"

export const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <Outlet/>
            </div>
        </>
    )
}
