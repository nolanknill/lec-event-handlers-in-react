const FormHandler = () => {    
    const handleSubmit = (event) => {
        event.preventDefault();

        const carType = event.target.carType.value;
        const carPrice = event.target.carPrice.value;
         
        console.log("Car type: " + carType);
        console.log("Car price: " + carPrice);
    }


    return (   
        <form onSubmit={handleSubmit}>
            <h2>FormHandler Component</h2>

            <label htmlFor="carType">Type of Car:</label>
            <input name="carType" id="carType" type="text" />

            <label htmlFor="carPrice">Price of Car:</label>
            <input name="carPrice" id="carPrice" type="text"></input>

            <button>Submit</button>
        </form>

    )
}

export default FormHandler;