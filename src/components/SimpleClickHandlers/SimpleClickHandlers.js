function SimpleClickHandlers() {
    const sayHello = () => {
        alert("Hello there");
    }

    return (
        <section>
            <h2>Simple Click Handler Component</h2>
            <button onClick={sayHello}>
                Click me (named function)
            </button>

            <button onClick={(event) => {
                console.log(event);
                alert("Hello from the anonymous function");
            }}>
                Click me (anonymous function)
            </button>
        </section>

    )
}

export default SimpleClickHandlers;