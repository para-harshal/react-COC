function Card({ name, hobbies }) {
    return (<>
        <h1>name: {name}</h1>
        <ul>
            {hobbies.map((value, index) => {
                return <li key={index}>{value}</li>
            })}
        </ul>
    </>)
}

export default Card;