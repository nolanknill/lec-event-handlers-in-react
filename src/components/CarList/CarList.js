import Car from "../Car/Car";

const CarList = () => {
    const cars = [
        {
            id: 1,
            type: "BMW M4",
            price: 70000
        },
        {
            id: 2,
            type: "AC Cobra",
            price: 2000000
        },
        {
            id: 3,
            type: "Audi A4",
            price: 60000
        },
        {
            id: 4,
            type: "Scion FR-S",
            price: 0
        }
    ];

    const honkHorn = (id) => {
        const car = cars.find((car) => { 
            return car.id === id  
        });

        alert("BEEP BEEP, this is a " + car.type + " and the value is " + car.price);
    }

    return (
        <section>
            <h2>Cars List</h2>

            {cars.map(car => {
                return <Car 
                    key={car.id} 
                    id={car.id} 
                    type={car.type} 
                    doHonk={honkHorn} 
                />
            })}
        </section>
    );
}

export default CarList;