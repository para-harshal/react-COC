import { useContext } from "react";
import { useState } from "react";
import UserContext from "../../context/UserContext";

export default function Login() {
    const { setUser } = useContext(UserContext);

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }

    return (<>
        < input type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)
            } />

        <input type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)
            } />

        <button onClick={handleSubmit}>
            submit
        </button>
    </>);
}