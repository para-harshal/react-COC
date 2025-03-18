import { Route, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import { About, Contact, Home, User, Github } from "./components";
import { githubInfoLoader } from "./components/github/Github";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/github" loader={githubInfoLoader} element={<Github />} />
            <Route path='user/:userid' element={<User />} />
        </Route>
    )
)

export default router;