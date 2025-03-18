import { NavLink } from "react-router-dom";

export default function Header() {
    return <>
        <h1>Demo app header</h1>
        <ul>
            <li>
                <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                    home
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                    contact
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                    about
                </NavLink>
            </li>
            <li>
                <NavLink to="/github" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                    github
                </NavLink>
            </li>
            <li>
                <NavLink to="/user" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                    user
                </NavLink>
            </li>
        </ul>
    </>
}