function Car(props) {
    const handleClick = () => {
        // Run whatever code we want
        // Before calling the prop-passed function
        props.doHonk(props.id)
    }
    
    return (
        <article onClick={handleClick}>
            <h3>{props.type}</h3>
        </article>
    )
}

export default Car;