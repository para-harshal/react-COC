import { Outlet } from "react-router-dom";
import { Header } from "./components";

export default function Layout() {
    return <>
        <Header />
        <Outlet />
        <footer>
            <h1>footer section</h1>
        </footer>
    </>
}